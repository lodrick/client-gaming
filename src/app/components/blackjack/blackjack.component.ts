import { Component, OnInit } from '@angular/core';
import { GameService, Game} from '../../services/game.service';

@Component({
  selector: 'app-blackjack',
  templateUrl: './blackjack.component.html',
  styleUrls: ['./blackjack.component.css']
})
export class BlackjackComponent implements OnInit {

  games: Game[];
  blackjack = [];
  Other = [];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.getGames("blackjack");
  }

  getGames(sortBy){
    this.gameService.getGames().subscribe( response => {
      //topGamesFunc(response);
      this.filter( response, sortBy);
    })
  }
  
  filter(data : Game[], sortBy){
    for(let x of data){
      for(let cat of x.categories){
        if(cat === sortBy){ 
          //this.test = x.name;
          this.blackjack.push({'name': x.name, 'image': x.image, 'id': x.id});
          break;
        } else {
      
        }
     }
    }
  
  }
}
