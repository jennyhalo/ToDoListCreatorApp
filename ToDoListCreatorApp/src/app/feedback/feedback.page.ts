import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

  profile: import("@angular/fire/firestore").DocumentData;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  sendFeedback() {

    this.router.navigate(['/thank-you']);

  }
}
