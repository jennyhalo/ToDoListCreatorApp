import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import * as firebase from 'firebase/compat/app';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class AuthService 
{
  constructor
  (
    private afs: AngularFirestore,
    private afauth: AngularFireAuth,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastr: ToastController
  )
  {
    this.user$ = this.afauth.authState
    .pipe(
      switchMap( user => {

        if(user)
        {
          return this.afs.doc<User>(`user/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }

      })
    )
   } // end of constructor

  user$: Observable<User | null | undefined>;
  user: User;


  async signIn(email: string, password: string) 
  {
    const loading = await this.loadingCtrl.create({
      message: 'Authenticating..',
      spinner: 'crescent',
      showBackdrop: true
    });
  
  loading.present();
  
  this.afauth.setPersistence(firebase.default.auth.Auth.Persistence.LOCAL)
  .then(()=> {
    this.afauth.signInWithEmailAndPassword(email, password)
    .then((data)=>
    {
      if(!data.user?.emailVerified)
      {
        loading.dismiss();
        this.toast('Please verify your email address!', 'warning');
        this.afauth.signOut();
      } else {
        loading.dismiss();
        this.router.navigate(['/to-do-app']);
      }
    })
    .catch((error: { message: any; }) => {
      loading.dismiss();
      this.toast(error.message, 'danger');
    })
  })
  .catch((error: { message: any; }) => {
    loading.dismiss();
    this.toast(error.message, 'danger');
  });
  }// end of signIn

async toast(message: any, status: any)
{
  const toast = await this.toastr.create({
    message: message,
    color: status,
    position: 'top',
    duration: 2000
  });
  
  toast.present();
  
} // end of toast

async signOut()
{
 const loading = await this.loadingCtrl.create({
    spinner: 'crescent',
    showBackdrop: true
  });
  loading.present();

  this.afauth.signOut()
  .then(()=> {
    loading.dismiss();
    this.router.navigate(['/login']);
  })
} // end of signout
}


