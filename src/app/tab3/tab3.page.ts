import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  posts = 175
  followers = 105
  following = 578
  highlights = [
    {
      imageURL: 'https://i.pinimg.com/originals/9f/ac/b4/9facb48d2d8340ba5aee83e6bf8bd05e.jpg', 
      name: 'Drowings'
    },
    {
      imageURL: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 
      name: '💚💚💚'
    },
    {
      imageURL: 'data:image/jpeg;base64,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', 
      name: 'Music'
    },
    {
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxxk25rXO6kSdibEKMQ7niBmZZxrK5xIEzV8AjUgHKzy_ZEQG1&usqp=CAU', 
      name: '😍😍'
    },
    {
      imageURL: 'https://benjaminjurke.com/assets/images/authors/benjamin-jurke-v6.jpg', 
      name: '☺☺☺'
    },
    {
      imageURL: 'https://ph-files.imgix.net/60b7b167-070b-4964-a62e-893ae04e9126?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=221&h=221&fit=max', 
      name: 'without'
    }

  ]
  openedSegment = 'grid'

  constructor(private menu: MenuController) {}


  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  segmentChanged(ev: any) {
    // console.log('Segment changed', ev);
    this.openedSegment = ev.detail.value
    
  }

}
