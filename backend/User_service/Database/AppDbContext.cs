using Microsoft.EntityFrameworkCore;
using User_Service.Models;

namespace User_Service.Database
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        // Define your DbSets (tables) here
        public DbSet<User> Users { get; set; }
    }
}