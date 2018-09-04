import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PeoplePage } from '../../AccountModule/people/people';
import { PlacesPage } from '../places/places';
import { RankingPage } from '../ranking/ranking';
import { ProfilePage } from '../profile/profile';
import { MyPetPage } from '../../MyPet/my-pet/my-pet';
import { GalleryPage } from '../../story/gallery/gallery';
import { ShowStoryPage } from '../../story/show-story/show-story';

@IonicPage()
@Component({
  selector: 'page-main-tabs',
  templateUrl: 'main-tabs.html',
})
export class MainTabsPage {
  tab1Root: any = HomePage;
  tab2Root: any = MyPetPage;
  tab3Root: any = GalleryPage;
  tab4Root: any = RankingPage;
  tab5Root: any = ProfilePage;
  mySelectedIndex: number;

  constructor(public params: NavParams, public navCtrl: NavController) {
    if (params.data.tabIndex) {
      this.mySelectedIndex = params.data.tabIndex || 0;
    } else {
      this.mySelectedIndex = 0;
    }
  }

}