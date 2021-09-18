import { Component, OnInit } from '@angular/core';
import { Post } from './shared/post';
import { PostService } from './shared/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  imgProfile: Totem[] = [
    new Totem("assets/img/otavio.png"),
    new Totem("assets/img/arthur.png"),
    new Totem("assets/img/gean.png"),
    new Totem("assets/img/euEmBilbao.png"),
    new Totem("assets/img/mariana.png"),
    new Totem("assets/img/manuel.png"),
  ];

  listPosts: Post[] = [];

  constructor(private postService: PostService) { }

  async ngOnInit() {
    this.listPosts = await this.postService.getPosts();
    console.log(this.listPosts);
  }
}

class Totem {
  constructor(public srcProfile: string) {
    this.srcProfile = srcProfile;
  }
}

