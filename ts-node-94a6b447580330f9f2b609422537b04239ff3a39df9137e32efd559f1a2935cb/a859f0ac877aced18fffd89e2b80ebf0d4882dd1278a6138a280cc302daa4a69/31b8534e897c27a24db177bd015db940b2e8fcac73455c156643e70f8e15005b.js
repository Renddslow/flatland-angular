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
var markdown_1 = require("markdown");
var HomepageComponent = (function () {
    function HomepageComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.stuff = "header-nav";
    }
    HomepageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof router_1.NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
        var pageURI = "https://api.flatlandchurch.com/v2/pages";
        var params = {
            key: 'pk_e6afff4e5ad186e9ce389cc21c225'
        };
        this.http.request(pageURI + "/home", { params: params })
            .subscribe(function (res) {
            _this.page = res.json();
        });
    };
    HomepageComponent.prototype.toMarkdown = function (content) {
        return markdown_1.markdown.toHTML(content);
    };
    return HomepageComponent;
}());
HomepageComponent = __decorate([
    core_1.Component({
        selector: 'app-homepage',
        templateUrl: './homepage.component.html',
        styleUrls: ['./homepage.component.css']
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router, router_1.ActivatedRoute])
], HomepageComponent);
exports.HomepageComponent = HomepageComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYmx1ZWJlYXJkL2ZsYXRsYW5kY2h1cmNoLmNvbS9zcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC50cyIsInNvdXJjZXMiOlsiL2hvbWUvYmx1ZWJlYXJkL2ZsYXRsYW5kY2h1cmNoLmNvbS9zcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBd0U7QUFDeEUsc0NBQStDO0FBQy9DLHFDQUFvQztBQU9wQyxJQUFhLGlCQUFpQjtJQU01QiwyQkFBb0IsSUFBVSxFQUFVLE1BQWMsRUFBVSxLQUFxQjtRQUFqRSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBTHRGLFVBQUssR0FBRyxZQUFZLENBQUM7SUFLb0UsQ0FBQztJQUUxRixvQ0FBUSxHQUFSO1FBQUEsaUJBZUU7UUFkRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFHO1lBQzNCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFlBQVksc0JBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEMsTUFBTSxDQUFDO1lBQ1gsQ0FBQztZQUNELE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsSUFBSSxPQUFPLEdBQUcseUNBQXlDLENBQUM7UUFDeEQsSUFBSSxNQUFNLEdBQUc7WUFDWixHQUFHLEVBQUUsa0NBQWtDO1NBQ3ZDLENBQUM7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBSSxPQUFPLFVBQU8sRUFBRSxFQUFDLE1BQU0sUUFBQSxFQUFDLENBQUM7YUFDNUMsU0FBUyxDQUFDLFVBQUMsR0FBYTtZQUN4QixLQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRixzQ0FBVSxHQUFWLFVBQVcsT0FBTztRQUNqQixNQUFNLENBQUMsbUJBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVGLHdCQUFDO0FBQUQsQ0FBQyxBQTdCRCxJQTZCQztBQTdCWSxpQkFBaUI7SUFMN0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFdBQVcsRUFBRSwyQkFBMkI7UUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7S0FDeEMsQ0FBQztxQ0FPMEIsV0FBSSxFQUFrQixlQUFNLEVBQWlCLHVCQUFjO0dBTjFFLGlCQUFpQixDQTZCN0I7QUE3QlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIsIE5hdmlnYXRpb25FbmQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IG1hcmtkb3duIH0gZnJvbSAnbWFya2Rvd24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaG9tZXBhZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vaG9tZXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ob21lcGFnZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSG9tZXBhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRzdHVmZiA9IFwiaGVhZGVyLW5hdlwiO1xuXHRwZXJtYWxpbms6IHN0cmluZztcblx0c3ViOiBhbnk7XG5cdHBhZ2U6IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHt9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZSgoZXZ0KSA9PiB7XG4gICAgICAgIGlmICghKGV2dCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgfSk7XG5cdFx0bGV0IHBhZ2VVUkkgPSBcImh0dHBzOi8vYXBpLmZsYXRsYW5kY2h1cmNoLmNvbS92Mi9wYWdlc1wiO1xuXHRcdGxldCBwYXJhbXMgPSB7XG5cdFx0XHRrZXk6ICdwa19lNmFmZmY0ZTVhZDE4NmU5Y2UzODljYzIxYzIyNSdcblx0XHR9O1xuXHRcdHRoaXMuaHR0cC5yZXF1ZXN0KGAke3BhZ2VVUkl9L2hvbWVgLCB7cGFyYW1zfSlcblx0XHRcdC5zdWJzY3JpYmUoKHJlczogUmVzcG9uc2UpID0+IHtcblx0XHRcdFx0dGhpcy5wYWdlID0gcmVzLmpzb24oKTtcblx0XHRcdH0pO1xuICB9XG5cblx0dG9NYXJrZG93bihjb250ZW50KSB7XG5cdFx0cmV0dXJuIG1hcmtkb3duLnRvSFRNTChjb250ZW50KTtcblx0fVxuXG59XG4iXX0=