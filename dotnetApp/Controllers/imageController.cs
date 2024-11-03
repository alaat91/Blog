using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.IO;
using System.Threading.Tasks;

namespace YourAppNamespace.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ImageController : ControllerBase
    {
        [HttpPut("post-image")]
        public async Task<IActionResult> UploadImage(IFormFile image)
        {
            if (image == null || (image.ContentType != "image/png" && image.ContentType != "image/jpg" && image.ContentType != "image/jpeg"))
            {
                return BadRequest(new { message = "No file provided or incorrect file type!" });
            }

            var uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "images");
            if (!Directory.Exists(uploadsFolder))
            {
                Directory.CreateDirectory(uploadsFolder);
            }

            var filePath = Path.Combine(uploadsFolder, DateTime.Now.ToString("yyyyMMddHHmmss") + "-" + image.FileName);
            
            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await image.CopyToAsync(stream);
            }

            return Ok(new { message = "Image uploaded", filePath = filePath });
        }
    }
}
