using System.ComponentModel.DataAnnotations;

public class UserDto
{
    [Required]
    [EmailAddress]
    public string? Email { get; set; }

    [Required]
    [MinLength(6, ErrorMessage = "Password must be at least 6 characters.")]
    public string? Password { get; set; }

    [Required]
    [StringLength(100, ErrorMessage = "Name should be a maximum of 100 characters.")]
    public string? Name { get; set; }
}
