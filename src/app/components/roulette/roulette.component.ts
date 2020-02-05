import { Component, OnInit } from '@angular/core';
import { GameService, Game} from '../../services/game.service';

@Component({
  selector: 'app-roulette',
  templateUrl: './roulette.component.html',
  styleUrls: ['./roulette.component.css']
})
export class RouletteComponent implements OnInit {

  games: Game[];
  roulette = [];
  Other = [];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.getGames("roulette");
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
          this.roulette.push({'name': x.name, 'image': x.image, 'id': x.id});
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
