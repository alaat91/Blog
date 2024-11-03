using GraphQL.Types;

public class MyAppQuery : ObjectGraphType
{
    public MyAppQuery()
    {
        Field<AuthPayloadType>(
            "login",
            arguments: new QueryArguments(new QueryArgument<NonNullGraphType<StringGraphType>> { Name = "email" },
                                          new QueryArgument<NonNullGraphType<StringGraphType>> { Name = "password" }),
            resolve: context => authService.Login(context.GetArgument<string>("email"), context.GetArgument<string>("password"))
        );

        Field<PostDataType>(
            "getPosts",
            arguments: new QueryArguments(new QueryArgument<NonNullGraphType<IntGraphType>> { Name = "page" }),
            resolve: context => postService.GetPosts(context.GetArgument<int>("page"))
        );

        Field<PostType>(
            "viewPost",
            arguments: new QueryArguments(new QueryArgument<NonNullGraphType<IdGraphType>> { Name = "id" }),
            resolve: context => postService.ViewPost(context.GetArgument<string>("id"))
        );
    }
}
