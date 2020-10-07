using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Logging;
using RpsApi.GamePlay;
using RpsApi.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RpsApi.Controllers
{
	[Route("api/game")]
	[ApiController]
	public class GameController : ControllerBase
	{
		//Game action method below.
		private readonly ILogger<GameController> _logger;
		private IMemoryCache _cache;
		private Rps_Game _game;
		//List<Player> players = new List<Player>();
		//List<Game> games = new List<Game>();
		//List<Round> rounds = new List<Round>();

		public GameController(ILogger<GameController> logger, IMemoryCache cache, Rps_Game game)
		{
			_logger = logger;
			_cache = cache;
			_game = game;
			//if the _cache doesn't have a players list, create one.
			//if (!_cache.TryGetValue("players", out players))
			//{
			//	_cache.Set("players", new List<Player>());
			//	_cache.TryGetValue("players", out players);
			//	_cache.TryGetValue("games", out games);
			//	_cache.TryGetValue("rounds", out rounds);
			//}
		}

		/// <summary>
		/// saves the current players, rounds, and games lists to the cache.
		/// </summary>
		//public void SaveChanges()
		//{
		//	_cache.Set("players", players);
		//	_cache.Set("games", games);
		//	_cache.Set("rounds", rounds);
		//}

		//public IActionResult Index()
		//{
		//	return View();
		//}

		//public IActionResult Privacy()
		//{
		//	return View();
		//}

		//[ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
		//public IActionResult Error()
		//{
		//	return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
		//}

		/// <summary>
		/// takes a string for a payer name. determines if the player exists. If not exists, creates a player instance and calls
		/// AddPlayer
		/// </summary>
		/// <param name="fname"></param>
		/// <returns></returns>
		[Route("~/api/game/Login/{fname}")]
		[HttpPost]
		public ActionResult Login(string fname)
		{
			Player p1 = _game.GameLogin(fname);
			////see if the name is already in  players list
			//Player p1 = players.FirstOrDefault(p => p.Name == fname);

			////OR create the player instance and save that player
			//if (p1 == null)
			//{
			//	p1 = new Player()
			//	{
			//		Name = fname
			//	};
			//}
			return RedirectToAction("AddPlayer", p1);
		}

		/// <summary>
		/// takes a player object and gives a new player(if they are new)) the highest id then calls the Welcone view
		/// </summary>
		/// <param name="player"></param>
		/// <returns></returns>
		public ActionResult<Player> AddPlayer(Player player)
		{
			player = _game.GameAddPlayer(player);

			//if(player.PlayerId == -1)
			//{
			//	Player pHighId = players.OrderByDescending(p => p.PlayerId).FirstOrDefault();
			//	if(pHighId == null)
			//	{
			//		player.PlayerId = 1;
			//	}
			//	else{
			//		player.PlayerId = pHighId.PlayerId + 1;
			//	}
			//	_cache.Set("loggedInPlayer", player);//set this player as the player logged in.
			//	players.Add(player);
			//	SaveChanges();
			//}
			return player;
		}

		/// <summary>
		/// takes an id and returns the View to edit a player.
		/// </summary>
		/// <param name="id"></param>
		/// <returns></returns>
		[Route("~/api/game/EditPlayer/{id}")]
		[HttpGet]
		public ActionResult<Player> EditPlayer(int id)
		{
			Player player = _game.GameEditPlayer(id);

			//Player player = players.Where(x => x.PlayerId == id).FirstOrDefault();
			if (player == null)
			{
				//ViewData["notFound"] = "That player was not found! Please choose another";
				return RedirectToAction("PlayerList");
			}
			return player;
		}

		[Route("~/api/game/EditPlayer")]
		[HttpPut]
		public ActionResult EditPlayer(Player editedPlayer)
		{
			bool player = _game.GameEditPlayer(editedPlayer);

			if (player == false)
			{
			//make sure to differentiate this to hand a not to the client.... somehow.
				//ViewData["notFound"] = "That player was not found! Please choose another";
				return RedirectToAction("PlayerList");
			}

			//player.Name = editedPlayer.Name;
			//player.Wins = editedPlayer.Wins;
			//player.Losses = editedPlayer.Losses;

			////test is we can just say =
			////player = editedPlayer;
			//SaveChanges();

			return RedirectToAction("PlayerList");
		}

		public ActionResult<Player> PlayerDetails(int id)
		{
			//reuse the GameEditPlayer method to get the player object of the param id.
			return _game.GameEditPlayer(id);
		}

		//playersList action here
		public IEnumerable<ActionResult<Player>> PlayerList()
		{
			return (IEnumerable<ActionResult<Player>>)_game.GamePlayerList();
		}

		public ActionResult DeletePlayer(int id)
		{
			bool deletedSelf = _game.GameDeletePlayer(id);
			////check that the player being deleted is the player logged in.
			////log him out and redirect to login page. with a message
			Player lgp = (Player)_cache.Get("loggedInPlayer");
			if (!deletedSelf)
			{
				//TempData["deletedMyself"] = "Looks like you deleted ourself. Please user a unique name to log in and create your account again.";
				return RedirectToAction("Logout", id);
			}
			return RedirectToAction("PlayerList");
		}

		/// <summary>
		/// deletes the Logged In player from the cache
		/// and returns to the log in screen
		/// </summary>
		/// <returns></returns>
		//public ActionResult Logout()
		//{
		//	_game.GameLogout();
		//	//_cache.Remove("loggedInPlayer");

		//	return View("Index");
		//}

		//public IActionResult PlayGame()
		//{
		//	//call the Rps_Game PLayGame method.
		//	//that method returns a completed Game.

		//	Game myGame = _game.PlayAGame();

		//	return View(myGame);
		//}

		//game action methods above.
	}
}
