using DrawWiz.Application.Interfaces;
using DrawWiz.Application.Interfaces.Repositories;
using DrawWiz.Application.Interfaces.Services;
using DrawWiz.Application.Services;
using DrawWiz.Infrastructure.Persistence;
using DrawWiz.Infrastructure.Repositories;
using DrawWiz.Infrastructure.Security;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System.Reflection;

namespace DrawWiz.Infrastructure
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(
            this IServiceCollection services,
            IConfiguration configuration)
        {
            // DbContext
            services.AddDbContext<DrawWizDbContext>(options =>
                options.UseSqlServer(configuration.GetConnectionString("MyCnn")));

            // Generic repository
            services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));

            // Repositories
            services.AddScoped<IUserRepository, UserRepository>();

            // Security / JWT
            services.AddScoped<IJwtTokenGenerator, JwtTokenGenerator>();

            return services;
        }

        public static IServiceCollection AddApplication(this IServiceCollection services)
        {
            // Services
            services.AddScoped<IAuthService, AuthService>();

            return services;
        }


    }
}
