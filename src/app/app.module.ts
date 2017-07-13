import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {
  MdButtonModule,
  MdCardModule,
  MdDialogModule,
  MdGridListModule,
  MdIconModule,
  MdLineModule,
  MdListModule,
  MdMenuModule,
  MdTabsModule,
  MdToolbarModule
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';

import 'hammerjs';
import {BriefPipe} from '../pipes/BriefPipe';

import {AppComponent} from './app.component';
import {ArticleAddComponent} from './articleAdd/articleAdd';
import {ExploreComponent} from './explore/explore';
import {HomeComponent} from './home/home';
import {LoginDialogComponent} from './loginDialog/loginDialog';
import {MineComponent} from './mine/mine';
import {MsgComponent} from './msg/msg';
import {PageNotFoundComponent} from './pageNotFound/pageNotFound';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', redirectTo: ''},
  {path: 'explore', component: ExploreComponent},
  {path: 'msg', component: MsgComponent},
  {path: 'mine', component: MineComponent},

  {path: 'articleAdd', component: ArticleAddComponent},

  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdListModule,
    MdLineModule,
    MdCardModule,
    MdGridListModule,
    MdMenuModule,
    MdTabsModule,
    MdDialogModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ExploreComponent,
    MsgComponent,
    MineComponent,
    PageNotFoundComponent,

    ArticleAddComponent,

    LoginDialogComponent,

    BriefPipe
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginDialogComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
