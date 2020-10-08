using Microsoft.EntityFrameworkCore;

namespace TodoApi.Models
{
    public class DatabContext : DbContext
    {
        public DbSet<Game> Games { get; set; }
        public DbSet<Round> Rounds { get; set; }
        public DbSet<Player> Players { get; set; }
        public DbSet<TodoItemDTO> TodoItems { get; set; }

        public DatabContext() { }

        public DatabContext(DbContextOptions<DatabContext> options) : base(options)
        {  }
    }
}
