import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from "@angular/platform-browser";
import { TabsService } from "../../util/tabservice";
import { CameraOpenPage } from '../../AccountModule/camera-open/camera-open';
import { StoryCategoryPage } from '../story-category/story-category';
import { AlertProvider } from '../../../providers/alert/alert';
import { Camera, CameraOptions } from '@ionic-native/camera';

//provider
import { LoginProvider } from '../../../providers/login/login';
import { LoadingProvider } from '../../../providers/loading/loading';

@IonicPage()
@Component({
  selector: 'page-upload-receipt',
  templateUrl: 'upload-receipt.html',
})
export class UploadReceiptPage {

  public images;
  public srcPhoto;
  public imgSend;
  public responseData;
  public status;
  public result;
  public data;
  public image;
  public locName;
  public latitude;
  public longitude;
  private recipt_show;
  private receipt_private;
  public receiptImage;
  public sel_cat_id;

  public flashMode = "off";

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform,
    public sanitizer: DomSanitizer,
    private tabService: TabsService,
    private imagePicker: ImagePicker,
    public alertProvider: AlertProvider,
    public camera: Camera,
    private loginProvider: LoginProvider,
    public loadingProvider: LoadingProvider, ) {

    if (this.srcPhoto != undefined) {
      this.receiptImage = this.srcPhoto;
      this.imgSend = this.srcPhoto;
    }
    else {
      this.receiptImage = "assets/icon/user.png";
    }

    this.sel_cat_id = this.navParams.get('sel_cat_id');
    this.image = this.navParams.get('image');
    this.locName = this.navParams.get('locName');
    this.latitude = this.navParams.get('latitude');
    this.longitude = this.navParams.get('longitude');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadReceiptPage');
  }

  ionViewWillEnter() {
    this.tabService.hide();
  }

  updateReceipt() {
    console.log('Receipt privacy is : ' + this.receipt_private);
    if (this.receipt_private) {
      this.recipt_show = 1;
    }
    else {
      this.recipt_show = 0;
    }
  }

  goBack() {
    this.navCtrl.push(StoryCategoryPage, {
      receipt: this.result,
      sel_cat_id: this.sel_cat_id,
      isPrivate: this.recipt_show,
      image: this.image,
      locName: this.locName,
      latitude: this.latitude,
      longitude: this.longitude
    });
  }

  ionViewDidLeave() {
  }

  save() {
    //code to save
    console.log('select : ' + this.imgSend);
    if (this.imgSend == undefined) {
      this.alertProvider.title = 'Error';
      this.alertProvider.message = 'Please Select Image First.';
      this.alertProvider.showAlert();
    }
    else {

      this.navCtrl.push(StoryCategoryPage, {
        receiptImage: this.imgSend,
        sel_cat_id: this.sel_cat_id,
        receipt_private: this.recipt_show,
        image: this.image,
        locName: this.locName,
        latitude: this.latitude,
        longitude: this.longitude
      });
    }
  }

  openCamera() {
    this.navCtrl.push(CameraOpenPage, {
      receipt: this.result,
      image: this.image,
      locName: this.locName,
      latitude: this.latitude,
      longitude: this.longitude,
      sel_cat_id: this.sel_cat_id,
      isPrivate: this.recipt_show,
      sendClass: 'Receipt'
    });
  }

  openGallery() {

    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: 0,
    }

    this.camera.getPicture(options).then((imageData) => {
      this.receiptImage = 'data:image/jpeg;base64,' + imageData;
      this.imgSend = this.receiptImage;
    }, (err) => {
      // Handle error
    });
  }
}
