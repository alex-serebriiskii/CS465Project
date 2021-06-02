using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace Discordium{

	public class MessageHub:Hub<IChatClient>
	{
		public async Task SendMessage(MessageModel message)
		{
			var con = Context.GetHttpContext();
			var cookie= con.Request.Cookies["discordium_cookie"];
			await Clients.All.ReceiveMessage(message);
		} 	
	}
}