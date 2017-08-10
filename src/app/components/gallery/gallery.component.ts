import { Component, OnInit, OnDestroy } from '@angular/core';



import {Image, Action, ImageModalEvent, Description} from 'angular-modal-gallery';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';




@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnDestroy {

    openModalWindow: boolean = false;
      imagePointer: number = 0;

      openModalWindowObservable: boolean = false;
      imagePointerObservable: number = 0;

      imagesArray: Array<Image> = [
        new Image(
          '../assets/img/gallery/1.jpg',
          null, // no thumb
          'Description 1', // no description
          'http://www.google.com'
        ),
        new Image(
          '../assets/img/gallery/2.jpg',
          null, // no thumb
          'Description 2', // no description
          'http://www.google.com'
        ),
        new Image(
          '../assets/img/gallery/3.jpg',
          null, // no thumb
          'Description 3', // no description
          'http://www.google.com'
        ),
        new Image(
          '../assets/img/gallery/4.jpg',
          null, // no thumb
          'Description 4', // no description
          'http://www.google.com'
        ),
        new Image(
          '../assets/img/gallery/5.jpg',
          null, // no thumb
          'Description 5', // no description
          'http://www.google.com'
        ),
        new Image(
          '../assets/img/gallery/6.jpg',
          null, // no thumb
          'Description 6', // no description
          'http://www.google.com'
        ),
        new Image(
          '../assets/img/gallery/7.jpg',
          null, // no thumb
          'Description 7', // no description
          'http://www.google.com'
        ),
        new Image(
          '../assets/img/gallery/8.jpg',
          null, // no thumb
          'Description 8', // no description
          'http://www.google.com'
        ),
        new Image(
          '../assets/img/gallery/9.jpg',
          null, // no thumb
          'Description 9', // no description
          'http://www.google.com'
        ),
        new Image(
          '../assets/img/gallery/10.jpg',
          null, // no thumb
          'Description 10', // no description
          'http://www.google.com'
        ),
        new Image(
          '../assets/img/gallery/11.jpg',
          null, // no thumb
          'Description 11', // no description
          'http://www.google.com'
        ),
        new Image(
          '../assets/img/gallery/12.jpg',
          null, // no thumb
          'Description 12', // no description
          'http://www.google.com'
        ),
        new Image(
          '../assets/img/gallery/13.jpg',
          null, // no thumb
          'Description 13', // no description
          'http://www.google.com'
        ),
      ];

      // observable of an array of images with a delay to simulate a network request
      images: Observable<Array<Image>> = Observable.of(this.imagesArray).delay(30);

      /*
      // array with a single image inside (the first one)
      singleImage: Observable<Array<Image>> = Observable.of([
        new Image(
          '../assets/img/caro/img1.jpg',
          '../assets/img/caro/thumbs/img1.jpg',
          'Description 1',
          'http://www.google.com'
        )]
      );*/

      // array of images initialized inside the onNgInit() of this component
      // in an asynchronous way subscribing to an Observable with a delay.
      // This is not a real use-case, but it's a way to simulate a scenario where
      // you have to subscribe to an Observable to get data and to set public vars
      imagesArraySubscribed: Array<Image>;

      customDescription: Description = {
        imageText: 'Look this image ',
        numberSeparator: ' of ',
        beforeTextDescription: ' => '
      };

      customFullDescription: Description = {
        // you should build this value programmaticaly with the result of (show)="..()" event
        customFullDescription: 'Custom description of the current visible image',
        // if customFullDescription !== undefined, all other fields will be ignored
        // imageText: '',
        // numberSeparator: '',
        // beforeTextDescription: '',
      };

      private subscription: Subscription;
      private imagesArraySubscription: Subscription;

      ngOnInit() {
        this.imagesArraySubscription = Observable.of(null).delay(500).subscribe(() => {
          this.imagesArraySubscribed = this.imagesArray;
        });
      }

      openImageModal(image: Image) {
        this.imagePointer = this.imagesArray.indexOf(image);
        this.openModalWindow = true;
      }

      openImageModalObservable(image: Image) {
        this.subscription = this.images.subscribe((val: Image[]) => {
          this.imagePointerObservable = val.indexOf(image);
          this.openModalWindowObservable = true;
        });
      }

      onImageLoaded(event: ImageModalEvent) {
        // angular-modal-gallery will emit this event if it will load successfully input images
        console.log('onImageLoaded action: ' + Action[event.action]);
        console.log('onImageLoaded result:' + event.result);
      }

      onVisibleIndex(event: ImageModalEvent) {
        this.customFullDescription.customFullDescription = `Custom description of visible image with index= ${event.result}`;
        console.log('action: ' + Action[event.action]);
        console.log('result:' + event.result);
      }

      onIsFirstImage(event: ImageModalEvent) {
        console.log('onfirst action: ' + Action[event.action]);
        console.log('onfirst result:' + event.result);
      }

      onIsLastImage(event: ImageModalEvent) {
        console.log('onlast action: ' + Action[event.action]);
        console.log('onlast result:' + event.result);
      }

      onCloseImageModal(event: ImageModalEvent) {
        console.log('onClose action: ' + Action[event.action]);
        console.log('onClose result:' + event.result);
        this.openModalWindow = false;
        this.openModalWindowObservable = false;
      }

      addRandomImage() {
        this.imagesArray.push(this.imagesArray[Math.floor(Math.random() * this.imagesArray.length)]);
      }

      ngOnDestroy() {
        if (this.subscription) {
          this.subscription.unsubscribe();
        }
        if(this.imagesArraySubscription) {
          this.imagesArraySubscription.unsubscribe();
        }
      }

}
