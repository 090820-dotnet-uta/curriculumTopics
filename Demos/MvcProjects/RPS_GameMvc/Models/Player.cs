using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RPS_GameMvc.Models
{
	public class Player
	{
        public int PlayerId { get; set; } = -1;
        public string Name { get; set; } = "null";
        public int Wins { get; set; } = 0;
        public int Losses { get; set; } = 0;
    }
}
