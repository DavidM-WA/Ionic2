import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {TranslateService} from '@ngx-translate/core';
import {TodoComponent} from './todolist/todo.component';

import {HomePage} from './home/home';
@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  homePage = HomePage;
  todoPage = TodoComponent;

  rootPage: any = HomePage;
  @ViewChild(Nav) nav;

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');
    if (this.translate.getBrowserLang() !== undefined) {
      this.translate.use(this.translate.getBrowserLang());
    } else {
      this.translate.use('en');
    }
  }

  openPage(page) {
    this.nav.push(page);
  }

  constructor(private translate: TranslateService, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.initTranslate();
    });
  }
}

