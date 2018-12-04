import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { MenubarComponent } from './menubar/menubar.component';
import { NewMergeComponent } from './new-merge/new-merge.component';
import { IprecheckComponent } from './ivd/iprecheck/iprecheck.component';
import { IpostcheckComponent } from './ivd/ipostcheck/ipostcheck.component';
import { IvdCaseInfoComponent } from './IVD/ivd-case-info/ivd-case-info.component';

const routes = [
  { path: '', component: ContentComponent },
  { path: 'newMerge', component: NewMergeComponent },
  { path: 'ivdCaseInfo', component: IvdCaseInfoComponent},
  { path: 'ivdpremerge', component: IprecheckComponent },
  { path: 'ivdpostmerge', component: IpostcheckComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ContentComponent,
    MenubarComponent,
    NewMergeComponent,
    IprecheckComponent,
    IpostcheckComponent,
    IvdCaseInfoComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
