using Microsoft.EntityFrameworkCore;

namespace TodoApi.Models
{
    public class DatabContext : DbContext
    {
        public DatabContext(DbContextOptions<DatabContext> options)
            : base(options)
        {
        }

        public DbSet<TodoItemDTO> TodoItems { get; set; }
    }
}
