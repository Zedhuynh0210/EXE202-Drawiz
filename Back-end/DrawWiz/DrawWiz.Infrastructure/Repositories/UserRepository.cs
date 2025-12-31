using DrawWiz.Application.Interfaces.Repositories;
using DrawWiz.Domain.Entities;
using DrawWiz.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;

namespace DrawWiz.Infrastructure.Repositories
{
    public class UserRepository : GenericRepository<User>, IUserRepository
    {
        public UserRepository(DrawWizDbContext context) : base(context)
        {
        }

        public async Task<User?> GetByEmailAsync(string email)
        {
            return await _dbSet
                .Include(u => u.Roles)
                .FirstOrDefaultAsync(u => u.Email == email && u.IsActive);
        }
    }
}
