import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AppAvailability } from '@ionic-native/app-availability';
import { Device } from '@ionic-native/device';
import { DatePipe } from '@angular/common';
import { NativeStorage } from '@ionic-native/native-storage';
import { Camera } from '@ionic-native/camera';
import { CameraPreview } from '@ionic-native/camera-preview';
import { PhotoLibrary } from '@ionic-native/photo-library';
//Main module
import { MyApp } from './app.component';
import { MainTabsPage } from '../pages/MainModule/main-tabs/main-tabs';
import { HomePage } from '../pages/MainModule/home/home';
import { PlacesPage } from '../pages/MainModule/places/places';
import { RankingPage } from '../pages/MainModule/ranking/ranking';
import { ProfilePage } from '../pages/MainModule/profile/profile';
import { OthersProfilePage } from '../pages/AccountModule/others-profile/others-profile';
import { EditProfilePage } from '../pages/MainModule/edit-profile/edit-profile';
import { ProfilePhotoPage } from '../pages/MainModule/profile-photo/profile-photo';

//Account module
import { LoginPage } from '../pages/AccountModule/login/login';
import { RegistrationPage } from '../pages/AccountModule/registration/registration';
import { ForgotPasswordPage } from '../pages/AccountModule/forgot-password/forgot-password';
import { UpdatePasswordPage } from '../pages/AccountModule/update-password/update-password';
import { PeoplePage } from '../pages/AccountModule/people/people';
import { LoginWechatPage } from '../pages/AccountModule/login-wechat/login-wechat';
import { UpdateProfilePage } from '../pages/AccountModule/update-profile/update-profile';
import { CameraOpenPage } from '../pages/AccountModule/camera-open/camera-open';

// FollowModule
import { FollowRequestsPage } from '../pages/FollowModule/follow-requests/follow-requests';
import { FollowersPage } from '../pages/FollowModule/followers/followers';
//Story module
import { ManagePhotoPage } from '../pages/story/manage-photo/manage-photo';
import { ShowPhotoPage } from '../pages/story/show-photo/show-photo';
import { LocationPage } from '../pages/story/location/location';
import { StoryCategoryPage } from '../pages/story/story-category/story-category';
import { GalleryPage } from '../pages/story/gallery/gallery';
import { ShowStoryPage } from '../pages/story/show-story/show-story';
import { StoryListPage } from '../pages/story/story-list/story-list';
import { StoryScreenPage } from '../pages/story/story-screen/story-screen';
import { StoryTopListPage } from '../pages/story/story-top-list/story-top-list';

//Services
import { ImageService } from '../pages/util/imageservice';
import { UnsplashItUtil } from '../pages/util/unsplashItutil';
import { FilterService } from '../pages/util/filterservice';
import { TabsService } from '../pages/util/tabservice';

//Search Module
import { SearchResultPage } from '../pages/SearchModule/search-result/search-result';

//MyPet
import { MyPetPage } from '../pages/MyPet/my-pet/my-pet';
//providers
import { Toast } from '@ionic-native/toast';
import { Network } from '@ionic-native/network';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NetworkProvider } from '../providers/network/network';
import { ToastProvider } from '../providers/toast/toast';
import { LoginProvider } from '../providers/login/login';
import { ImagePicker } from '@ionic-native/image-picker';
import { AlertProvider } from '../providers/alert/alert';
import { ConfigProvider } from '../providers/config/config';
import { LoadingProvider } from '../providers/loading/loading';
import { PeopleProvider } from '../providers/people/people';
import { HttpModule } from '@angular/http';
import { FollowProvider } from '../providers/follow/follow';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { IonTagsInputModule } from "ionic-tags-input";
import { LocationTrackerProvider } from '../providers/location-tracker/location-tracker';
import { BaiduProvider } from '../providers/baidu/baidu';
import { BaiduMapModule } from 'angular2-baidu-map'
import { IonicSwipeAllModule } from 'ionic-swipe-all';
//PopOvers
import { BirthdayPage } from '../pages/Popover/birthday/birthday';
import { TermsPage } from '../pages/Popover/terms/terms';
import { WhyProfilePage } from '../pages/Popover/why-profile/why-profile';

//Pipes 
import { CDVPhotoLibraryPipe } from '../pipes/cdvphotolibrary.pipe';
import { StoryServiceProvider } from '../providers/story-service/story-service';
import { ImageProvider } from '../providers/image/image';
import { ProfileProvider } from '../providers/profile/profile';
import { SearchResProvider } from '../providers/search-res/search-res';

