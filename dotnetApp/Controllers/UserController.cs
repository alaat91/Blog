using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using System.Threading.Tasks;

[Route("api/[controller]")]
[ApiController]
[Authorize]
public class UserController : ControllerBase
{
    private readonly UserService _userService;

    public UserController(UserService userService)
    {
        _userService = userService;
    }

    [HttpGet("status")]
    public async Task<IActionResult> GetUserStatus()
    {
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        var status = await _userService.GetUserStatusAsync(userId);
        if (status == null)
        {
            return NotFound(new { message = "User not found." });
        }

        return Ok(new { status });
    }

    [HttpPut("status")]
    public async Task<IActionResult> UpdateStatus([FromBody] string status)
    {
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        var updated = await _userService.UpdateUserStatusAsync(userId, status);
        if (!updated)
        {
            return NotFound(new { message = "User not found or status update failed." });
        }

        return Ok(new { message = "Status updated successfully.", status });
    }
}
