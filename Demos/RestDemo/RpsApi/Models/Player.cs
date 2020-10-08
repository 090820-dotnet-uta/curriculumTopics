using System;
using System.Collections.Generic;

namespace RpsApi.Models
{
    public class Player
    {
        public int PlayerId { get; set; }
        public string Name { get; set; } = "null";
        public int Wins { get; set; } = 0;
        public int Losses { get; set; } = 0;
    }
}