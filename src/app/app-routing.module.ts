import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { HomeComponent } from './home/home.component';
import { DailyQuizComponent } from './daily-quiz/daily-quiz.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SearchComponent} from './search/search.component';
import { QuizResultsComponent } from './quiz-results/quiz-results.component';


const routes: Routes = [
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'daily_quiz', component: DailyQuizComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'search', component: SearchComponent },
  { path: 'results', component: QuizResultsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
