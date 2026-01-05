using AutoMapper;
using DrawWiz.Application.DTOs;
using DrawWiz.Application.Interfaces;
using DrawWiz.Application.Interfaces.Repositories;
using DrawWiz.Application.Interfaces.Services;

namespace DrawWiz.Application.Services
{
    public class AuthService : IAuthService
    {
        private readonly IUserRepository _userRepository;
        private readonly IJwtTokenGenerator _jwtGenerator;
        private readonly IMapper _mapper;

        public AuthService(
            IUserRepository userRepository,
            IJwtTokenGenerator jwtGenerator,
            IMapper mapper)
        {
            _userRepository = userRepository;
            _jwtGenerator = jwtGenerator;
            _mapper = mapper;
        }

        public async Task<AuthResponseDTO?> LoginAsync(LoginDTO loginDto)
        {
            var user = await _userRepository.GetByEmailAsync(loginDto.Email);
            if (user == null)
                return null;

            if (user.PasswordHash != loginDto.Password)
                return null;

            var token = _jwtGenerator.GenerateToken(user);

            return new AuthResponseDTO
            {
                AccessToken = token,
                User = _mapper.Map<UserDTO>(user)
            };
        }
    }
}
