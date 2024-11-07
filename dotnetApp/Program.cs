var builder = WebApplication.CreateBuilder(args);

// Initialize Startup class and configure services
var startup = new Startup(builder.Configuration);
startup.ConfigureServices(builder.Services);

var app = builder.Build();

// Configure middleware using Startup's Configure method
var env = builder.Environment;
startup.Configure(app, env);

app.Run();
