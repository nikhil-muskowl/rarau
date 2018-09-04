import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingProvider } from '../../providers/loading/loading';
import { AlertProvider } from '../../providers/alert/alert';
import { ToastProvider } from '../../providers/toast/toast';
import { ConfigProvider } from '../config/config';

@Injectable()
export class StoryServiceProvider {
  feeds;
  public headers = new HttpHeaders();
  public formData: FormData = new FormData();

  constructor(
    public loadingProvider: LoadingProvider,
    public alertProvider: AlertProvider,
    public toastProvider: ToastProvider,
    public http: HttpClient,
    public ConfigProvider: ConfigProvider,
  ) {

    this.headers.set('Access-Control-Allow-Origin ', '*');
    this.headers.set('Content-Type', 'application/json; charset=utf-8');
    this.feeds = [];
  }

  static buildItem(id, type, length, src, preview, link, seen, time) {
    return {
      "id": id,
      "type": type,
      "length": length,
      "src": src,
      "preview": preview,
      "link": link,
      "seen": seen,
      "time": time
    };
  }

  getFeed() {
    console.log('Gettinf Feeds', this.feeds);

    return this.feeds;
  }

  addStory(obj) {
    //first get story by array (user) then add to items the story
    //See the follow event
    //Remember, we should just show stories from current date!    
    return new Promise((resolve, reject) => {
      this.loadingProvider.show();
      //   const userId = firebase.auth().currentUser.uid;
      //   this.angularDb.list('story', {
      //     query: {
      //       orderByChild: 'storyBy',
      //       storyBy: userId
      //     }
      //   }).subscribe((data) => {
      //     console.log('story', data);
      //     if (data.length === 0) {
      //       //add story   
      //       console.log('userId', userId);
      //       console.log('OBJ', obj);

      //       this.angularDb.list('story').push({
      //         // id: "",               // story id
      //         storyBy: userId,
      //         photo: obj.userPhoto?obj.userPhoto: '',            // story photo (or user photo)
      //         name: obj.userName?obj.userName:'',             // story name (or user name)
      //         link: "",             // story link (useless on story generated by script)
      //         dateCreated: new Date().getDate().toString(),
      //         lastUpdated: new Date().toString(),      // last updated date in unix time format
      //         seen: false,          // set true if user has opened - if local storage is used, you don't need to care about this 

      //         items: [              // array of items
      //           // story item example
      //           {
      //             //id: "",     // item id
      //             type: "photo",     // photo or video
      //             length: 10,   // photo timeout or video length in seconds - uses 3 seconds timeout for images if not set
      //             src: obj.image,      // photo or video src
      //             preview: obj.image,  // optional - item thumbnail to show in the story carousel instead of the story defined image
      //             link: "",     // a link to click on story
      //             linkText: "", // link text
      //             // time: new Date().toString(),     // optional a date to display with the story item. unix timestamp are converted to "time ago" format
      //             seen: false   // set true if current user was read - if local storage is used, you don't need to care about this
      //           }
      //         ]
      //       }).then((success) => {

      //         this.dataProvider.getUser(userId).take(1).subscribe((account) => {

      //           var stories = account.stories;
      //           if (!stories) {
      //             stories = [success.key];
      //           } else {
      //             stories.push(success.key);
      //           }

      //           this.dataProvider.getUser(userId).update({
      //             stories: stories
      //           })
      //         });

      this.toastProvider.presentToast('Add Story successfully ..');
      this.loadingProvider.hide();
      //         resolve(true);
      //         // this.navCtrl.pop();
      //       })

      //     } else {
      //       //Append Story
      //       console.log(data);
      //       // debugger
      //       const { items, $key } = data[0];
      //       items.push({
      //         type: "photo",     // photo or video
      //         length: 10,   // photo timeout or video length in seconds - uses 3 seconds timeout for images if not set
      //         src: obj.image,      // photo or video src
      //         preview: obj.image,  // optional - item thumbnail to show in the story carousel instead of the story defined image
      //         link: "",     // a link to click on story
      //         linkText: "", // link text
      //         time: new Date().toString(),     // optional a date to display with the story item. unix timestamp are converted to "time ago" format
      //         seen: false   // set true if current user was read - if local storage is used, you don't need to care about this
      //       });
      //       this.angularDb.object('/story/' + $key).update({
      //         items: items
      //       }).then((success) => {
      //         this.alertProvider.showToast('Add Story successfully ..');
      //         this.loadingProvider.hide();
      //         resolve(true);
      //         // this.navCtrl.pop();
      //       })
      //     }
      //   });
    });
  }

  getCategory() {

    return this.http.post(ConfigProvider.BASE_URL + 'story_module/api/story_types_api',
      this.formData,
      {
        headers: this.headers,
      }
    );
  }

  apiTopStory(data: any) {

    this.formData = new FormData();
    this.formData.append('user_id', data.user_id);

    return this.http.post(ConfigProvider.BASE_URL + 'story_module/api/stories_api/followers_stories',
      this.formData,
      {
        headers: this.headers,
      }
    );
  }

  postStory(data: any) {

    var tags = data.tags;
    var images = data.images;
    var user_id = data.user_id;
    var catId = data.catId;
    var latitude = data.latitude;
    var longitude = data.longitude;

    console.log('images : ' + JSON.stringify(images));
    this.formData = new FormData();
    this.formData.append('language_id', '1');
    this.formData.append('title', 'story');
    this.formData.append('description', '');
    this.formData.append('tags', JSON.stringify(tags));
    this.formData.append('latitude', latitude);
    this.formData.append('longitude', longitude);
    this.formData.append('images', JSON.stringify(images));
    this.formData.append('user_id', user_id);
    this.formData.append('story_type_id', catId);

    return this.http.post(ConfigProvider.BASE_URL + 'story_module/api/stories_api/api_save',
      this.formData,
      {
        headers: this.headers,
      }
    );
  }

  getStory(data) {

    this.formData = new FormData();
    this.formData.append('user_id', data.user_id);

    return this.http.post(ConfigProvider.BASE_URL + 'story_module/api/stories_api',
      this.formData,
      {
        headers: this.headers,
      }
    );
  }

  getStoryDetail(data) {

    this.formData = new FormData();
    var story_id = data.story_id;
    console.log('story_id : ', story_id);
    console.log('language_id : ', data.language_id);
    this.formData.append('language_id', data.language_id);

    return this.http.post(ConfigProvider.BASE_URL + 'story_module/api/stories_api/detail/' + story_id,
      this.formData,
      {
        headers: this.headers,
      }
    );
  }

  setComment(data: any) {
    this.formData = new FormData();

    this.formData.append('user_id', data.user_id);
    this.formData.append('story_id', data.story_id);
    this.formData.append('comment', data.comment);
    this.formData.append('language_id', '1');

    return this.http.post(ConfigProvider.BASE_URL + 'story_module/api/stories_api/set_comment',
      this.formData,
      {
        headers: this.headers,
      }
    );
  }

  rankStory(data) {

    this.formData = new FormData();
    var story_id = data.story_id;

    this.formData.append('user_id', data.user_id);
    this.formData.append('story_id', data.story_id);
    this.formData.append('likes', String(data.likes));
    this.formData.append('dislikes', String(data.dislikes));

    return this.http.post(ConfigProvider.BASE_URL + 'story_module/api/stories_api/set_ranking',
      this.formData,
      {
        headers: this.headers,
      }
    );
  }
}