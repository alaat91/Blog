using GraphQL;
using GraphQL.Types;
public class MyAppMutation : ObjectGraphType

{

    private readonly UserService _userService;
    private readonly PostService _postService;
    
    public MyAppMutation(UserService userService, PostService postService)
    {
        _userService = userService ?? throw new ArgumentNullException(nameof(userService));
        _postService = postService ?? throw new ArgumentNullException(nameof(postService));

         Field<UserType>(
            "createUser",
            arguments: new QueryArguments(new QueryArgument<NonNullGraphType<UserInputType>> { Name = "user" }),
            resolve: context =>
            {
                var userInput = context.GetArgument<User>("user");
                return userService.CreateUserAsync(userInput);
            }
        );

        Field<PostDataType>(
            "createPost",
            arguments: new QueryArguments(new QueryArgument<NonNullGraphType<PostInputType>> { Name = "post" }),
            resolve: context =>
            {
                var postInput = context.GetArgument<Post>("post");
                return postService.CreatePostAsync(postInput);
            }
        );

        Field<PostDataType>(
        "updatePost",
        arguments: new QueryArguments(
            new QueryArgument<NonNullGraphType<IdGraphType>> { Name = "postId" },
            new QueryArgument<NonNullGraphType<PostInputType>> { Name = "postInput" },
            new QueryArgument<NonNullGraphType<StringGraphType>> { Name = "userId" }
        ),
        resolve: context => 
        {
            var postId = context.GetArgument<string>("postId");
            var postInput = context.GetArgument<Post>("postInput");
            var userId = context.GetArgument<string>("userId");
            return _postService.UpdatePostAsync(postId, postInput, userId);
        }
    );

    Field<BooleanGraphType>(
    "deletePost",
    arguments: new QueryArguments(
        new QueryArgument<NonNullGraphType<IdGraphType>> { Name = "postId" },
        new QueryArgument<NonNullGraphType<StringGraphType>> { Name = "userId" }
    ),
    resolve: context =>
    {
        var postId = context.GetArgument<string>("postId");
        var userId = context.GetArgument<string>("userId");
        return _postService.DeletePostAsync(postId, userId);
    }
);

    }
}
