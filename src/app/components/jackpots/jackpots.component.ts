import { Component, OnInit } from '@angular/core';
import { GameService, Game} from '../../services/game.service';

@Component({
  selector: 'app-jackpots',
  templateUrl: './jackpots.component.html',
  styleUrls: ['./jackpots.component.css']
})
export class JackpotsComponent implements OnInit {

  games: Game[];
  blackjacks = [];
  Other = [];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.getGames("blackjacks");
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
      
          this.blackjacks.push({'name': x.name, 'image': x.image, 'id': x.id});
          break;
        } else {
          
        }
     }
    }
  }

}
