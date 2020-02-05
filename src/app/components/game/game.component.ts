import { Component, OnInit, SkipSelf } from '@angular/core';
import { GameService, Game} from '../../services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {

  games: Game[];
  newGames = [];
  Other = [];

  test: string;
  isLoading: boolean = true;
  constructor(private gameService: GameService) { }
  
  ngOnInit() {
     this.getGames('top');
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
          this.test = x.name;
          this.newGames.push({'name': x.name, 'image': x.image, 'id': x.id});
          break;
        } else {
          this.Other.push({'name': x.name, 'image': x.image, 'id': x.id});
        }
     }
    }
    console.log(' arr ' + this.newGames);
    this.isLoading = false;
  }
}