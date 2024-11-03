using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using dotnetApp.Services;
using dotnetApp.Models;
using Microsoft.AspNetCore.Authorization;

[Route("api/[controller]")]
[ApiController]
public class FeedController : ControllerBase
{
    private readonly FeedService _feedService;

    public FeedController(FeedService feedService)
    {
        _feedService = feedService;
    }

    [HttpGet("posts")]
    [Authorize]
    public async Task<IActionResult> GetPosts([FromQuery] int page = 1)
    {
        var posts = await _feedService.GetPostsAsync(page);
        return Ok(posts);
    }

    [HttpGet("post/{postId}")]
    [Authorize]
    public async Task<IActionResult> GetSinglePost(string postId)
    {
        var post = await _feedService.GetSinglePostAsync(postId);
        if (post == null) return NotFound("Post not found.");
        return Ok(post);
    }

    [HttpPost("post")]
    [Authorize]
    public async Task<IActionResult> CreatePost([FromBody] PostDto post)
    {
        var newPost = await _feedService.CreatePostAsync(post, User);
        if (newPost == null) return BadRequest("Failed to create post.");
        return CreatedAtAction(nameof(CreatePost), new { id = newPost.Id }, newPost);
    }

    [HttpPut("post/{postId}")]
    [Authorize]
    public async Task<IActionResult> UpdatePost(string postId, [FromBody] PostDto post)
    {
        var updatedPost = await _feedService.UpdatePostAsync(postId, post, User);
        if (updatedPost == null) return NotFound("Post not found.");
        return Ok(updatedPost);
    }

    [HttpDelete("post/{postId}")]
    [Authorize]
    public async Task<IActionResult> DeletePost(string postId)
    {
        var success = await _feedService.DeletePostAsync(postId, User);
        if (!success) return NotFound("Post not found.");
        return Ok("Post deleted successfully.");
    }
}
