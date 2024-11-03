using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using dotnetApp.Services;
using Microsoft.AspNetCore.Authorization;

[Route("api/[controller]")]
[ApiController]
public class UserController : ControllerBase
{
    private readonly UserService _userService;

    public UserController(UserService userService)
    {
        _userService = userService;
    }

    [HttpGet("status")]
    [Authorize]
    public async Task<IActionResult> GetUserStatus()
    {
        var status = await _userService.GetUserStatusAsync(User);
        if (status == null) return NotFound("User not found.");
        return Ok(new { status });
    }

    [HttpPut("status")]
    [Authorize]
    public async Task<IActionResult> UpdateStatus([FromBody] StatusDto statusDto)
    {
        var success = await _userService.UpdateUserStatusAsync(User, statusDto.Status);
        if (!success) return NotFound("User not found.");
        return Ok("Status updated successfully.");
    }
}
