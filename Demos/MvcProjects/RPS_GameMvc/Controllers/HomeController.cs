using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Logging;
using RPS_GameMvc.Models;

namespace RPS_GameMvc.Controllers
{
	public class HomeController : Controller
	{
		private readonly ILogger<HomeController> _logger;
		private IMemoryCache _cache;
		List<Player> players;
		List<Game> games;
		List<Round> rounds;

		public HomeController(ILogger<HomeController> logger, IMemoryCache cache)
		{
			_logger = logger;
			_cache = cache;

			//if the _cache doesn't have a players list, create one.
			if(!_cache.TryGetValue("players", out players))
			{
				_cache.Set("players", new List<Player>());
				_cache.TryGetValue("players", out players);
				_cache.TryGetValue("games", out games);
				_cache.TryGetValue("rounds", out rounds);
			}
		}

		/// <summary>
		/// saves the current players, rounds, and games lists to the cache.
		/// </summary>
		public void SaveChanges()
		{
			_cache.Set("players", players);
			_cache.Set("games", games);
			_cache.Set("rounds", rounds);
		}

		public IActionResult Index()
		{
			return View();
		}

		public IActionResult Privacy()
		{
			return View();
		}

		[ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
		public IActionResult Error()
		{
			return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
		}

		/// <summary>
		/// takes a string for a payer name. determines if the player exists. If not exists, creates a player instance and calls
		/// AddPlayer
		/// </summary>
		/// <param name="fname"></param>
		/// <returns></returns>
		[HttpPost]
		public IActionResult Login(string fname)
		{
			//see if the name is already in  players list
			Player p1 = players.FirstOrDefault(p => p.Name == fname);

			//OR create the player instance and save that player
			if (p1 == null)
			{
				p1 = new Player()
				{
					Name = fname
				};
			}
			 return RedirectToAction("AddPlayer", p1);
		}

		/// <summary>
		/// takes a player object and gives a new player(if they are new)) the highest id then calls the Welcone view
		/// </summary>
		/// <param name="player"></param>
		/// <returns></returns>
		public IActionResult AddPlayer(Player player)
		{
			if(player.PlayerId == -1)
			{
				Player pHighId = players.OrderByDescending(p => p.PlayerId).FirstOrDefault();
				if(pHighId == null)
				{
					player.PlayerId = 1;
				}
				else{
					player.PlayerId = pHighId.PlayerId + 1;
				}
				_cache.Set("loggedInPlayer", player);//set this player as the player logged in.
				players.Add(player);
				SaveChanges();
			}
			return View(player);
		}

		public IActionResult EditPlayer(int id)
		{
			Player player = players.Where(x => x.PlayerId == id).FirstOrDefault();
			if(player == null)
			{
				ViewData["notFound"] = "That player was not found! Please choose another";
				return View("PlayerList");
			}
			return View(player);
		}

		[HttpPost]
		public IActionResult EditPlayer(Player editedPlayer)
		{
			
			Player player = players.Where(x => x.PlayerId == editedPlayer.PlayerId).FirstOrDefault();
			if (player == null)
			{
				ViewData["notFound"] = "That player was not found! Please choose another";
				return View("PlayerList");
			}

			player.Name = editedPlayer.Name;
			player.Wins = editedPlayer.Wins;
			player.Losses = editedPlayer.Losses;

			//test is we can just say =
			//player = editedPlayer;
			SaveChanges();

			return RedirectToAction("PlayerList");
		}

		public IActionResult PlayerDetails(Player player)
		{
			throw new NotImplementedException("PlayerDetails not implemented yet");
		}

		//playersList action here
		public IActionResult PlayerList()
		{
			return View(players);
		}

		public IActionResult DeletePlayer(int id)
		{
			//check that the player being deleted is the player logged in.
			//log him out and redirect to login page. with a message
			Player lgp = (Player)_cache.Get("loggedInPlayer");
			if (id == lgp.PlayerId)
			{
				TempData["deletedMyself"] = "Looks like you deleted ourself. Please user a unique name to log in and create your account again.";
				players.Remove(players.Where(x => x.PlayerId == id).FirstOrDefault());
				return RedirectToAction("Logout", id);
			}
			players.Remove(players.Where(x => x.PlayerId == id).FirstOrDefault());
			SaveChanges();

			return RedirectToAction("PlayerList");//was just 'return View("PlayerList") without including the List of players. DERP
		}

		/// <summary>
		/// deletes the Logged In player from the cache
		/// and returns to the log in screen
		/// </summary>
		/// <returns></returns>
		public IActionResult Logout()
		{
			_cache.Remove("loggedInPlayer");

			return View("Index");
		}

	}
}
