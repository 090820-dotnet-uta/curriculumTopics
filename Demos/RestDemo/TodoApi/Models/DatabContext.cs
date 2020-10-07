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
        {

        }

        //protected override void OnConfiguring(DbContextOptionsBuilder options)
        //{
        //    if (!options.IsConfigured)
        //    {
        //        options.UseSqlServer("Server=localhost\\SQLEXPRESS01;Database=RPSDB;Trusted_Connection=True;");
        //    }
        //}
    }
}
