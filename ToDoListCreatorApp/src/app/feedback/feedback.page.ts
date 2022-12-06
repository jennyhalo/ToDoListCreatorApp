import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AvatarService } from '../services/avatar.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

  profile: import("@angular/fire/firestore").DocumentData;

  constructor(

    private router: Router,
    private avatarService: AvatarService,
    private navCtrl: NavController
  ) { 
    this.avatarService.getUserProfile().subscribe((data) => {
      this.profile = data;
    });
  }
  ngOnInit() {
  }
  sendFeedback() {

    this.router.navigate(['/thank-you']);

  }
  gotoprofile() {
    this.router.navigate(['/profile']);
  }
  backButton() {
    this.navCtrl.back();

  }
}
