using System.Collections.Generic;
using System.Linq;
using System.Web;
using System;
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
				// TODO: set cookie?
				return LocalRedirect("/chat");
				//return successs
			}
			return LocalRedirect("/?error="+HttpUtility.UrlEncode("Error, unable to login"));
			//return failure
		}

		public LocalRedirectResult Register(UserModel model)
		{
			if (_authService.Register(model)){
				// TODO: set cookie?
				return LocalRedirect("/chat");
				//return success
			}
			return LocalRedirect("/?error="+HttpUtility.UrlEncode("Error, unable to register"));
			//return failure
		}
	}
}
