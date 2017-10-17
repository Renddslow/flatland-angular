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
var PageComponent = (function () {
    function PageComponent(http, route, router, meta, title) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.meta = meta;
        this.title = title;
        this.timeChange = null;
        this.page = {};
    }
    PageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof router_1.NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
        var pageURI = "https://api.flatlandchurch.com/v2/pages/";
        var timeURI = "https://api.flatlandchurch.com/v1/times/changes";
        this.sub = this.route.params.subscribe(function (params) {
            if (params['parent']) {
                _this.permalink = params['parent'] + "/" + params['permalink'];
            }
            else {
                _this.permalink = params['permalink'];
            }
            _this.http.request("" + timeURI)
                .subscribe(function (res) {
                _this.timeChange = res.json().message;
            });
            var queryParams = {
                key: 'pk_e6afff4e5ad186e9ce389cc21c225'
            };
            _this.http.request("" + pageURI + _this.permalink, { params: queryParams })
                .subscribe(function (res) {
                _this.page = res.json();
                _this.title.setTitle(_this.page['meta']['title'] + ' | Flatland Church');
                _this.meta.addTags([
                    { name: 'description', content: _this.page['meta']['description'] },
                    { property: 'og:url', content: _this.page['meta']['canonical'] },
                    { property: 'og:image', content: _this.page['meta']['image'] },
                    { name: 'twitter:title', content: _this.page['meta']['title'] },
                    { name: 'twitter:description', content: _this.page['meta']['description'] },
                    { name: 'twitter:image', content: _this.page['meta']['image'] },
                    { property: 'og:title', content: _this.page['meta']['title'] },
                    { property: 'place:location:latitude', content: '41.3039152' },
                    { property: 'place:location:longitude', content: '-96.1377482' }
                ]);
            });
        });
    };
    return PageComponent;
}());
PageComponent = __decorate([
    core_1.Component({
        selector: 'app-page',
        templateUrl: './page.component.html',
        styleUrls: ['./page.component.css'],
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.ActivatedRoute, router_1.Router, platform_browser_1.Meta, platform_browser_1.Title])
], PageComponent);
exports.PageComponent = PageComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYmx1ZWJlYXJkL2ZsYXRsYW5kY2h1cmNoLmNvbS9zcmMvYXBwL3BhZ2UvcGFnZS5jb21wb25lbnQudHMiLCJzb3VyY2VzIjpbIi9ob21lL2JsdWViZWFyZC9mbGF0bGFuZGNodXJjaC5jb20vc3JjL2FwcC9wYWdlL3BhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF3RTtBQUN4RSxzQ0FBK0M7QUFDL0MsOERBQXdEO0FBT3hELElBQWEsYUFBYTtJQU14Qix1QkFBb0IsSUFBVSxFQUFVLEtBQXFCLEVBQVUsTUFBYyxFQUFVLElBQVUsRUFBVSxLQUFZO1FBQTNHLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUZoSSxlQUFVLEdBQVcsSUFBSSxDQUFDO1FBR3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFBO0lBQ2YsQ0FBQztJQUVBLGdDQUFRLEdBQVI7UUFBQSxpQkF1Q0M7UUF0Q0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsR0FBRztZQUMzQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxZQUFZLHNCQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xDLE1BQU0sQ0FBQztZQUNYLENBQUM7WUFDRCxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUN6QixDQUFDLENBQUMsQ0FBQztRQUNMLElBQUksT0FBTyxHQUFHLDBDQUEwQyxDQUFDO1FBQ3pELElBQUksT0FBTyxHQUFHLGlEQUFpRCxDQUFDO1FBQ2hFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FB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d0JBQUs7R0FOcEgsYUFBYSxDQW1EekI7QUFuRFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciwgTmF2aWdhdGlvbkVuZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgTWV0YSwgVGl0bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcGFnZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGFnZS5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRzdWI6IGFueTtcblx0cGVybWFsaW5rOiBzdHJpbmc7XG5cdHBhZ2U6IHt9O1xuXHR0aW1lQ2hhbmdlOiBzdHJpbmcgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgbWV0YTogTWV0YSwgcHJpdmF0ZSB0aXRsZTogVGl0bGUpIHtcblx0XHR0aGlzLnBhZ2UgPSB7fVxuXHR9XG5cbiAgbmdPbkluaXQoKSB7XG5cdFx0dGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZSgoZXZ0KSA9PiB7XG4gICAgICAgIGlmICghKGV2dCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgfSk7XG5cdFx0bGV0IHBhZ2VVUkkgPSBcImh0dHBzOi8vYXBpLmZsYXRsYW5kY2h1cmNoLmNvbS92Mi9wYWdlcy9cIjtcblx0XHRsZXQgdGltZVVSSSA9IFwiaHR0cHM6Ly9hcGkuZmxhdGxhbmRjaHVyY2guY29tL3YxL3RpbWVzL2NoYW5nZXNcIjtcblx0XHR0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuXHRcdFx0aWYgKHBhcmFtc1sncGFyZW50J10pIHtcblx0XHRcdFx0dGhpcy5wZXJtYWxpbmsgPSBgJHtwYXJhbXNbJ3BhcmVudCddfS8ke3BhcmFtc1sncGVybWFsaW5rJ119YFxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5wZXJtYWxpbmsgPSBwYXJhbXNbJ3Blcm1hbGluayddO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5odHRwLnJlcXVlc3QoYCR7dGltZVVSSX1gKVxuXHRcdFx0XHQuc3Vic2NyaWJlKChyZXM6IFJlc3BvbnNlKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy50aW1lQ2hhbmdlID0gcmVzLmpzb24oKS5tZXNzYWdlO1xuXHRcdFx0XHR9KTtcblx0XHRcdGxldCBxdWVyeVBhcmFtcyA9IHtcblx0XHRcdFx0a2V5OiAncGtfZTZhZmZmNGU1YWQxODZlOWNlMzg5Y2MyMWMyMjUnXG5cdFx0XHR9O1xuXHRcdFx0dGhpcy5odHRwLnJlcXVlc3QoYCR7cGFnZVVSSX0ke3RoaXMucGVybWFsaW5rfWAsIHtwYXJhbXM6IHF1ZXJ5UGFyYW1zfSlcblx0XHRcdFx0LnN1YnNjcmliZSgocmVzOiBSZXNwb25zZSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucGFnZSA9IHJlcy5qc29uKCk7XG5cdFx0XHRcdFx0dGhpcy50aXRsZS5zZXRUaXRsZSh0aGlzLnBhZ2VbJ21ldGEnXVsndGl0bGUnXSArICcgfCBGbGF0bGFuZCBDaHVyY2gnKTtcblx0XHRcdFx0XHR0aGlzLm1ldGEuYWRkVGFncyhbXG5cdFx0XHRcdFx0XHR7IG5hbWU6ICdkZXNjcmlwdGlvbicsIGNvbnRlbnQ6IHRoaXMucGFnZVsnbWV0YSddWydkZXNjcmlwdGlvbiddIH0sXG5cdFx0XHRcdFx0XHR7IHByb3BlcnR5OiAnb2c6dXJsJywgY29udGVudDogdGhpcy5wYWdlWydtZXRhJ11bJ2Nhbm9uaWNhbCddIH0sXG5cdFx0XHRcdFx0XHR7IHByb3BlcnR5OiAnb2c6aW1hZ2UnLCBjb250ZW50OiB0aGlzLnBhZ2VbJ21ldGEnXVsnaW1hZ2UnXSB9LFxuXHRcdFx0XHRcdFx0eyBuYW1lOiAndHdpdHRlcjp0aXRsZScsIGNvbnRlbnQ6IHRoaXMucGFnZVsnbWV0YSddWyd0aXRsZSddIH0sXG5cdFx0XHRcdFx0XHR7IG5hbWU6ICd0d2l0dGVyOmRlc2NyaXB0aW9uJywgY29udGVudDogdGhpcy5wYWdlWydtZXRhJ11bJ2Rlc2NyaXB0aW9uJ10gfSxcblx0XHRcdFx0XHRcdHsgbmFtZTogJ3R3aXR0ZXI6aW1hZ2UnLCBjb250ZW50OiB0aGlzLnBhZ2VbJ21ldGEnXVsnaW1hZ2UnXSB9LFxuXHRcdFx0XHRcdFx0eyBwcm9wZXJ0eTogJ29nOnRpdGxlJywgY29udGVudDogdGhpcy5wYWdlWydtZXRhJ11bJ3RpdGxlJ10gfSxcblx0XHRcdFx0XHRcdHsgcHJvcGVydHk6ICdwbGFjZTpsb2NhdGlvbjpsYXRpdHVkZScsIGNvbnRlbnQ6ICc0MS4zMDM5MTUyJyB9LFxuXHRcdFx0XHRcdFx0eyBwcm9wZXJ0eTogJ3BsYWNlOmxvY2F0aW9uOmxvbmdpdHVkZScsIGNvbnRlbnQ6ICctOTYuMTM3NzQ4MicgfVxuXHRcdFx0XHRcdF0pO1xuXHRcdFx0XHR9KTtcblx0XHR9KTtcbiAgfVxuXG59XG4iXX0=