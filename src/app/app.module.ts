import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { GameComponent } from './components/game/game.component';
import { FormsModule } from '@angular/forms';
import { TopGamesComponent } from './components/top-games/top-games.component';
import { SlotsComponent } from './components/slots/slots.component';
import { PokerComponent } from './components/poker/poker.component';
import { RouletteComponent } from './components/roulette/roulette.component';
import { BlackjackComponent } from './components/blackjack/blackjack.component';
import { JackpotsComponent } from './components/jackpots/jackpots.component';
import { TableComponent } from './components/table/table.component';
import { LiveComponent } from './components/live/live.component';
import { OtherComponent } from './components/other/other.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    TopGamesComponent,
    SlotsComponent,
    PokerComponent,
    RouletteComponent,
    BlackjackComponent,
    JackpotsComponent,
    TableComponent,
    LiveComponent,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
