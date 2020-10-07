using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Logging;
using TodoApi.GamePlay;
using TodoApi.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860
namespace TodoApi.Controllers
{
	[Route("api/[controller]/[action]")]
	[ApiController]
	public class RpsController : ControllerBase
	{
		private readonly ILogger<RpsController> _logger;
		private IMemoryCache _cache;
		private Rps_Game _game;

		public RpsController(ILogger<RpsController> logger, IMemoryCache cache, Rps_Game game)
		{
			_logger = logger;
			_cache = cache;
			_game = game;
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
		[Route("~/api/Rps/PlayerLogin/{fname}")]
		[HttpPost]
		public ActionResult<Player> Login(string fname)
		{
			Player p1 = _game.GameLogin(fname);
			return AddPlayer(p1);
			//return await _context.TodoItems.ToListAsync();
		}

		/// <summary>
		/// takes a player object and gives a new player(if they are new)) the highest id then calls the Welcone view
		/// </summary>
		/// <param name="player"></param>
		/// <returns></returns>
		[Route("~/api/Rps/AddPlayer")]
		[HttpPost]
		public ActionResult<Player> AddPlayer(Player player)
		{
			player = _game.GameAddPlayer(player);
			return player;
			//test below
			//Player p1 = _game.TestCache();
			//p1.Name = p1.Name + " back again!";
			//return p1;
			//test above
		}

		/// <summary>
		/// takes an id and returns the View to edit a player.
		/// </summary>
		/// <param name="id"></param>
		/// <returns></returns>
		[Route("~/api/Rps/EditPlayer/{id}")]
		[HttpGet]
		public ActionResult<Player> EditPlayer(int id)
		{
			Player player = _game.GameEditPlayer(id);

			//Player player = players.Where(x => x.PlayerId == id).FirstOrDefault();
			//if (player == null)
			//{
			//	ViewData["notFound"] = "That player was not found! Please choose another";
			//	return View("PlayerList");
			//}
			return player;
		}

		[Route("~/api/Rps/EditPlayer")]
		[HttpPut]
		public IActionResult EditPlayer(Player editedPlayer)
		{
			bool player = _game.GameEditPlayer(editedPlayer);

			//Player player = players.Where(x => x.PlayerId == editedPlayer.PlayerId).FirstOrDefault();
			//if (player == false)
			//{
			//	ViewData["notFound"] = "That player was not found! Please choose another";
			//	return View("PlayerList");
			//}
			return RedirectToAction("PlayerList");
		}

		[Route("~/api/Rps/PlayerDetails/{id}")]
		[HttpGet]
		public ActionResult<Player> PlayerDetails(int id)
		{
			//reuse the GameEditPlayer method to get the player object of the param id.
			return _game.GameEditPlayer(id);
		}

		//playersList action here
		[Route("~/api/Rps/PlayerList")]
		[HttpGet]
		public ActionResult<IEnumerable<Player>> PlayerList()
		{
			return _game.GamePlayerList();
		}

		[Route("~/api/DeletePlayer/{id}")]
		[HttpDelete]
		public ActionResult DeletePlayer(int id)
		{
			bool deletedSelf = _game.GameDeletePlayer(id);
			////check that the player being deleted is the player logged in.
			////log him out and redirect to login page. with a message
			if (!deletedSelf)
			{
				//TempData["deletedMyself"] = "Looks like you deleted ourself or this player cannot be deleted because he has played a game. \nPlease user a unique name to log in and create your account again.";
				//players.Remove(players.Where(x => x.PlayerId == id).FirstOrDefault());
				return RedirectToAction("Logout", id);
			}

			return RedirectToAction("PlayerList");
		}

		/// <summary>
		/// deletes the Logged In player from the cache
		/// and returns to the log in screen
		/// </summary>
		/// <returns></returns>
		[Route("~/api/Logout")]
		[HttpGet]
		public ActionResult Logout()
		{
			_game.GameLogout();
			//return View("Index");
			return NoContent();
		}

		[Route("~/api/PlayGame")]
		[HttpGet]
		public ActionResult<Game> PlayGame()
		{
			//call the Rps_Game PLayGame method.
			//that method returns a completed Game.
			Game myGame = _game.PlayAGame();
			//return View(myGame);
			return myGame;
		}


		[Route("~/api/*")]
		public string NoMethodFound()
		{
			return "there was no method found for this query.";
		}

	}

}
