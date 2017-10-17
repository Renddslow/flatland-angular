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
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_2 = require("@angular/platform-browser");
var VideoComponent = (function () {
    function VideoComponent(http, route, sanitizer, router, meta, title) {
        var _this = this;
        this.http = http;
        this.route = route;
        this.sanitizer = sanitizer;
        this.router = router;
        this.meta = meta;
        this.title = title;
        this.recommended = [];
        this.modalOpen = false;
        this.openModal = function () {
            _this.modalOpen = true;
        };
    }
    VideoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof router_1.NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
        this.sub = this.route.params.subscribe(function (params) {
            var uri = "https://api.flatlandchurch.com/v1/watch/sermons/";
            _this.http.request("" + uri + params['permalink'])
                .subscribe(function (res) {
                _this.sermon = res.json()['sermon'][0];
                _this.sermon['videoURI'] = _this.sanitizer.bypassSecurityTrustResourceUrl("https://player.vimeo.com/video/" + _this.sermon['video']);
                _this.title.setTitle(_this.sermon['title'] + '| Flatland Church');
                _this.meta.addTags([
                    { name: 'description', content: _this.sermon['description'] },
                    { property: 'og:url', content: "https://flatlandchurch.com/watch/" + _this.sermon['permalink'] },
                    { property: 'og:image', content: _this.sermon['image'] },
                    { name: 'twitter:title', content: _this.sermon['title'] },
                    { name: 'twitter:description', content: _this.sermon['description'] },
                    { name: 'twitter:image', content: _this.sermon['image'] },
                    { property: 'og:title', content: _this.sermon['title'] },
                    { property: 'place:location:latitude', content: '41.3039152' },
                    { property: 'place:location:longitude', content: '-96.1377482' }
                ]);
            });
        });
    };
    return VideoComponent;
}());
VideoComponent = __decorate([
    core_1.Component({
        selector: 'app-video',
        templateUrl: './video.component.html',
        styleUrls: ['./video.component.css']
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.ActivatedRoute, platform_browser_1.DomSanitizer, router_1.Router, platform_browser_2.Meta, platform_browser_2.Title])
], VideoComponent);
exports.VideoComponent = VideoComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYmx1ZWJlYXJkL2ZsYXRsYW5kY2h1cmNoLmNvbS9zcmMvYXBwL3ZpZGVvL3ZpZGVvLmNvbXBvbmVudC50cyIsInNvdXJjZXMiOlsiL2hvbWUvYmx1ZWJlYXJkL2ZsYXRsYW5kY2h1cmNoLmNvbS9zcmMvYXBwL3ZpZGVvL3ZpZGVvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBd0U7QUFDeEUsc0NBQStDO0FBQy9DLDhEQUF5RDtBQUN6RCw4REFBd0Q7QUFPeEQsSUFBYSxjQUFjO0lBT3pCLHdCQUFvQixJQUFVLEVBQVUsS0FBcUIsRUFBVSxTQUF1QixFQUFVLE1BQWMsRUFBVSxJQUFVLEVBQVUsS0FBWTtRQUFoSyxpQkFBcUs7UUFBakosU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUpqSyxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUVqQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBaUNsQixjQUFTLEdBQUc7WUFDWCxLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN2QixDQUFDLENBQUE7SUFqQ29LLENBQUM7SUFFckssaUNBQVEsR0FBUjtRQUFBLGlCQTJCQztRQTFCRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFHO1lBQzNCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFlBQVksc0JBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEMsTUFBTSxDQUFDO1lBQ1gsQ0FBQztZQUNELE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQzVDLElBQUksR0FBRyxHQUFHLGtEQUFrRCxDQUFDO1lBQzdELEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUcsQ0FBQztpQkFDL0MsU0FBUyxDQUFDLFVBQUMsR0FBYTtnQkFDeEIsS0FBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLEtBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyw4QkFBOEIsQ0FBQyxvQ0FBa0MsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUcsQ0FBQyxDQUFDO2dCQUNsSSxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLG1CQUFtQixDQUFDLENBQUM7Z0JBQ2hFLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO29CQUNqQixFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUU7b0JBQzVELEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsc0NBQW9DLEtBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFHLEVBQUU7b0JBQy9GLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtvQkFDdkQsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUN4RCxFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRSxPQUFPLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBRTtvQkFDcEUsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUN4RCxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLEtBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ3ZELEVBQUUsUUFBUSxFQUFFLHlCQUF5QixFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUU7b0JBQzlELEVBQUUsUUFBUSxFQUFFLDBCQUEwQixFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUU7aUJBQ2hFLENBQUMsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDSCxDQUFDO0lBTUgscUJBQUM7QUFBRCxDQUFDLEFBMUNELElBMENDO0FBMUNZLGNBQWM7SUFMMUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7S0FDckMsQ0FBQztxQ0FRMEIsV0FBSSxFQUFpQix1QkFBYyxFQUFxQiwrQkFBWSxFQUFrQixlQUFNLEVBQWdCLHVCQUFJLEVBQWlCLHdCQUFLO0dBUHJKLGNBQWMsQ0EwQzFCO0FBMUNZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIsIE5hdmlnYXRpb25FbmQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgTWV0YSwgVGl0bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdmlkZW8nLFxuICB0ZW1wbGF0ZVVybDogJy4vdmlkZW8uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi92aWRlby5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVmlkZW9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRzdWI6IGFueTtcblx0c2VybW9uOiBvYmplY3Q7XG5cdHJlY29tbWVuZGVkID0gW107XG5cblx0bW9kYWxPcGVuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplciwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBtZXRhOiBNZXRhLCBwcml2YXRlIHRpdGxlOiBUaXRsZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG5cdFx0dGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZSgoZXZ0KSA9PiB7XG4gICAgICAgIGlmICghKGV2dCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgfSk7XG5cdFx0dGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcblx0XHRcdGxldCB1cmkgPSBcImh0dHBzOi8vYXBpLmZsYXRsYW5kY2h1cmNoLmNvbS92MS93YXRjaC9zZXJtb25zL1wiO1xuXHRcdFx0dGhpcy5odHRwLnJlcXVlc3QoYCR7dXJpfSR7cGFyYW1zWydwZXJtYWxpbmsnXX1gKVxuXHRcdFx0XHQuc3Vic2NyaWJlKChyZXM6IFJlc3BvbnNlKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5zZXJtb24gPSByZXMuanNvbigpWydzZXJtb24nXVswXTtcblx0XHRcdFx0XHR0aGlzLnNlcm1vblsndmlkZW9VUkknXSA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybChgaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLyR7dGhpcy5zZXJtb25bJ3ZpZGVvJ119YCk7XG5cdFx0XHRcdFx0dGhpcy50aXRsZS5zZXRUaXRsZSh0aGlzLnNlcm1vblsndGl0bGUnXSArICd8IEZsYXRsYW5kIENodXJjaCcpO1xuXHRcdFx0XHRcdHRoaXMubWV0YS5hZGRUYWdzKFtcblx0XHRcdFx0XHRcdHsgbmFtZTogJ2Rlc2NyaXB0aW9uJywgY29udGVudDogdGhpcy5zZXJtb25bJ2Rlc2NyaXB0aW9uJ10gfSxcblx0XHRcdFx0XHRcdHsgcHJvcGVydHk6ICdvZzp1cmwnLCBjb250ZW50OiBgaHR0cHM6Ly9mbGF0bGFuZGNodXJjaC5jb20vd2F0Y2gvJHt0aGlzLnNlcm1vblsncGVybWFsaW5rJ119YCB9LFxuXHRcdFx0XHRcdFx0eyBwcm9wZXJ0eTogJ29nOmltYWdlJywgY29udGVudDogdGhpcy5zZXJtb25bJ2ltYWdlJ10gfSxcblx0XHRcdFx0XHRcdHsgbmFtZTogJ3R3aXR0ZXI6dGl0bGUnLCBjb250ZW50OiB0aGlzLnNlcm1vblsndGl0bGUnXSB9LFxuXHRcdFx0XHRcdFx0eyBuYW1lOiAndHdpdHRlcjpkZXNjcmlwdGlvbicsIGNvbnRlbnQ6IHRoaXMuc2VybW9uWydkZXNjcmlwdGlvbiddIH0sXG5cdFx0XHRcdFx0XHR7IG5hbWU6ICd0d2l0dGVyOmltYWdlJywgY29udGVudDogdGhpcy5zZXJtb25bJ2ltYWdlJ10gfSxcblx0XHRcdFx0XHRcdHsgcHJvcGVydHk6ICdvZzp0aXRsZScsIGNvbnRlbnQ6IHRoaXMuc2VybW9uWyd0aXRsZSddIH0sXG5cdFx0XHRcdFx0XHR7IHByb3BlcnR5OiAncGxhY2U6bG9jYXRpb246bGF0aXR1ZGUnLCBjb250ZW50OiAnNDEuMzAzOTE1MicgfSxcblx0XHRcdFx0XHRcdHsgcHJvcGVydHk6ICdwbGFjZTpsb2NhdGlvbjpsb25naXR1ZGUnLCBjb250ZW50OiAnLTk2LjEzNzc0ODInIH1cblx0XHRcdFx0XHRdKTtcblx0XHRcdFx0fSk7XG5cdFx0fSk7XG4gIH1cblxuXHRvcGVuTW9kYWwgPSAoKSA9PiB7XG5cdFx0dGhpcy5tb2RhbE9wZW4gPSB0cnVlO1xuXHR9XG5cbn1cbiJdfQ==