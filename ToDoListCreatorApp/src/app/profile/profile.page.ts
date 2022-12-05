import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { AvatarService } from '../services/avatar.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit 
{
  user: any;
  profile: import("@angular/fire/firestore").DocumentData;

  constructor
  (
    private auth: AuthService,
    private authService: AuthService,
    private avatarService: AvatarService,
    private router: Router,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) { 
    this.avatarService.getUserProfile().subscribe((data) => {
      this.profile = data;
    })
   }

  logout() 
  {
    this.auth.signOut();
  }
  ngOnInit() 
  {
    this.auth.user$.subscribe(user => {
      this.user = user;
    })
  }
  changeImage() {
    
  }

}