//components
import { StoryComponent } from '../components/story/story';
import { FollowingComponent } from '../components/following/following';
import { RankingComponent } from '../components/ranking/ranking';
import { FollowersComponent } from '../components/followers/followers';
import { FormServiceProvider } from '../providers/form-service/form-service';

@NgModule({
  declarations: [
    MyApp,
    MainTabsPage,
    HomePage,
    LoginPage,
    RegistrationPage,
    ForgotPasswordPage,
    UpdatePasswordPage,
    PlacesPage,
    RankingPage,
    ProfilePage,
    PeoplePage,
    OthersProfilePage,
    FollowRequestsPage,
    ManagePhotoPage,
    CDVPhotoLibraryPipe,
    ShowPhotoPage,
    EditProfilePage,
    LocationPage,
    StoryCategoryPage,
    LoginWechatPage,
    GalleryPage,
    UpdateProfilePage,
    CameraOpenPage,
    BirthdayPage,
    TermsPage,
    WhyProfilePage,
    SearchResultPage,
    MyPetPage,
    ShowStoryPage,
    StoryListPage,
    StoryTopListPage,
    StoryScreenPage,
    FollowersPage,
    ProfilePhotoPage,
    StoryComponent,
    FollowingComponent,
    RankingComponent,
    FollowersComponent,
  ],
  imports: [
    HttpClientModule,
    IonicSwipeAllModule,
    BaiduMapModule.forRoot({ ak: 'j7eig5KpXzk4YsWNwpagmybjL2WRGCZC' }),
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    BrowserModule,
    HttpModule,
    IonTagsInputModule,
    IonicModule.forRoot(MyApp, {}, {
      links: [
        { component: HomePage, name: 'Home', segment: 'home' },
        { component: PlacesPage, name: 'Place', segment: 'places' },
        { component: RankingPage, name: 'Ranking', segment: 'ranking' },
        { component: ProfilePage, name: 'Profile', segment: 'profile' },
        { component: UpdatePasswordPage, name: 'UpdatePasswordPage', segment: 'UpdatePasswordPage' },
        { component: ForgotPasswordPage, name: 'ForgotPasswordPage', segment: 'ForgotPasswordPage' },
        { component: LoginPage, name: 'LoginPage', segment: 'LoginPage' },
        { component: RegistrationPage, name: 'RegistrationPage', segment: 'RegistrationPage' },
        { component: PeoplePage, name: 'PeoplePage', segment: 'PeoplePage' },
        { component: OthersProfilePage, name: 'OthersProfilePage', segment: 'OthersProfilePage' },
        { component: FollowRequestsPage, name: 'FollowRequestsPage', segment: 'FollowRequestsPage' },
        { component: ManagePhotoPage, name: 'ManagePhotoPage', segment: 'ManagePhotoPage' },
        { component: ShowPhotoPage, name: 'ShowPhotoPage', segment: 'ShowPhotoPage' },
      ]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainTabsPage,
    HomePage,
    LoginPage,
    RegistrationPage,
    ForgotPasswordPage,
    UpdatePasswordPage,
    PlacesPage,
    RankingPage,
    ProfilePage,
    PeoplePage,
    OthersProfilePage,
    FollowRequestsPage,
    ManagePhotoPage,
    ShowPhotoPage,
    EditProfilePage,
    LocationPage,
    StoryCategoryPage,
    LoginWechatPage,
    GalleryPage,
    UpdateProfilePage,
    CameraOpenPage,
    BirthdayPage,
    TermsPage,
    WhyProfilePage,
    SearchResultPage,
    MyPetPage,
    ShowStoryPage,
    StoryListPage,
    StoryTopListPage,
    StoryScreenPage,
    FollowersPage,
    ProfilePhotoPage,
    StoryComponent,
    FollowingComponent,
    RankingComponent,
    FollowersComponent,
  ],
  providers: [
    StatusBar,
    BackgroundGeolocation,
    Geolocation,
    SplashScreen,
    Network,
    NetworkProvider,
    ToastProvider,
    InAppBrowser,
    AppAvailability,
    Device,
    DatePipe,
    Camera,
    CameraPreview,
    PhotoLibrary,
    NativeStorage,
    Toast,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    LoginProvider,
    ConfigProvider,
    AlertProvider,
    LoadingProvider,
    PeopleProvider,
    NativeGeocoder,
    LocationTrackerProvider,
    BaiduProvider,
    FollowProvider,
    ImageService,
    ImagePicker,
    UnsplashItUtil,
    FilterService,
    TabsService,
    StoryServiceProvider,
    ImageProvider,
    FileTransfer,
    FileTransferObject,
    File,
    ProfileProvider,
    SearchResProvider,
    FormServiceProvider,
  ]
})

export class AppModule { }