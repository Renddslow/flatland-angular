"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var platform_browser_1 = require("@angular/platform-browser");
var BrowseComponent = (function () {
    function BrowseComponent(http, meta, title) {
        this.http = http;
        this.meta = meta;
        this.title = title;
        this.page = 0;
        this.latestSermon = {};
        this.navigation = [
            {
                label: 'Sermons',
                uri: ['/watch']
            }
        ];
        title.setTitle('Browse weekly sermons from Flatland Church');
        meta.addTags([
            { name: 'description', content: 'Every week at Flatland Church we teach a message write out of God\'s Word. Explore our full archive of teachings.' },
            { property: 'og:url', content: 'https://flatlandchurch.com/watch' },
            { name: 'twitter:title', content: 'Browse weekly sermons from Flatland Church' },
            { name: 'twitter:description', content: 'Every week at Flatland Church we teach a message write out of God\'s Word. Explore our full archive of teachings.' },
            { property: 'og:title', content: 'Browse weekly sermons from Flatland Church' },
            { property: 'place:location:latitude', content: '41.3039152' },
            { property: 'place:location:longitude', content: '-96.1377482' }
        ]);
    }
    BrowseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.request("https://api.flatlandchurch.com/v1/watch/sermons?page=" + this.page)
            .subscribe(function (res) {
            _this.latestSermon = res.json()['sermons'][0];
        });
    };
    return BrowseComponent;
}());
BrowseComponent = __decorate([
    core_1.Component({
        selector: 'app-browse',
        templateUrl: './browse.component.html',
        styleUrls: ['./browse.component.css']
    }),
    __metadata("design:paramtypes", [http_1.Http, platform_browser_1.Meta, platform_browser_1.Title])
], BrowseComponent);
exports.BrowseComponent = BrowseComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYmx1ZWJlYXJkL2ZsYXRsYW5kY2h1cmNoLmNvbS9zcmMvYXBwL2Jyb3dzZS9icm93c2UuY29tcG9uZW50LnRzIiwic291cmNlcyI6WyIvaG9tZS9ibHVlYmVhcmQvZmxhdGxhbmRjaHVyY2guY29tL3NyYy9hcHAvYnJvd3NlL2Jyb3dzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBa0Q7QUFDbEQsc0NBQStDO0FBQy9DLDhEQUF3RDtBQU94RCxJQUFhLGVBQWU7SUFZMUIseUJBQW9CLElBQVUsRUFBVSxJQUFVLEVBQVUsS0FBWTtRQUFwRCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQU87UUFWekUsU0FBSSxHQUFHLENBQUMsQ0FBQztRQUVULGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQzFCLGVBQVUsR0FBRztZQUNaO2dCQUNDLEtBQUssRUFBRSxTQUFTO2dCQUNoQixHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUM7YUFDZjtTQUNELENBQUM7UUFHRCxLQUFLLENBQUMsUUFBUSxDQUFDLDRDQUE0QyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNaLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsbUhBQW1ILEVBQUU7WUFDckosRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRTtZQUNuRSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLDRDQUE0QyxFQUFFO1lBQ2hGLEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxtSEFBbUgsRUFBRTtZQUM3SixFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLDRDQUE0QyxFQUFFO1lBQy9FLEVBQUUsUUFBUSxFQUFFLHlCQUF5QixFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUU7WUFDOUQsRUFBRSxRQUFRLEVBQUUsMEJBQTBCLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRTtTQUNoRSxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUEsa0NBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsMERBQXdELElBQUksQ0FBQyxJQUFNLENBQUM7YUFDcEYsU0FBUyxDQUFDLFVBQUMsR0FBYTtZQUN4QixLQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFSCxzQkFBQztBQUFELENBQUMsQUFoQ0QsSUFnQ0M7QUFoQ1ksZUFBZTtJQUwzQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFlBQVk7UUFDdEIsV0FBVyxFQUFFLHlCQUF5QjtRQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztLQUN0QyxDQUFDO3FDQWEwQixXQUFJLEVBQWdCLHVCQUFJLEVBQWlCLHdCQUFLO0dBWjdELGVBQWUsQ0FnQzNCO0FBaENZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBNZXRhLCBUaXRsZSB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1icm93c2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vYnJvd3NlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnJvd3NlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCcm93c2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdHBhZ2UgPSAwO1xuXG5cdGxhdGVzdFNlcm1vbjogb2JqZWN0ID0ge307XG5cdG5hdmlnYXRpb24gPSBbXG5cdFx0e1xuXHRcdFx0bGFiZWw6ICdTZXJtb25zJyxcblx0XHRcdHVyaTogWycvd2F0Y2gnXVxuXHRcdH1cblx0XTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgbWV0YTogTWV0YSwgcHJpdmF0ZSB0aXRsZTogVGl0bGUpIHtcblx0XHR0aXRsZS5zZXRUaXRsZSgnQnJvd3NlIHdlZWtseSBzZXJtb25zIGZyb20gRmxhdGxhbmQgQ2h1cmNoJyk7XG5cdFx0bWV0YS5hZGRUYWdzKFtcblx0XHRcdHsgbmFtZTogJ2Rlc2NyaXB0aW9uJywgY29udGVudDogJ0V2ZXJ5IHdlZWsgYXQgRmxhdGxhbmQgQ2h1cmNoIHdlIHRlYWNoIGEgbWVzc2FnZSB3cml0ZSBvdXQgb2YgR29kXFwncyBXb3JkLiBFeHBsb3JlIG91ciBmdWxsIGFyY2hpdmUgb2YgdGVhY2hpbmdzLicgfSxcblx0XHRcdHsgcHJvcGVydHk6ICdvZzp1cmwnLCBjb250ZW50OiAnaHR0cHM6Ly9mbGF0bGFuZGNodXJjaC5jb20vd2F0Y2gnIH0sXG5cdFx0XHR7IG5hbWU6ICd0d2l0dGVyOnRpdGxlJywgY29udGVudDogJ0Jyb3dzZSB3ZWVrbHkgc2VybW9ucyBmcm9tIEZsYXRsYW5kIENodXJjaCcgfSxcblx0XHRcdHsgbmFtZTogJ3R3aXR0ZXI6ZGVzY3JpcHRpb24nLCBjb250ZW50OiAnRXZlcnkgd2VlayBhdCBGbGF0bGFuZCBDaHVyY2ggd2UgdGVhY2ggYSBtZXNzYWdlIHdyaXRlIG91dCBvZiBHb2RcXCdzIFdvcmQuIEV4cGxvcmUgb3VyIGZ1bGwgYXJjaGl2ZSBvZiB0ZWFjaGluZ3MuJyB9LFxuXHRcdFx0eyBwcm9wZXJ0eTogJ29nOnRpdGxlJywgY29udGVudDogJ0Jyb3dzZSB3ZWVrbHkgc2VybW9ucyBmcm9tIEZsYXRsYW5kIENodXJjaCcgfSxcblx0XHRcdHsgcHJvcGVydHk6ICdwbGFjZTpsb2NhdGlvbjpsYXRpdHVkZScsIGNvbnRlbnQ6ICc0MS4zMDM5MTUyJyB9LFxuXHRcdFx0eyBwcm9wZXJ0eTogJ3BsYWNlOmxvY2F0aW9uOmxvbmdpdHVkZScsIGNvbnRlbnQ6ICctOTYuMTM3NzQ4MicgfVxuXHRcdF0pO1xuXHR9XG5cbiAgbmdPbkluaXQoKSB7XG5cdFx0dGhpcy5odHRwLnJlcXVlc3QoYGh0dHBzOi8vYXBpLmZsYXRsYW5kY2h1cmNoLmNvbS92MS93YXRjaC9zZXJtb25zP3BhZ2U9JHt0aGlzLnBhZ2V9YClcblx0XHRcdC5zdWJzY3JpYmUoKHJlczogUmVzcG9uc2UpID0+IHtcblx0XHRcdFx0dGhpcy5sYXRlc3RTZXJtb24gPSByZXMuanNvbigpWydzZXJtb25zJ11bMF07XG5cdFx0XHR9KTtcbiAgfVxuXG59XG4iXX0=