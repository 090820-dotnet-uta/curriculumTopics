using System;

namespace RpsModels.Models
{
    public class Round
    {
        public int RoundId { get; set; }
        public Player player1 { get; set; }
        public Player Computer { get; set; }
        public Choice p1Choice { get; set; }
        public Choice ComputerChoice { get; set; }
        public int Outcome { get; set; } = 0; //0 == Tie, 1 ==P1 wins, 2 == computer wins
        //public Game game { get; set; }
    }
}