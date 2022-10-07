import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authguard/auth.guard';
import { LoginComponent } from './login/login.component';
import { MainContentComponent } from './main-content/main-content.component';
import { PremiumComponent } from './premium/premium.component';
import { QuotesComponent } from './quotes/quotes.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { WildcardComponent } from './wildcard/wildcard.component';

const routes: Routes = [
  { path: '', component: QuotesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
  {
    path: 'premium',
    component: PremiumComponent,
    canActivate: [AuthGuard],
  },
  { path: 'content/:text', component: MainContentComponent },
  { path: '**', component: WildcardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
