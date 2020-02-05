import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './components/game/game.component'
import { TopGamesComponent } from './components/top-games/top-games.component';
import { TableComponent } from './components/table/table.component';
import { SlotsComponent } from './components/slots/slots.component'
import { RouletteComponent } from './components/roulette/roulette.component';
import { JackpotsComponent } from './components/jackpots/jackpots.component';
import { BlackjackComponent } from './components/blackjack/blackjack.component';
import { LiveComponent } from './components/live/live.component';
import { PokerComponent} from './components/poker/poker.component';
import { OtherComponent} from './components/other/other.component';

const routes: Routes = [
  {path:'', component: GameComponent},
  {path:'topGames', component: TopGamesComponent},
  {path:'tableGames', component: TableComponent},
  {path:'slotsGames', component: SlotsComponent},
  {path:'rouletteGames', component: RouletteComponent},
  {path:'jackportGames', component: JackpotsComponent},
  {path:'blackjackGames', component: BlackjackComponent},
  {path:'liveGames', component: LiveComponent},
  {path:'pokerGames', component: PokerComponent},
  {path:'otherGames', component: OtherComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
