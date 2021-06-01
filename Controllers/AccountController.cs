using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace Discordium
{
	public class AccountController : Controller
	{
		private IAuthService _authService;
		public AccountController(IAuthService authService)
		{
			_authService=authService;
		}

		public ActionResult Login(UserModel model)
		{
			if (_authService.Login(model)){
				//return successs
				return new JsonResult(new{
					OkResult=true
				});
			}
			return new JsonResult(new{
					OkResult=false
			});
			//return failure
		}

		public ActionResult Register(UserModel model)
		{
			if (_authService.Register(model)){
				return new JsonResult(new{
					OkResult=true
				});
				//return success
			}
			return new JsonResult(new{
					OkResult=true
			});
			//return failure
		}

		
		
	}
}