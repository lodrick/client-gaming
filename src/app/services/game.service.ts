import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

export class Game {
  constructor(
    public id: string,
    public image : string,
    public name: string,
    public categories: Array<Object>
  ){}
}

export class Jackport {
  constructor (
    public game: string,
    public amount: number
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private httpClient: HttpClient) { }

  getGames(){
    console.log("Test calling all games");
    return this.httpClient.get<Game[]>('http://stage.whgstage.com/front-end-test/games.php')
  }

  getJackpots() {
    console.log("Test calling all jackpots")
    return this.httpClient.get<Jackport[]>('http://stage.whgstage.com/front-end-test/jackpots.php')
  }

}
