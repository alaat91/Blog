using GraphQL.Types;

public class MyAppMutation : ObjectGraphType

{

    private readonly UserService _userService;
    private readonly PostService _postService;
    
    public MyAppMutation()
    {
        Field<UserType>(
            "createUser",
            arguments: new QueryArguments(new QueryArgument<NonNullGraphType<UserInputType>> { Name = "userInput" }),
            resolve: context => userService.CreateUser(context.GetArgument<UserInput>("userInput"))
        );

        Field<PostType>(
            "createPost",
            arguments: new QueryArguments(new QueryArgument<NonNullGraphType<PostInputType>> { Name = "postInput" }),
            resolve: context => postService.CreatePost(context.GetArgument<PostInput>("postInput"))
        );

        Field<PostType>(
            "updatePost",
            arguments: new QueryArguments(new QueryArgument<NonNullGraphType<IdGraphType>> { Name = "id" },
                                          new QueryArgument<NonNullGraphType<PostInputType>> { Name = "postInput" }),
            resolve: context => postService.UpdatePost(context.GetArgument<string>("id"), context.GetArgument<PostInput>("postInput"))
        );

        Field<BooleanGraphType>(
            "deletePost",
            arguments: new QueryArguments(new QueryArgument<NonNullGraphType<IdGraphType>> { Name = "id" }),
            resolve: context => postService.DeletePost(context.GetArgument<string>("id"))
        );
    }
}
