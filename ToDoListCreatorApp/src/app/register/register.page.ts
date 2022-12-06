import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from  '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit 
{
  name: string;
  email: string;
  password: string;
  type: boolean =true;

  constructor
  (
    private afs: AngularFirestore,
    private afauth: AngularFireAuth,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastr: ToastController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  async register()
  {
    if(this.email && this.password && this.name)
    {
      const loading = await this.loadingCtrl.create({
        message: 'processing..',
        spinner: 'crescent',
        showBackdrop: true
      });
      loading.present();

      this.afauth.createUserWithEmailAndPassword(this.email, this.password)
      .then((data)=> {
        data.user?.sendEmailVerification();
        this.afs.collection('user').doc(data.user!.uid).set({
          'userId': data.user!.uid,
          'userName':this.name,
          'userEmail':this.email,
          'createdAt': Date.now()
        })
        .then(()=> {
          loading.dismiss();
          this.toast('Registration Success! Please Check Your Email!', 'success');
          this.router.navigate(['/login']);
        })
        .catch((error: any) => {
          console.log(error);
        })
      })
    }
  } // end of register

  async toast(message: string, status: string)
  {
    const toast = await this.toastr.create({
      message: message,
      color: status,
      position: 'top',
      duration: 2000
    });
    toast.present();
  } // end of toast
  changeType() {
    this.type =!this.type;
  }
  backButton() {
    this.navCtrl.back();

  }
}
