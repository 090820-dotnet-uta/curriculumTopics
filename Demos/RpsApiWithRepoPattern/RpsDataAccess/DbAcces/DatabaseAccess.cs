using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RpsModels.Models;

namespace RpsDataAccess.DbAcces
{
	public class DatabaseAccess : DbContext
	{
		public DbSet<Round> Rounds { get; set; }
		public DbSet<Game> Games { get; set; }
		public DbSet<Player> Players { get; set; }

		public DatabaseAccess(DbContextOptions<DatabaseAccess> options) : base(options) {}


	}
}
