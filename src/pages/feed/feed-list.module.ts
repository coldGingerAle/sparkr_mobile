import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { FeedListPage } from './feed-list';

@NgModule({
  declarations: [
    FeedListPage,
  ],
  imports: [
    IonicPageModule.forChild(FeedListPage),
  ],
  exports: [
    FeedListPage
  ]
})

export class FeedListPageModule {}
