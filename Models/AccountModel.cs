namespace Discordium
{
	public class AccountModel
	{
		public AccountModel(string uname,string pwd,string slt)
		{
			username=uname;
			password=pwd;
			salt=slt;
		}
		public string username { get; set; }
		public string password { get; set; }
		public string salt{get;}

	}
}