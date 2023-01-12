import { Component, OnInit } from '@angular/core';

interface ImageIF {
  url: string;
  desc: string;
}

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  images: ImageIF[] = [];

  constructor() {}

  ngOnInit(): void {
    this.populateImages();
  }

  populateImages() {
    this.images.push({
      url: 'assets/images/instagram_images/IMG_8014.jpg',
      desc: 'an image',
    });
    this.images.push({
      url: 'assets/images/instagram_images/IMG_8020.jpg',
      desc: 'an image',
    });
    this.images.push({
      url: 'assets/images/instagram_images/IMG_8022.jpg',
      desc: 'an image',
    });
  }

  buy() {
    alert('billet købt');
  }
}
