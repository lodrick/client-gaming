import { Component, OnInit } from '@angular/core';
import { GameService, Game} from '../../services/game.service';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {

  games: Game[];
  newGames = [];
  Other = [];

  constructor(private gameService: GameService) { }

  ngOnInit() {
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
         // this.test = x.name;
          this.newGames.push({'name': x.name, 'image': x.image, 'id': x.id});
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
