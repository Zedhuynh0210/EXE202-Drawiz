using AutoMapper;
using DrawWiz.Application.DTOs;
using DrawWiz.Domain.Entities;

namespace DrawWiz.Application.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<User, UserDTO>()
                .ForMember(
                    dest => dest.RoleId,
                    opt => opt.MapFrom(src => src.Roles.First().RoleId)
                )
                .ForMember(
                    dest => dest.RoleName,
                    opt => opt.MapFrom(src => src.Roles.First().RoleName)
                );

        }
    }
}
