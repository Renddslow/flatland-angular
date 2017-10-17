"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var header_component_1 = require("./header/header.component");
var header_login_component_1 = require("./header/header-login/header-login.component");
var header_logo_component_1 = require("./header/header-logo/header-logo.component");
var header_nav_component_1 = require("./header/header-nav/header-nav.component");
var header_mobile_menu_component_1 = require("./header/header-mobile-menu/header-mobile-menu.component");
var header_mobile_hamburger_component_1 = require("./header/header-mobile-hamburger/header-mobile-hamburger.component");
var homepage_component_1 = require("./homepage/homepage.component");
var page_component_1 = require("./page/page.component");
var footer_component_1 = require("./footer/footer.component");
var footer_social_component_1 = require("./footer/footer-social/footer-social.component");
var footer_nav_component_1 = require("./footer/footer-nav/footer-nav.component");
var page_stack_component_1 = require("./page/page-stack/page-stack.component");
var page_location_component_1 = require("./page/page-location/page-location.component");
var page_list_component_1 = require("./page/page-list/page-list.component");
var page_markdown_component_1 = require("./page/page-markdown/page-markdown.component");
var page_form_component_1 = require("./page/page-form/page-form.component");
var page_image_card_component_1 = require("./page/page-image-card/page-image-card.component");
var post_component_1 = require("./post/post.component");
var browse_component_1 = require("./browse/browse.component");
var video_component_1 = require("./video/video.component");
var share_component_1 = require("./video/share/share.component");
var page_image_stack_component_1 = require("./page/page-image-stack/page-image-stack.component");
var appRoutes = [
    { path: '', component: homepage_component_1.HomepageComponent },
    { path: 'enjoy/:permalink', component: post_component_1.PostComponent },
    { path: 'blog/:permalink', component: post_component_1.PostComponent },
    { path: 'watch', component: browse_component_1.BrowseComponent },
    { path: 'watch/:permalink', component: video_component_1.VideoComponent },
    { path: ':permalink', component: page_component_1.PageComponent },
    { path: ':parent/:permalink', component: page_component_1.PageComponent },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            header_component_1.HeaderComponent,
            header_login_component_1.HeaderLoginComponent,
            header_logo_component_1.HeaderLogoComponent,
            header_nav_component_1.HeaderNavComponent,
            header_mobile_menu_component_1.HeaderMobileMenuComponent,
            header_mobile_hamburger_component_1.HeaderMobileHamburgerComponent,
            homepage_component_1.HomepageComponent,
            page_component_1.PageComponent,
            footer_component_1.FooterComponent,
            footer_social_component_1.FooterSocialComponent,
            footer_nav_component_1.FooterNavComponent,
            page_stack_component_1.PageStackComponent,
            page_location_component_1.PageLocationComponent,
            page_list_component_1.PageListComponent,
            page_markdown_component_1.PageMarkdownComponent,
            page_form_component_1.PageFormComponent,
            page_image_card_component_1.PageImageCardComponent,
            post_component_1.PostComponent,
            browse_component_1.BrowseComponent,
            video_component_1.VideoComponent,
            share_component_1.ShareComponent,
            page_image_stack_component_1.PageImageStackComponent
        ],
        imports: [
            platform_browser_1.BrowserModule.withServerTransition({ appId: 'flatland-v2' }),
            router_1.RouterModule.forRoot(appRoutes),
            http_1.HttpModule,
            forms_1.FormsModule,
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYmx1ZWJlYXJkL2ZsYXRsYW5kY2h1cmNoLmNvbS9zcmMvYXBwL2FwcC5tb2R1bGUudHMiLCJzb3VyY2VzIjpbIi9ob21lL2JsdWViZWFyZC9mbGF0bGFuZGNodXJjaC5jb20vc3JjL2FwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsOERBQTBEO0FBQzFELHNDQUF5QztBQUN6QywwQ0FBdUQ7QUFDdkQsc0NBQTJDO0FBQzNDLHdDQUErQztBQUUvQyxpREFBK0M7QUFDL0MsOERBQTREO0FBQzVELHVGQUFvRjtBQUNwRixvRkFBaUY7QUFDakYsaUZBQThFO0FBQzlFLHlHQUFxRztBQUNyRyx3SEFBb0g7QUFDcEgsb0VBQWtFO0FBQ2xFLHdEQUFzRDtBQUN0RCw4REFBNEQ7QUFDNUQsMEZBQXVGO0FBQ3ZGLGlGQUE4RTtBQUM5RSwrRUFBNEU7QUFDNUUsd0ZBQXFGO0FBQ3JGLDRFQUF5RTtBQUN6RSx3RkFBcUY7QUFDckYsNEVBQXlFO0FBQ3pFLDhGQUEwRjtBQUMxRix3REFBc0Q7QUFDdEQsOERBQTREO0FBQzVELDJEQUF5RDtBQUN6RCxpRUFBK0Q7QUFDL0QsaUdBQTZGO0FBRTdGLElBQU0sU0FBUyxHQUFXO0lBQ3pCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsc0NBQWlCLEVBQUU7SUFDMUMsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7SUFDdEQsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7SUFDckQsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFFO0lBQzdDLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO0lBQ3ZELEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtJQUNoRCxFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtDQUN4RCxDQUFDO0FBdUNGLElBQWEsU0FBUztJQUF0QjtJQUF5QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBQTFCLElBQTBCO0FBQWIsU0FBUztJQXJDckIsZUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFO1lBQ2QsNEJBQVk7WUFDVixrQ0FBZTtZQUNmLDZDQUFvQjtZQUNwQiwyQ0FBbUI7WUFDbkIseUNBQWtCO1lBQ2xCLHdEQUF5QjtZQUN6QixrRUFBOEI7WUFDOUIsc0NBQWlCO1lBQ2pCLDhCQUFhO1lBQ2Isa0NBQWU7WUFDZiwrQ0FBcUI7WUFDckIseUNBQWtCO1lBQ2xCLHlDQUFrQjtZQUNsQiwrQ0FBcUI7WUFDckIsdUNBQWlCO1lBQ2pCLCtDQUFxQjtZQUNyQix1Q0FBaUI7WUFDakIsa0RBQXNCO1lBQ3RCLDhCQUFhO1lBQ2Isa0NBQWU7WUFDZixnQ0FBYztZQUNkLGdDQUFjO1lBQ2Qsb0RBQXVCO1NBQ3hCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsZ0NBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFDLEtBQUssRUFBRSxhQUFhLEVBQUMsQ0FBQztZQUM1RCxxQkFBWSxDQUFDLE9BQU8sQ0FDaEIsU0FBUyxDQUNaO1lBQ0QsaUJBQVU7WUFDVixtQkFBVztTQUNWO1FBQ0QsU0FBUyxFQUFFLEVBQUU7UUFDYixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO0tBQzFCLENBQUM7R0FDVyxTQUFTLENBQUk7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9ICAgZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZWFkZXJMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyL2hlYWRlci1sb2dpbi9oZWFkZXItbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IEhlYWRlckxvZ29Db21wb25lbnQgfSBmcm9tICcuL2hlYWRlci9oZWFkZXItbG9nby9oZWFkZXItbG9nby5jb21wb25lbnQnO1xuaW1wb3J0IHsgSGVhZGVyTmF2Q29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIvaGVhZGVyLW5hdi9oZWFkZXItbmF2LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZWFkZXJNb2JpbGVNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIvaGVhZGVyLW1vYmlsZS1tZW51L2hlYWRlci1tb2JpbGUtbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSGVhZGVyTW9iaWxlSGFtYnVyZ2VyQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIvaGVhZGVyLW1vYmlsZS1oYW1idXJnZXIvaGVhZGVyLW1vYmlsZS1oYW1idXJnZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVwYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZS9wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZvb3RlclNvY2lhbENvbXBvbmVudCB9IGZyb20gJy4vZm9vdGVyL2Zvb3Rlci1zb2NpYWwvZm9vdGVyLXNvY2lhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9vdGVyTmF2Q29tcG9uZW50IH0gZnJvbSAnLi9mb290ZXIvZm9vdGVyLW5hdi9mb290ZXItbmF2LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdlU3RhY2tDb21wb25lbnQgfSBmcm9tICcuL3BhZ2UvcGFnZS1zdGFjay9wYWdlLXN0YWNrLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdlTG9jYXRpb25Db21wb25lbnQgfSBmcm9tICcuL3BhZ2UvcGFnZS1sb2NhdGlvbi9wYWdlLWxvY2F0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdlTGlzdENvbXBvbmVudCB9IGZyb20gJy4vcGFnZS9wYWdlLWxpc3QvcGFnZS1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdlTWFya2Rvd25Db21wb25lbnQgfSBmcm9tICcuL3BhZ2UvcGFnZS1tYXJrZG93bi9wYWdlLW1hcmtkb3duLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdlRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZS9wYWdlLWZvcm0vcGFnZS1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdlSW1hZ2VDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlL3BhZ2UtaW1hZ2UtY2FyZC9wYWdlLWltYWdlLWNhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IFBvc3RDb21wb25lbnQgfSBmcm9tICcuL3Bvc3QvcG9zdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnJvd3NlQ29tcG9uZW50IH0gZnJvbSAnLi9icm93c2UvYnJvd3NlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBWaWRlb0NvbXBvbmVudCB9IGZyb20gJy4vdmlkZW8vdmlkZW8uY29tcG9uZW50JztcbmltcG9ydCB7IFNoYXJlQ29tcG9uZW50IH0gZnJvbSAnLi92aWRlby9zaGFyZS9zaGFyZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnZUltYWdlU3RhY2tDb21wb25lbnQgfSBmcm9tICcuL3BhZ2UvcGFnZS1pbWFnZS1zdGFjay9wYWdlLWltYWdlLXN0YWNrLmNvbXBvbmVudCc7XG5cbmNvbnN0IGFwcFJvdXRlczogUm91dGVzID0gW1xuXHR7IHBhdGg6ICcnLCBjb21wb25lbnQ6IEhvbWVwYWdlQ29tcG9uZW50IH0sXG5cdHsgcGF0aDogJ2Vuam95LzpwZXJtYWxpbmsnLCBjb21wb25lbnQ6IFBvc3RDb21wb25lbnQgfSxcblx0eyBwYXRoOiAnYmxvZy86cGVybWFsaW5rJywgY29tcG9uZW50OiBQb3N0Q29tcG9uZW50IH0sXG5cdHsgcGF0aDogJ3dhdGNoJywgY29tcG9uZW50OiBCcm93c2VDb21wb25lbnQgfSxcblx0eyBwYXRoOiAnd2F0Y2gvOnBlcm1hbGluaycsIGNvbXBvbmVudDogVmlkZW9Db21wb25lbnQgfSxcblx0eyBwYXRoOiAnOnBlcm1hbGluaycsIGNvbXBvbmVudDogUGFnZUNvbXBvbmVudCB9LFxuXHR7IHBhdGg6ICc6cGFyZW50LzpwZXJtYWxpbmsnLCBjb21wb25lbnQ6IFBhZ2VDb21wb25lbnQgfSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuXHRcdEFwcENvbXBvbmVudCxcbiAgICBIZWFkZXJDb21wb25lbnQsXG4gICAgSGVhZGVyTG9naW5Db21wb25lbnQsXG4gICAgSGVhZGVyTG9nb0NvbXBvbmVudCxcbiAgICBIZWFkZXJOYXZDb21wb25lbnQsXG4gICAgSGVhZGVyTW9iaWxlTWVudUNvbXBvbmVudCxcbiAgICBIZWFkZXJNb2JpbGVIYW1idXJnZXJDb21wb25lbnQsXG4gICAgSG9tZXBhZ2VDb21wb25lbnQsXG4gICAgUGFnZUNvbXBvbmVudCxcbiAgICBGb290ZXJDb21wb25lbnQsXG4gICAgRm9vdGVyU29jaWFsQ29tcG9uZW50LFxuICAgIEZvb3Rlck5hdkNvbXBvbmVudCxcbiAgICBQYWdlU3RhY2tDb21wb25lbnQsXG4gICAgUGFnZUxvY2F0aW9uQ29tcG9uZW50LFxuICAgIFBhZ2VMaXN0Q29tcG9uZW50LFxuICAgIFBhZ2VNYXJrZG93bkNvbXBvbmVudCxcbiAgICBQYWdlRm9ybUNvbXBvbmVudCxcbiAgICBQYWdlSW1hZ2VDYXJkQ29tcG9uZW50LFxuICAgIFBvc3RDb21wb25lbnQsXG4gICAgQnJvd3NlQ29tcG9uZW50LFxuICAgIFZpZGVvQ29tcG9uZW50LFxuICAgIFNoYXJlQ29tcG9uZW50LFxuICAgIFBhZ2VJbWFnZVN0YWNrQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyTW9kdWxlLndpdGhTZXJ2ZXJUcmFuc2l0aW9uKHthcHBJZDogJ2ZsYXRsYW5kLXYyJ30pLFxuXHRcdFJvdXRlck1vZHVsZS5mb3JSb290KFxuICAgICAgYXBwUm91dGVzXG5cdFx0KSxcblx0XHRIdHRwTW9kdWxlLFxuXHRcdEZvcm1zTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtdLFxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==