using System;
using System.Collections.Generic;

namespace RpsApi.Models
{
    public class Game
    {
        public int GameId { get; set; }
        public Player Player1 { get; set; }
        public Player Computer { get; set; }
        public ICollection<Round> rounds { get; set; } = new List<Round>();
        public Player winner = new Player();

    }
}