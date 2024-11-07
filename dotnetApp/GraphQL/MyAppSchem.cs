using GraphQL;
using GraphQL.Types;

public class MyAppSchema : Schema
{
    public MyAppSchema(IServiceProvider provider) : base(provider)
    {
        Query = provider.GetRequiredService<MyAppQuery>();
        Mutation = provider.GetRequiredService<MyAppMutation>();
    }
}
