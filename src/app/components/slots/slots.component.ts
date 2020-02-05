import { Component, OnInit } from '@angular/core';
import { GameService, Game} from '../../services/game.service';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.css']
})
export class SlotsComponent implements OnInit {

  games: Game[];
  slots = [];
  Other = [];

  constructor(private gameService: GameService) { }

  ngOnInit() {
     this.getGames("slots")
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
          this.slots.push({'name': x.name, 'image': x.image, 'id': x.id});
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
