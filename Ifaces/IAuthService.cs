namespace Discordium
{
	public interface IAuthService
	{
		bool Login(UserModel model);
		bool Register(UserModel model);

	}
}