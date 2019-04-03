import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { HomeComponent } from './home/home.component';
import { DailyQuizComponent } from './daily-quiz/daily-quiz.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SearchComponent} from './search/search.component';
import { QuizResultsComponent } from './quiz-results/quiz-results.component';
import { TransactComponent } from './transact/transact.component';
import { PrivateComponent } from './private/private.component';
import { PremierComponent } from './premier/premier.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountQuizComponent } from './account-quiz/account-quiz.component';
import { EbucksQuizComponent } from './ebucks-quiz/ebucks-quiz.component';
import { LoanquizComponent } from './loanquiz/loanquiz.component';
import { PaymentsComponent } from './payments/payments.component';
import { NavComponent } from './nav/nav.component';
import { InvestComponent } from './invest/invest.component';
import { PaymentsInfoComponent } from './payments-info/payments-info.component';
import { InvestInfoComponent } from './invest-info/invest-info.component';
import { NavInfoComponent } from './nav-info/nav-info.component';
import { BorrowInfoComponent } from './borrow-info/borrow-info.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { EbucksInfoComponent } from './ebucks-info/ebucks-info.component';
const routes: Routes = [
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'daily_quiz', component: DailyQuizComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'search', component: SearchComponent },
  { path: 'results', component: QuizResultsComponent },
  { path: 'transact', component: TransactComponent },
  { path: 'private', component: PrivateComponent },
  { path: 'premier', component: PremierComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'accountquiz', component: AccountQuizComponent },
  { path: 'ebucksquiz', pathMatch: 'prefix', component: EbucksQuizComponent},
  { path: 'loanquiz', pathMatch: 'prefix', component: LoanquizComponent},
  { path: 'paymentsquiz', pathMatch: 'prefix', component: PaymentsComponent},
  { path: 'navquiz', pathMatch: 'prefix', component: NavComponent},
  { path: 'investquiz', pathMatch: 'prefix', component: InvestComponent},
  { path: 'learn-more-payments', pathMatch: 'prefix', component: PaymentsInfoComponent},
  { path: 'learn-more-invest', pathMatch: 'prefix', component: InvestInfoComponent},
  { path: 'learn-more-nav', pathMatch: 'prefix', component: NavInfoComponent},
  { path: 'learn-more-borrow', pathMatch: 'prefix', component: BorrowInfoComponent},
  { path: 'learn-more-accounts', pathMatch: 'prefix', component: AccountInfoComponent},
  { path: 'learn-more-ebucks', pathMatch: 'prefix', component: EbucksInfoComponent},

  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
