using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using System.Threading.Tasks;
using MongoDB.Bson;

[Route("api/[controller]")]
[ApiController]
[Authorize]
public class FeedController : ControllerBase
{
    private readonly PostService _postService;

    public FeedController(PostService postService)
    {
        _postService = postService;
    }

    [HttpGet("posts")]
    public async Task<IActionResult> GetPosts([FromQuery] int page = 1, [FromQuery] int pageSize = 2)
    {
        var posts = await _postService.GetPostsAsync(page, pageSize);
        var totalItems = posts.Count;
        return Ok(new { posts, totalItems });
    }

    [HttpPost("post")]
    public async Task<IActionResult> CreatePost([FromBody] Post post)
    {
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        post.Creator = ObjectId.Parse(userId);

        await _postService.CreatePostAsync(post);
        return CreatedAtAction(nameof(GetPosts), new { id = post.Id }, post);
    }

    [HttpPut("post/{id}")]
    public async Task<IActionResult> UpdatePost(string id, [FromBody] Post updatedPost)
    {
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        var updated = await _postService.UpdatePostAsync(id, updatedPost, userId);
        if (!updated)
        {
            return NotFound(new { message = "Post not found or user not authorized." });
        }

        return Ok(new { message = "Post updated successfully." });
    }

    [HttpDelete("post/{id}")]
    public async Task<IActionResult> DeletePost(string id)
    {
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        var deleted = await _postService.DeletePostAsync(id, userId);
        if (!deleted)
        {
            return NotFound(new { message = "Post not found or user not authorized." });
        }

        return Ok(new { message = "Post deleted successfully." });
    }
}
