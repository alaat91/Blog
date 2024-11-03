using MongoDB.Driver;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

public static class DatabaseConfig
{
    public static void ConfigureMongoDB(this IServiceCollection services, IConfiguration configuration)
    {
        var client = new MongoClient(configuration.GetConnectionString("MongoDb"));
        var databaseName = configuration["DatabaseName"];
        var database = client.GetDatabase(databaseName);

        services.AddSingleton(database);
        services.AddScoped<UserService>();
        services.AddScoped<PostService>();
    }
}
