using DrawWiz.Application.DTOs;

namespace DrawWiz.Application.Interfaces.Services
{
    public interface IAuthService
    {
        Task<AuthResponseDTO?> LoginAsync(LoginDTO loginDto);
    }
}
