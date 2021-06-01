using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace Discordium{

	public class MessageHub:Hub<IChatClient>
	{
		public async Task SendMessage(MessageModel message)
		{
			await Clients.All.ReceiveMessage(message);
		} 	
	}
}