using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TodoApi.Models
{
    public class Game
    {
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int GameId { get; set; }
        //[Required]
        public Player Player1 { get; set; }
        public Player Computer { get; set; }
        public ICollection<Round> rounds { get; set; } = new List<Round>();
        public Player winner = new Player();

    }
}