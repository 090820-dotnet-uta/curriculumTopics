using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Logging;
using RPS_GameMvc.Models;


namespace RPS_GameMvc.GamePlay
{
	public class Rps_Game
	{
		private readonly ILogger<Rps_Game> _logger;
		private IMemoryCache _cache;
		List<Player> players;
		List<Game> games;
		List<Round> rounds;
		
		//public Rps_Game()
		//{
		//}

		public Rps_Game(ILogger<Rps_Game> logger, IMemoryCache cache)
		{
			_logger = logger;
			_cache = cache;
			_cache.TryGetValue("players", out players);
			_cache.TryGetValue("games", out games);
			_cache.TryGetValue("rounds", out rounds);
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

		public Game PlayAGame(List<Player> p, List<Round> r, List<Game> g)
		{
			players = p;
			rounds = r;
			games = g;

			//instantiate a Player and give a value to the Name all at once.
			Player computer = new Player() { Name = "Computer" };
			//try to find an existing player named "computer"
			if (players.Any(x => x.Name == "Computer"))
			{
				computer = players.Where(x => x.Name == "Computer").FirstOrDefault();
			}
			else
			{
				computer.Name = "Computer";
				players.Add(computer);//add the computer to List<Player> players
				SaveChanges();
			}

			Player p1;//the out variable for the player
			//get the player name. this is a place to make sure the user isn't using forbidden words or symbols
			if (!_cache.TryGetValue("loggedInPlayer", out p1))
			{
				_logger.LogInformation("There was no loggedInPlayer in the cache");
				throw new NullReferenceException("There was no loggedInPlayer in the cache");
			}

			Game game = new Game();// create a game
			game.Player1 = p1;//
			game.Computer = computer;//

			//play rounds till one player has 2 wins
			//assign the winner to the game and check that property to break out of the loop.
			while (game.winner.Name == "null")
			{
				Round round = new Round();//declare a round for this iteration
				round.player1 = p1;// add user (p1) to this round
				round.Computer = computer;// add computer to this round

				//get the choices for the 2 players and insert the players choices directly into the round
				round.p1Choice = Rps_GameMethods.GetRandomChoice();//this will give a random number starting at 0 to arg-1;
				round.ComputerChoice = Rps_GameMethods.GetRandomChoice();
				round.Outcome = Rps_GameMethods.GetRoundWinner(round);//check the choices to see who won.
				rounds.Add(round);
				SaveChanges();
				game.rounds.Add(round);//add this round to the games' List of rounds
				int gameWinner = Rps_GameMethods.GetWinner(game);//get a number ot say is p1(1) or computer(2) won
				
				//assign the winner to the game and increment wins and losses for both
				if (gameWinner == 1)
				{
					game.winner = p1;
					p1.Wins++;//increments wins and losses.
					computer.Losses++;//increments wins and losses.
				}
				else if (gameWinner == 2)
				{
					game.winner = computer;
					p1.Losses++;//increments wins and losses.
					computer.Wins++;//increments wins and losses.
				}
			}//end of rounds loop
			games.Add(game);//save the game
			SaveChanges();
			return game;
		}
		//RpsGameMethods.PrintAllCurrentData(context.Games.ToList(), context.Players.ToList(), context.Rounds.ToList());
		//  }
	}
}
