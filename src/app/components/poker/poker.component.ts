import { Component, OnInit } from '@angular/core';
import { GameService, Game} from '../../services/game.service';

@Component({
  selector: 'app-poker',
  templateUrl: './poker.component.html',
  styleUrls: ['./poker.component.css']
})
export class PokerComponent implements OnInit {

  games: Game[];
  poker = [];
  Other = [];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.getGames("poker");
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
          this.poker.push({'name': x.name, 'image': x.image, 'id': x.id});
          break;
        } else {
          //this.Other.push({'name': x.name, 'image': x.image, 'id': x.id});
        }
     }
    }
    //console.log(' arr ' + this.newGames);
    //this.isLoading = false;
  }
}
