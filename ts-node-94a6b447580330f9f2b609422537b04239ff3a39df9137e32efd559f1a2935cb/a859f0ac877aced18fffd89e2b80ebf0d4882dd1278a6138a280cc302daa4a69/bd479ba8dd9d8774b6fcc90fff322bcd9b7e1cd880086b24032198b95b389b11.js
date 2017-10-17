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
var router_1 = require("@angular/router");
var markdown_1 = require("markdown");
var platform_browser_1 = require("@angular/platform-browser");
var PostComponent = (function () {
    function PostComponent(http, route, router, meta, title) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.meta = meta;
        this.title = title;
        this.pageData = {
            title: null,
            callToAction: {
                label: null,
                uri: null
            },
            content: null,
            metaFields: [],
            jumbotronImage: null
        };
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof router_1.NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
        this.sub = this.route.params.subscribe(function (params) {
            if (_this.route.toString().includes("enjoy")) {
                _this.http.request("https://api.flatlandchurch.com/v1/events/" + params['permalink'])
                    .subscribe(function (res) {
                    var data = res.json();
                    // mapping
                    _this.pageData.title = data.title;
                    if (data.link != "") {
                        _this.pageData.callToAction.label = "Register";
                        _this.pageData.callToAction.uri = data.link;
                    }
                    _this.pageData.metaFields = [data.location, data.date];
                    if (data.price != "Free") {
                        _this.pageData.metaFields.push(data.price);
                    }
                    _this.pageData.content = data.description;
                    _this.pageData.jumbotronImage = data.image;
                    _this.title.setTitle(data.title);
                    _this.meta.addTags([
                        { name: 'description', content: data.description },
                        { property: 'og:url', content: "https://flatlandchurch.com/enjoy/" + params['permalink'] },
                        { property: 'og:image', content: data.image },
                        { name: 'twitter:title', content: data.title },
                        { name: 'twitter:description', content: data.description },
                        { name: 'twitter:image', content: data.image },
                        { property: 'og:title', content: data.title },
                        { property: 'place:location:latitude', content: '41.3039152' },
                        { property: 'place:location:longitude', content: '-96.1377482' }
                    ]);
                });
            }
            else if (_this.route.toString().includes("blog")) {
                _this.http.request("https://api.flatlandchurch.com/v1/blog/post/" + params['permalink'])
                    .subscribe(function (res) {
                    var data = res.json();
                    _this.pageData.title = data.title;
                    _this.pageData.jumbotronImage = data.image;
                    _this.pageData.content = data.text;
                    _this.pageData.metaFields = [data.author, data.date_published];
                    _this.title.setTitle(data.title);
                    _this.meta.addTags([
                        { property: 'og:url', content: "https://flatlandchurch.com/blog/" + data.permalink },
                        { name: 'twitter:title', content: data.title },
                        { property: 'og:title', content: data.title },
                        { property: 'place:location:latitude', content: '41.3039152' },
                        { property: 'place:location:longitude', content: '-96.1377482' }
                    ]);
                });
            }
        });
    };
    PostComponent.prototype.toMarkdown = function (content) {
        return markdown_1.markdown.toHTML(content);
    };
    return PostComponent;
}());
PostComponent = __decorate([
    core_1.Component({
        selector: 'app-post',
        templateUrl: './post.component.html',
        styleUrls: ['./post.component.css']
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.ActivatedRoute, router_1.Router, platform_browser_1.Meta, platform_browser_1.Title])
], PostComponent);
exports.PostComponent = PostComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYmx1ZWJlYXJkL2ZsYXRsYW5kY2h1cmNoLmNvbS9zcmMvYXBwL3Bvc3QvcG9zdC5jb21wb25lbnQudHMiLCJzb3VyY2VzIjpbIi9ob21lL2JsdWViZWFyZC9mbGF0bGFuZGNodXJjaC5jb20vc3JjL2FwcC9wb3N0L3Bvc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXlEO0FBQ3pELHNDQUErQztBQUMvQywwQ0FBeUU7QUFDekUscUNBQW9DO0FBQ3BDLDhEQUF3RDtBQU94RCxJQUFhLGFBQWE7SUFleEIsdUJBQW9CLElBQVUsRUFBVSxLQUFxQixFQUFVLE1BQWMsRUFBVSxJQUFVLEVBQVUsS0FBWTtRQUEzRyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQU87UUFYaEksYUFBUSxHQUFHO1lBQ1YsS0FBSyxFQUFFLElBQUk7WUFDWCxZQUFZLEVBQUU7Z0JBQ2IsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsR0FBRyxFQUFFLElBQUk7YUFDVDtZQUNELE9BQU8sRUFBRSxJQUFJO1lBQ2IsVUFBVSxFQUFFLEVBQUU7WUFDZCxjQUFjLEVBQUUsSUFBSTtTQUNwQixDQUFDO0lBRWtJLENBQUM7SUFFcEksZ0NBQVEsR0FBUjtRQUFBLGlCQXdEQztRQXZERCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFHO1lBQzNCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFlBQVksc0JBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEMsTUFBTSxDQUFDO1lBQ1gsQ0FBQztZQUNELE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO1FB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QUFBRCxDQUFDLEFBL0VELElBK0VDO0FBL0VZLGFBQWE7SUFMekIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSx1QkFBdUI7UUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7S0FDcEMsQ0FBQztxQ0FnQjBCLFdBQUksRUFBaUIsdUJBQWMsRUFBa0IsZUFBTSxFQUFnQix1QkFBSSxFQUFpQix3QkFBSztHQWZwSCxhQUFhLENBK0V6QjtBQS9FWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIsIE5hdmlnYXRpb25FbmQgIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IG1hcmtkb3duIH0gZnJvbSAnbWFya2Rvd24nO1xuaW1wb3J0IHsgTWV0YSwgVGl0bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcG9zdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wb3N0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcG9zdC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUG9zdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0c3ViOiBhbnk7XG5cblx0cGFnZURhdGEgPSB7XG5cdFx0dGl0bGU6IG51bGwsXG5cdFx0Y2FsbFRvQWN0aW9uOiB7XG5cdFx0XHRsYWJlbDogbnVsbCxcblx0XHRcdHVyaTogbnVsbFxuXHRcdH0sXG5cdFx0Y29udGVudDogbnVsbCxcblx0XHRtZXRhRmllbGRzOiBbXSxcblx0XHRqdW1ib3Ryb25JbWFnZTogbnVsbFxuXHR9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgbWV0YTogTWV0YSwgcHJpdmF0ZSB0aXRsZTogVGl0bGUpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuXHRcdHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoKGV2dCkgPT4ge1xuICAgICAgICBpZiAoIShldnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgIH0pO1xuXHRcdHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG5cdFx0XHRpZiAodGhpcy5yb3V0ZS50b1N0cmluZygpLmluY2x1ZGVzKFwiZW5qb3lcIikpIHtcblx0XHRcdFx0dGhpcy5odHRwLnJlcXVlc3QoYGh0dHBzOi8vYXBpLmZsYXRsYW5kY2h1cmNoLmNvbS92MS9ldmVudHMvJHtwYXJhbXNbJ3Blcm1hbGluayddfWApXG5cdFx0XHRcdFx0LnN1YnNjcmliZSgocmVzOiBSZXNwb25zZSkgPT4ge1xuXHRcdFx0XHRcdFx0bGV0IGRhdGEgPSByZXMuanNvbigpO1xuXHRcdFx0XHRcdFx0Ly8gbWFwcGluZ1xuXHRcdFx0XHRcdFx0dGhpcy5wYWdlRGF0YS50aXRsZSA9IGRhdGEudGl0bGU7XG5cdFx0XHRcdFx0XHRpZiAoZGF0YS5saW5rICE9IFwiXCIpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5wYWdlRGF0YS5jYWxsVG9BY3Rpb24ubGFiZWwgPSBcIlJlZ2lzdGVyXCI7XG5cdFx0XHRcdFx0XHRcdHRoaXMucGFnZURhdGEuY2FsbFRvQWN0aW9uLnVyaSA9IGRhdGEubGluaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHRoaXMucGFnZURhdGEubWV0YUZpZWxkcyA9IFtkYXRhLmxvY2F0aW9uLCBkYXRhLmRhdGVdO1xuXHRcdFx0XHRcdFx0aWYgKGRhdGEucHJpY2UgIT0gXCJGcmVlXCIpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5wYWdlRGF0YS5tZXRhRmllbGRzLnB1c2goZGF0YS5wcmljZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR0aGlzLnBhZ2VEYXRhLmNvbnRlbnQgPSBkYXRhLmRlc2NyaXB0aW9uO1xuXHRcdFx0XHRcdFx0dGhpcy5wYWdlRGF0YS5qdW1ib3Ryb25JbWFnZSA9IGRhdGEuaW1hZ2U7XG5cdFx0XHRcdFx0XHR0aGlzLnRpdGxlLnNldFRpdGxlKGRhdGEudGl0bGUpO1xuXHRcdFx0XHRcdFx0dGhpcy5tZXRhLmFkZFRhZ3MoW1xuXHRcdFx0XHRcdFx0XHR7IG5hbWU6ICdkZXNjcmlwdGlvbicsIGNvbnRlbnQ6IGRhdGEuZGVzY3JpcHRpb24gfSxcblx0XHRcdFx0XHRcdFx0eyBwcm9wZXJ0eTogJ29nOnVybCcsIGNvbnRlbnQ6IGBodHRwczovL2ZsYXRsYW5kY2h1cmNoLmNvbS9lbmpveS8ke3BhcmFtc1sncGVybWFsaW5rJ119YCB9LFxuXHRcdFx0XHRcdFx0XHR7IHByb3BlcnR5OiAnb2c6aW1hZ2UnLCBjb250ZW50OiBkYXRhLmltYWdlIH0sXG5cdFx0XHRcdFx0XHRcdHsgbmFtZTogJ3R3aXR0ZXI6dGl0bGUnLCBjb250ZW50OiBkYXRhLnRpdGxlIH0sXG5cdFx0XHRcdFx0XHRcdHsgbmFtZTogJ3R3aXR0ZXI6ZGVzY3JpcHRpb24nLCBjb250ZW50OiBkYXRhLmRlc2NyaXB0aW9uIH0sXG5cdFx0XHRcdFx0XHRcdHsgbmFtZTogJ3R3aXR0ZXI6aW1hZ2UnLCBjb250ZW50OiBkYXRhLmltYWdlIH0sXG5cdFx0XHRcdFx0XHRcdHsgcHJvcGVydHk6ICdvZzp0aXRsZScsIGNvbnRlbnQ6IGRhdGEudGl0bGUgfSxcblx0XHRcdFx0XHRcdFx0eyBwcm9wZXJ0eTogJ3BsYWNlOmxvY2F0aW9uOmxhdGl0dWRlJywgY29udGVudDogJzQxLjMwMzkxNTInIH0sXG5cdFx0XHRcdFx0XHRcdHsgcHJvcGVydHk6ICdwbGFjZTpsb2NhdGlvbjpsb25naXR1ZGUnLCBjb250ZW50OiAnLTk2LjEzNzc0ODInIH1cblx0XHRcdFx0XHRcdF0pO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnJvdXRlLnRvU3RyaW5nKCkuaW5jbHVkZXMoXCJibG9nXCIpKSB7XG5cdFx0XHRcdHRoaXMuaHR0cC5yZXF1ZXN0KGBodHRwczovL2FwaS5mbGF0bGFuZGNodXJjaC5jb20vdjEvYmxvZy9wb3N0LyR7cGFyYW1zWydwZXJtYWxpbmsnXX1gKVxuXHRcdFx0XHRcdC5zdWJzY3JpYmUoKHJlczogUmVzcG9uc2UpID0+IHtcblx0XHRcdFx0XHRcdGxldCBkYXRhID0gcmVzLmpzb24oKTtcblx0XHRcdFx0XHRcdHRoaXMucGFnZURhdGEudGl0bGUgPSBkYXRhLnRpdGxlO1xuXHRcdFx0XHRcdFx0dGhpcy5wYWdlRGF0YS5qdW1ib3Ryb25JbWFnZSA9IGRhdGEuaW1hZ2U7XG5cdFx0XHRcdFx0XHR0aGlzLnBhZ2VEYXRhLmNvbnRlbnQgPSBkYXRhLnRleHQ7XG5cdFx0XHRcdFx0XHR0aGlzLnBhZ2VEYXRhLm1ldGFGaWVsZHMgPSBbZGF0YS5hdXRob3IsIGRhdGEuZGF0ZV9wdWJsaXNoZWRdO1xuXHRcdFx0XHRcdFx0dGhpcy50aXRsZS5zZXRUaXRsZShkYXRhLnRpdGxlKTtcblx0XHRcdFx0XHRcdHRoaXMubWV0YS5hZGRUYWdzKFtcblx0XHRcdFx0XHRcdFx0eyBwcm9wZXJ0eTogJ29nOnVybCcsIGNvbnRlbnQ6IGBodHRwczovL2ZsYXRsYW5kY2h1cmNoLmNvbS9ibG9nLyR7ZGF0YS5wZXJtYWxpbmt9YCB9LFxuXHRcdFx0XHRcdFx0XHR7IG5hbWU6ICd0d2l0dGVyOnRpdGxlJywgY29udGVudDogZGF0YS50aXRsZSB9LFxuXHRcdFx0XHRcdFx0XHR7IHByb3BlcnR5OiAnb2c6dGl0bGUnLCBjb250ZW50OiBkYXRhLnRpdGxlIH0sXG5cdFx0XHRcdFx0XHRcdHsgcHJvcGVydHk6ICdwbGFjZTpsb2NhdGlvbjpsYXRpdHVkZScsIGNvbnRlbnQ6ICc0MS4zMDM5MTUyJyB9LFxuXHRcdFx0XHRcdFx0XHR7IHByb3BlcnR5OiAncGxhY2U6bG9jYXRpb246bG9uZ2l0dWRlJywgY29udGVudDogJy05Ni4xMzc3NDgyJyB9XG5cdFx0XHRcdFx0XHRdKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcbiAgfVxuXG5cdHRvTWFya2Rvd24oY29udGVudCkge1xuXHRcdHJldHVybiBtYXJrZG93bi50b0hUTUwoY29udGVudCk7XG5cdH1cblxufVxuIl19