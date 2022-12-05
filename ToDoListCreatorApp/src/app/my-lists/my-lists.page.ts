import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-my-lists',
  templateUrl: './my-lists.page.html',
  styleUrls: ['./my-lists.page.scss'],
})
export class MyListsPage implements OnInit 
{

  constructor
  (
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

}
