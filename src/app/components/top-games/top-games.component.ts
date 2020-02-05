import { Component, OnInit } from '@angular/core';
import { GameService, Game} from '../../services/game.service';

@Component({
  selector: 'app-top-games',
  templateUrl: './top-games.component.html',
  styleUrls: ['./top-games.component.css']
})
export class TopGamesComponent implements OnInit {

  games: Game[];
  topGames = [];  
  Other = [];

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
          //this.test = x.name;
          this.topGames.push({'name': x.name, 'image': x.image, 'id': x.id});
          break;
        } else {
          this.Other.push({'name': x.name, 'image': x.image, 'id': x.id});
        }
     }
    }
    console.log(' arr ' + this.topGames);
    this.isLoading = false;
  }

}
