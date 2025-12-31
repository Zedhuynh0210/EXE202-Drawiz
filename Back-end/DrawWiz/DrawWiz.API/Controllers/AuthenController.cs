using DrawWiz.Application.DTOs;
using DrawWiz.Application.Interfaces.Services;
using Microsoft.AspNetCore.Mvc;

namespace DrawWiz.API.Controllers
{
    [Route("api/authentication")]
    [ApiController]
    public class AuthenController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthenController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDTO loginDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var result = await _authService.LoginAsync(loginDto);

            if (result == null)
                return Unauthorized(new
                {
                    message = "Invalid email or password"
                });

            return Ok(result);
        }
    }
}
