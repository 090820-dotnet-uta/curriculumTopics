using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;

namespace RPS_Game_Refactored.Models
{
    class DbContextClass : DbContext
    {
        public DbSet<Game> Games { get; set; }
        public DbSet<Round> Rounds { get; set; }
        public DbSet<Player> Players { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            if(!options.IsConfigured){
                options.UseSqlServer("Server=localhost\\SQLEXPRESS01;Database=RPSDB;Trusted_Connection=True;");
            }
        }
    }
}
