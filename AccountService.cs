using System.Collections.Generic;
using System.IO;
using System;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
namespace Discordium
{
	public class AuthService : IAuthService
	{
		private Dictionary<string, AccountModel> accounts;
		private string acctfile;

		public AuthService()
		{
			acctfile = "./accounts.csv";
			accounts = new Dictionary<string, AccountModel>();
			//Preempt failure to open file
			if (!File.Exists(acctfile))
			{
				return;
			}
			//Ideally this would be done via config and a database, but for brevity it's a hardcoded csv	
			using (var reader = new StreamReader(acctfile))
			{
				while (!reader.EndOfStream)
				{
					var line = reader.ReadLine();
					var split = line.Split(',');
					accounts.Add(split[0], new AccountModel(split[0], split[1], split[2]));
				}
			}
		}
		public bool Login(UserModel model)
		{
			//Check if the account already exists
			if (accounts.ContainsKey(model.username))
			{
				var act = accounts[model.username];
				string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
			password: model.password,
			salt: Convert.FromBase64String(act.salt),
			prf: KeyDerivationPrf.HMACSHA1,
			iterationCount: 10000,
			numBytesRequested: 256 / 8));
				if (accounts[model.username].password == hashed)
				{
					return true;
				}
			}
			return false;
		}
		public bool Register(UserModel model)
		{
			if (accounts.ContainsKey(model.username))
			{
				return false;
			}

			//Generate salt
			byte[] salt = new byte[128 / 8];
			//According to microsoft this is a CSPRNG
			using (var rng = RandomNumberGenerator.Create())
			{
				rng.GetBytes(salt);
			}
			//Generate password hash
			string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
			password: model.password,
			salt: salt,
			prf: KeyDerivationPrf.HMACSHA1,
			iterationCount: 10000,
			numBytesRequested: 256 / 8));

			AccountModel accountModel = new AccountModel(model.username, hashed, Convert.ToBase64String(salt));
			accounts.Add(accountModel.username,accountModel);
			SaveAccountToFile(accountModel);
			return true;
		}
		private void SaveAccountToFile(AccountModel model)
		{

			string acct = model.username + "," + model.password + "," + model.salt;
			if (!File.Exists(acctfile))
			{
				using (StreamWriter sw = File.CreateText(acctfile))
				{
					sw.WriteLine(acct);
				}
				return;
			}
			using (StreamWriter sw = File.AppendText(acctfile))
			{
				sw.WriteLine(acct);
			}
		}
	}
}