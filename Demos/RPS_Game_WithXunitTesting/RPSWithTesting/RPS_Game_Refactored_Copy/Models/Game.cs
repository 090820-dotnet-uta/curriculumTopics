using System;
using System.Collections.Generic;

namespace RPS_Game_Refactored
{
    public class Game
    {
        public int GameId { get; set; }
        public Player Player1 { get; set; }
        public Player Computer { get; set; }
        public List<Round> rounds = new List<Round>();
        public Player winner = new Player();

    }
}