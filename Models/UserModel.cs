namespace Discordium
{
	public class UserModel 
	{
		public UserModel(){
			
		}
		public UserModel(string uname,string pwd)
		{
			username=uname;
			password=pwd;
		}
		public string username { get; set; }
		public string password { get; set; }

	}
}