import { Component, OnInit } from '@angular/core';
import { GameService, Game, Jackport} from '../../services/game.service';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  games: Game[];
  other = [];
  Other = [];
  Jackport: Jackport[];


  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.getJackpors();
    this.getGames("other")
  }
  

  getGames(sortBy){
    this.gameService.getGames().subscribe( response => {
      //topGamesFunc(response);
      this.filter( response, sortBy,this.Jackport);
    })
  }

  getJackpors(){
    this.gameService.getJackpots().subscribe(response =>{
      this.Jackport = response
    })
  
  }
  
  filter(data : Game[], sortBy, jackports : Jackport[]){
    let m = 0;
    let _amount = 0;
    let _game_id = ""
    for(let x of data){
      
      for(let jackport of jackports){
        if((jackport.game == x.id) && (jackport.game != undefined)){
            _amount = jackport.amount;
            _game_id = jackport.game;
          
        }
      }
      
      for(let cat of x.categories){
        if((cat !== sortBy)){ 

          if(_game_id = x.id){
            this.other.push({'name': x.name, 'image': x.image, 'id': x.id, 'amount': _amount});
          } else {
            this.other.push({'name': x.name, 'image': x.image, 'id': x.id, 'amount': 0});
          }
          break;
        }
     }
     _game_id = ""
     m++;
    }
    
    //console.log(' arr ' + this.newGames);
    //this.isLoading = false;
  }

  /*jackports_filter(jackport : Jackport[], all_games: Game[]) {
    let x = 0;
    for(let game_jackport of jackport){
      if(game_jackport.game == all_games[x].id ){

      }
      x++;
    }
  }*/
}
