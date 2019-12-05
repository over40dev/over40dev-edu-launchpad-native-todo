import { Component, OnInit, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss']
})
export class TutorialPage implements OnInit {
  @ViewChild('slides', { static: true })
  slides: IonSlides;

  tutorialCompleted: boolean;

  constructor(private storage: Storage, private router: Router) {}

  async ngOnInit() {
    this.tutorialCompleted = !!(await this.storage.get('tutorialComplete'));
  }

  next() {
    this.slides.slideNext();
  }

  async finish() {
    this.tutorialCompleted = !!(await this.storage.set(
      'tutorialComplete',
      true
    ));
    this.router.navigateByUrl('/');
  }
}
