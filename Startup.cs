using JavaScriptEngineSwitcher.ChakraCore;
using JavaScriptEngineSwitcher.Extensions.MsDependencyInjection;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using React.AspNet;

namespace Discordium
{
	public class Startup
	{
		public Startup(IConfiguration configuration)
		{
			Configuration = configuration;
		}

		public IConfiguration Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			services.AddMvc();

			services.AddJsEngineSwitcher(options => options.DefaultEngineName = ChakraCoreJsEngine.EngineName)
				.AddChakraCore();

			services.AddReact();
			services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
			services.AddSingleton<IAuthService,AuthService>();
			services.AddSignalR();
			// Build the intermediate service provider then return it
			services.BuildServiceProvider();
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IHostEnvironment env)
		{
			// Initialise ReactJS.NET. Must be before static files.
			app.UseReact(config =>
			{
				config
					.SetReuseJavaScriptEngines(true)
					.SetLoadBabel(false)
					.SetLoadReact(false)
					.SetReactAppBuildPath("~/dist");
			});

			if (env.IsDevelopment())
			{
					app.UseDeveloperExceptionPage();
			}

			app.UseStaticFiles();

			app.UseRouting();

			app.UseEndpoints(endpoints =>
			{

				endpoints.MapControllerRoute(
					"login",
					"/accounts/login",
					new {controller = "Account", action = "Login"}
				);
				endpoints.MapControllerRoute(
					"register",
					"/accounts/register",
					new {controller = "Account",action = "Register"}
				);
				endpoints.MapHub<MessageHub>("/messages");
				endpoints.MapControllerRoute("default", "{path?}", new { controller = "Home", action = "Index" });
			});
		}
	}
}
