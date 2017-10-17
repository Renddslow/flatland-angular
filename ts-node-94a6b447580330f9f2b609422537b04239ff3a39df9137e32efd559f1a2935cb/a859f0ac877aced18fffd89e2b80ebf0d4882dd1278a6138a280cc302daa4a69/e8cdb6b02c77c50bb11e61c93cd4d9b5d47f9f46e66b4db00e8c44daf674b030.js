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
var PageLocationComponent = (function () {
    function PageLocationComponent() {
        this.scrollTo = function (location) {
            window.scroll(0, document.getElementById(location).offsetTop + 300);
        };
    }
    return PageLocationComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PageLocationComponent.prototype, "timeChange", void 0);
PageLocationComponent = __decorate([
    core_1.Component({
        selector: 'page-location',
        templateUrl: './page-location.component.html',
        styleUrls: ['./page-location.component.css']
    })
], PageLocationComponent);
exports.PageLocationComponent = PageLocationComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYmx1ZWJlYXJkL2ZsYXRsYW5kY2h1cmNoLmNvbS9zcmMvYXBwL3BhZ2UvcGFnZS1sb2NhdGlvbi9wYWdlLWxvY2F0aW9uLmNvbXBvbmVudC50cyIsInNvdXJjZXMiOlsiL2hvbWUvYmx1ZWJlYXJkL2ZsYXRsYW5kY2h1cmNoLmNvbS9zcmMvYXBwL3BhZ2UvcGFnZS1sb2NhdGlvbi9wYWdlLWxvY2F0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFpRDtBQU9qRCxJQUFhLHFCQUFxQjtJQUxsQztRQU9DLGFBQVEsR0FBRyxVQUFDLFFBQVE7WUFDbkIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDckUsQ0FBQyxDQUFBO0lBQ0YsQ0FBQztJQUFELDRCQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7QUFKUztJQUFSLFlBQUssRUFBRTs7eURBQW9CO0FBRGhCLHFCQUFxQjtJQUxqQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGVBQWU7UUFDekIsV0FBVyxFQUFFLGdDQUFnQztRQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztLQUM3QyxDQUFDO0dBQ1cscUJBQXFCLENBS2pDO0FBTFksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLWxvY2F0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2UtbG9jYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wYWdlLWxvY2F0aW9uLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQYWdlTG9jYXRpb25Db21wb25lbnQge1xuXHRASW5wdXQoKSB0aW1lQ2hhbmdlOiBzdHJpbmc7XG5cdHNjcm9sbFRvID0gKGxvY2F0aW9uKSA9PiB7XG5cdFx0d2luZG93LnNjcm9sbCgwLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsb2NhdGlvbikub2Zmc2V0VG9wICsgMzAwKTtcblx0fVxufVxuIl19