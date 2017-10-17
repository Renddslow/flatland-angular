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
var PageImageCardComponent = (function () {
    function PageImageCardComponent(http) {
        var _this = this;
        this.http = http;
        this.sermons = [];
        this.events = [];
        this.posts = [];
        this.page = 0;
        this.loadMore = function (event, type) {
            event.preventDefault();
            switch (type) {
                case "blog":
                    _this.getBlogPosts();
                    history.pushState(null, null, "/blog?page=" + (_this.page + 1));
                    break;
                case "watch":
                    _this.getSermons();
            }
        };
        this.getBlogPosts = function () {
            _this.http.request("https://api.flatlandchurch.com/v1/blog/posts?page=" + _this.page)
                .subscribe(function (res) {
                _this.posts = _this.posts.concat(res.json());
                _this.page += 1;
            });
        };
        this.getSermons = function () {
            _this.http.request("https://api.flatlandchurch.com/v1/watch/sermons?page=" + _this.page)
                .subscribe(function (res) {
                _this.sermons = _this.sermons.concat(res.json()['sermons']);
                _this.page += 1;
            });
        };
        this.getRecommendations = function (permalink) {
            _this.http.request("https://api.flatlandchurch.com/v1/watch/sermons")
                .subscribe(function (res) {
                _this.sermons.push(res.json()['sermons'][0]);
                _this.sermons.push(res.json()['sermons'][1]);
                _this.sermons.push(res.json()['sermons'][2]);
            });
        };
    }
    PageImageCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.type.includes("watch")) {
            this.getSermons();
        }
        else if (this.type.includes("recommended")) {
            this.getRecommendations("stuff");
        }
        else if (this.type.includes("enjoy")) {
            this.http.request("https://api.flatlandchurch.com/v1/events/")
                .subscribe(function (res) {
                _this.events = _this.events.concat(res.json()['events']);
            });
        }
        else if (this.type.includes("blog")) {
            this.getBlogPosts();
        }
    };
    return PageImageCardComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PageImageCardComponent.prototype, "type", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PageImageCardComponent.prototype, "permalink", void 0);
