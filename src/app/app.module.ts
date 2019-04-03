import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DailyQuizComponent } from './daily-quiz/daily-quiz.component';
import {FormsModule} from '@angular/forms';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SearchComponent } from './search/search.component';
import { QuizResultsComponent } from './quiz-results/quiz-results.component';
import { ProductService } from './services/product.service';
import { TransactComponent } from './transact/transact.component';
import { PrivateComponent } from './private/private.component';
import { PremierComponent } from './premier/premier.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    DailyQuizComponent,
    LeaderboardComponent,
    HomeComponent,
    FeedbackComponent,
    SearchComponent,
    QuizResultsComponent,
    TransactComponent,
    PremierComponent,
    PrivateComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
