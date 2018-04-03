import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderLoginComponent } from './header/header-login/header-login.component';
import { HeaderLogoComponent } from './header/header-logo/header-logo.component';
import { HeaderNavComponent } from './header/header-nav/header-nav.component';
import { HeaderMobileMenuComponent } from './header/header-mobile-menu/header-mobile-menu.component';
import { HeaderMobileHamburgerComponent } from './header/header-mobile-hamburger/header-mobile-hamburger.component';
import { HeaderRedbarComponent } from './header/header-redbar/header-redbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PageComponent } from './page/page.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PageStackComponent } from './page/page-stack/page-stack.component';
import { PageLocationComponent } from './page/page-location/page-location.component';
import { PageListComponent } from './page/page-list/page-list.component';
import { PageMarkdownComponent } from './page/page-markdown/page-markdown.component';
import { PageFormComponent } from './page/page-form/page-form.component';
import { PageImageCardComponent } from './page/page-image-card/page-image-card.component';
import { PostComponent } from './post/post.component';
import { BrowseComponent } from './browse/browse.component';
import { VideoComponent } from './video/video.component';
import { ShareComponent } from './video/share/share.component';
import { PageImageStackComponent } from './page/page-image-stack/page-image-stack.component';
import { CommunicationComponent } from './communication/communication.component';
import { SeriesComponent } from './series/series.component';
import { PostActionComponentComponent } from './post-action-component/post-action-component.component';
import { PostDatesComponent } from './post/post-dates/post-dates.component';

const appRoutes: Routes = [
	{ path: '', component: HomepageComponent },
	{ path: '404', component: NotFoundComponent },
	{ path: 'enjoy/:permalink', component: PostComponent },
	{ path: 'blog/:permalink', component: PostComponent },
	{ path: 'move/classes/:permalink', component: PostComponent },
	{ path: 'move/groups/:permalink', component: PostComponent },
	{ path: 'watch', component: BrowseComponent },
	{ path: 'watch/:permalink', component: VideoComponent },
	{ path: 'series/:permalink', component: SeriesComponent },
	{ path: ':permalink', component: PageComponent },
	{ path: ':permalink/topic/:topic', component: PageComponent },
	{ path: ':parent/:permalink', component: PageComponent }
];

@NgModule({
  declarations: [
		AppComponent,
    HeaderComponent,
    HeaderLoginComponent,
    HeaderLogoComponent,
    HeaderNavComponent,
    HeaderMobileMenuComponent,
    HeaderMobileHamburgerComponent,
		HeaderRedbarComponent,
    HomepageComponent,
    PageComponent,
    FooterComponent,
    PageStackComponent,
    PageLocationComponent,
    PageListComponent,
    PageMarkdownComponent,
    PageFormComponent,
    PageImageCardComponent,
    PostComponent,
    BrowseComponent,
    VideoComponent,
    ShareComponent,
    PageImageStackComponent,
    CommunicationComponent,
    SeriesComponent,
    PostActionComponentComponent,
    PostDatesComponent,
		NotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'flatland-v2'}),
		RouterModule.forRoot(
      appRoutes
		),
		HttpModule,
		FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
