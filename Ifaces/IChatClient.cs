using System.Threading.Tasks;
namespace Discordium
{
	public interface IChatClient
	{
		Task ReceiveMessage(MessageModel model);
	}
}