import { Component, OnInit } from '@angular/core';
import { Post } from './shared/post';
import { PostService } from './shared/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  imgProfile: string[] = [
    "assets/img/otavio.png",
    "assets/img/arthur.png",
    "assets/img/gean.png",
    "assets/img/euEmBilbao.png",
    "assets/img/mariana.png",
    "assets/img/manuel.png"
  ];

  listPosts: Post[] = [];

  constructor(private postService: PostService) { }

  async ngOnInit() {
    this.listPosts = await this.postService.getPosts();
    console.log(this.listPosts);

    for (let i = 0; i < this.imgProfile.length; i++) {
      let src: string = this.imgProfile[i];
      this.listPosts[i].src_profile = src;
    }
  }
}