PageImageCardComponent = __decorate([
    core_1.Component({
        selector: 'page-image-card',
        templateUrl: './page-image-card.component.html',
        styleUrls: ['./page-image-card.component.css']
    }),
    __metadata("design:paramtypes", [http_1.Http])
], PageImageCardComponent);
exports.PageImageCardComponent = PageImageCardComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYmx1ZWJlYXJkL2ZsYXRsYW5kY2h1cmNoLmNvbS9zcmMvYXBwL3BhZ2UvcGFnZS1pbWFnZS1jYXJkL3BhZ2UtaW1hZ2UtY2FyZC5jb21wb25lbnQudHMiLCJzb3VyY2VzIjpbIi9ob21lL2JsdWViZWFyZC9mbGF0bGFuZGNodXJjaC5jb20vc3JjL2FwcC9wYWdlL3BhZ2UtaW1hZ2UtY2FyZC9wYWdlLWltYWdlLWNhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXlEO0FBQ3pELHNDQUErQztBQU8vQyxJQUFhLHNCQUFzQjtJQVdqQyxnQ0FBb0IsSUFBVTtRQUE5QixpQkFBa0M7UUFBZCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBTi9CLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUVYLFNBQUksR0FBVyxDQUFDLENBQUM7UUFtQmpCLGFBQVEsR0FBRyxVQUFDLEtBQUssRUFBRSxJQUFJO1lBQ3RCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixNQUFNLENBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNiLEtBQUssTUFBTTtvQkFDVixLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7b0JBQ3BCLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxpQkFBYyxLQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBRSxDQUFDLENBQUM7b0JBQzdELEtBQUssQ0FBQztnQkFDUCxLQUFLLE9BQU87b0JBQ1gsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3BCLENBQUM7UUFDRixDQUFDLENBQUE7UUFFRCxpQkFBWSxHQUFHO1lBQ2QsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsdURBQXFELEtBQUksQ0FBQyxJQUFNLENBQUM7aUJBQ2pGLFNBQVMsQ0FBQyxVQUFDLEdBQWE7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QUM7cUNBWTBCLFdBQUk7R0FYbkIsc0JBQXNCLENBa0VsQztBQWxFWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2UtaW1hZ2UtY2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdlLWltYWdlLWNhcmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wYWdlLWltYWdlLWNhcmQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VJbWFnZUNhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBJbnB1dCgpIHR5cGU6IHN0cmluZztcblx0QElucHV0KCkgcGVybWFsaW5rPzogc3RyaW5nO1xuXG5cdHNlcm1vbnMgPSBbXTtcblx0ZXZlbnRzID0gW107XG5cdHBvc3RzID0gW107XG5cblx0cGFnZTogbnVtYmVyID0gMDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG5cdFx0aWYgKHRoaXMudHlwZS5pbmNsdWRlcyhcIndhdGNoXCIpKSB7XG5cdFx0XHR0aGlzLmdldFNlcm1vbnMoKTtcblx0XHR9IGVsc2UgaWYgKHRoaXMudHlwZS5pbmNsdWRlcyhcInJlY29tbWVuZGVkXCIpKSB7XG5cdFx0XHR0aGlzLmdldFJlY29tbWVuZGF0aW9ucyhcInN0dWZmXCIpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy50eXBlLmluY2x1ZGVzKFwiZW5qb3lcIikpIHtcblx0XHRcdHRoaXMuaHR0cC5yZXF1ZXN0KGBodHRwczovL2FwaS5mbGF0bGFuZGNodXJjaC5jb20vdjEvZXZlbnRzL2ApXG5cdFx0XHRcdC5zdWJzY3JpYmUoKHJlczogUmVzcG9uc2UpID0+IHtcblx0XHRcdFx0XHR0aGlzLmV2ZW50cyA9IHRoaXMuZXZlbnRzLmNvbmNhdChyZXMuanNvbigpWydldmVudHMnXSk7XG5cdFx0XHRcdH0pO1xuXHRcdH0gZWxzZSBpZiAodGhpcy50eXBlLmluY2x1ZGVzKFwiYmxvZ1wiKSkge1xuXHRcdFx0dGhpcy5nZXRCbG9nUG9zdHMoKTtcblx0XHR9XG4gIH1cblxuXHRsb2FkTW9yZSA9IChldmVudCwgdHlwZSkgPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0c3dpdGNoKHR5cGUpIHtcblx0XHRcdGNhc2UgXCJibG9nXCI6XG5cdFx0XHRcdHRoaXMuZ2V0QmxvZ1Bvc3RzKCk7XG5cdFx0XHRcdGhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIGAvYmxvZz9wYWdlPSR7dGhpcy5wYWdlICsgMX1gKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwid2F0Y2hcIjpcblx0XHRcdFx0dGhpcy5nZXRTZXJtb25zKCk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0QmxvZ1Bvc3RzID0gKCkgPT4ge1xuXHRcdHRoaXMuaHR0cC5yZXF1ZXN0KGBodHRwczovL2FwaS5mbGF0bGFuZGNodXJjaC5jb20vdjEvYmxvZy9wb3N0cz9wYWdlPSR7dGhpcy5wYWdlfWApXG5cdFx0XHQuc3Vic2NyaWJlKChyZXM6IFJlc3BvbnNlKSA9PiB7XG5cdFx0XHRcdHRoaXMucG9zdHMgPSB0aGlzLnBvc3RzLmNvbmNhdChyZXMuanNvbigpKTtcblx0XHRcdFx0dGhpcy5wYWdlICs9IDE7XG5cdFx0XHR9KTtcblx0fTtcblxuXHRnZXRTZXJtb25zID0gKCkgPT4ge1xuXHRcdHRoaXMuaHR0cC5yZXF1ZXN0KGBodHRwczovL2FwaS5mbGF0bGFuZGNodXJjaC5jb20vdjEvd2F0Y2gvc2VybW9ucz9wYWdlPSR7dGhpcy5wYWdlfWApXG5cdFx0XHQuc3Vic2NyaWJlKChyZXM6IFJlc3BvbnNlKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2VybW9ucyA9IHRoaXMuc2VybW9ucy5jb25jYXQocmVzLmpzb24oKVsnc2VybW9ucyddKTtcblx0XHRcdFx0dGhpcy5wYWdlICs9IDE7XG5cdFx0XHR9KTtcblx0fTtcblxuXG5cdGdldFJlY29tbWVuZGF0aW9ucyA9IChwZXJtYWxpbmspID0+IHtcblx0XHR0aGlzLmh0dHAucmVxdWVzdChgaHR0cHM6Ly9hcGkuZmxhdGxhbmRjaHVyY2guY29tL3YxL3dhdGNoL3Nlcm1vbnNgKVxuXHRcdFx0LnN1YnNjcmliZSgocmVzOiBSZXNwb25zZSkgPT4ge1xuXHRcdFx0XHR0aGlzLnNlcm1vbnMucHVzaChyZXMuanNvbigpWydzZXJtb25zJ11bMF0pO1xuXHRcdFx0XHR0aGlzLnNlcm1vbnMucHVzaChyZXMuanNvbigpWydzZXJtb25zJ11bMV0pO1xuXHRcdFx0XHR0aGlzLnNlcm1vbnMucHVzaChyZXMuanNvbigpWydzZXJtb25zJ11bMl0pO1xuXHRcdFx0fSk7XG5cdH1cblxufVxuIl19