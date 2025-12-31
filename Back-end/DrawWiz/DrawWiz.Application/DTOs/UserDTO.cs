namespace DrawWiz.Application.DTOs
{
    public class UserDTO
    {
        public int UserId { get; set; }
        public string Username { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string? AvatarUrl { get; set; }
        public bool IsPremium { get; set; }
        public bool IsActive { get; set; }

        public int RoleId { get; set; }
        public string RoleName { get; set; } = null!;
    }
}
