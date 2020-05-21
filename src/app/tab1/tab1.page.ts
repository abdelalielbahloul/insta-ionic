import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  stories = [
    {
      imageURL: 'https://pbs.twimg.com/media/DZotU1hW0AEDN5F.jpg', 
      name: 'maxim alex'
    },
    {
      imageURL: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 
      name: 'felexalbert'
    },
    {
      imageURL: 'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/1f846f639010a1e7e1883aaab85b58f0-1533776088426/Screenshot%202018-08-08%20at%208.12.47%20PM%20-%20Edited.png', 
      name: 'floris.catalina'
    },
    {
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxxk25rXO6kSdibEKMQ7niBmZZxrK5xIEzV8AjUgHKzy_ZEQG1&usqp=CAU', 
      name: 'Hind.louzi'
    },
    {
      imageURL: 'https://benjaminjurke.com/assets/images/authors/benjamin-jurke-v6.jpg', 
      name: 'felexkamello'
    },
    {
      imageURL: 'https://ph-files.imgix.net/60b7b167-070b-4964-a62e-893ae04e9126?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=221&h=221&fit=max', 
      name: 'imigs.fils'
    },
    {
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQtr6YteODKQw_ZuBcitxM2C3JtTg8zuR5hxGWTF8crIcB8Yp5S&usqp=CAU', 
      name: 'random-name'
    },
    {
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTqCfT4-3vNXWAGl05TRkN8g2Yjw__ezM2M9HMAd3Vt8ALkLGUy&usqp=CAU', 
      name: 'test-name.2323'
    },
    {
      imageURL: 'https://i1.wp.com/metro.co.uk/wp-content/uploads/2015/07/daniel.jpeg?quality=90&strip=all&zoom=1&resize=540%2C540&ssl=1', 
      name: 'withoutname'
    
    }

  ]

  posts = [
    {
      userAvatar: 'https://pbs.twimg.com/media/DZotU1hW0AEDN5F.jpg',
      userName: 'maxim alex',
      postImage: 'https://media.nesta.org.uk/images/Predictions-2019_Twitter_02.width-1200.png',
      likes: '2.875',
      description: 'Abusus enim multitudine hominum, quam tranquillis in rebus diutius rexit, ex agrestibus habitaculis urbes construxit multis opibus firmas et viribus, quarum ad praesens pleraeque licet'
    },
    {
      userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxxk25rXO6kSdibEKMQ7niBmZZxrK5xIEzV8AjUgHKzy_ZEQG1&usqp=CAU',
      userName: 'Hind.louzi',
      postImage: 'https://3.bp.blogspot.com/-FUVfdLVzt08/Uv5j8ZBp0vI/AAAAAAAAFmE/yneznNlDgIY/s1600/Bacteria-bacilicus-subtilis.png',
      likes: '875',
      description: 'Abusus enim multitudine hominum, quam tranquillis in rebus diutius rexit, ex agrestibus habitaculis urbes construxit multis opibus firmas et viribus, quarum ad praesens pleraeque licet'
    },
    {
      userAvatar: 'https://benjaminjurke.com/assets/images/authors/benjamin-jurke-v6.jpg',
      userName: 'felexkamello',
      postImage: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      likes: '275',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati consectetur labore reprehenderit quos quis cum aut aperiam magni, rem distinctio. Beatae voluptatibus nam ab sint necessitatibus eius quia nostrum porro!'
    }
    
  ]



  constructor() {}

}
