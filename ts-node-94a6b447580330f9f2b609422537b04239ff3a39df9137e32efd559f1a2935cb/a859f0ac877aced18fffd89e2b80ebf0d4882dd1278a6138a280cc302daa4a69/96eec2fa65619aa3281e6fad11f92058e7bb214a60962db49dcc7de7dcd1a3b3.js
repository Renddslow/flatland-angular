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
var ShareComponent = (function () {
    function ShareComponent() {
        var _this = this;
        this.modalOpen = false;
        this.copyText = "Copy";
        this.buildFacebookURL = function (data) {
            var url = "https://www.facebook.com/dialog/feed?app_id=&";
            url += "picture=" + data['image'] + "&display=popup";
            url += "caption=https%3A%2F%2Fflatlandchurch.com%2Fwatch%2F" + data['permalink'] + "&";
            url += 'redirect_uri=https%3A%2F%2Fflatlandchurch.com&link=https%3A%2F%2Fflatlandchurch.com&';
            url += "name=" + data['title'] + "&description=" + data['description'];
            return url;
        };
        this.buildTwitterURL = function (data) {
            var url = 'https://twitter.com/intent/tweet?';
            url += "text=Check out this week's sermon from Flatland Church: " + data['title'] + "&";
            url += "url=https%3A%2F%2Fflatlandchurch.com%2Fwatch%2F" + data['permalink'];
            return url;
        };
        this.buildEmailURL = function (data) {
            var url = 'mailto:?subject=Watch this sermon from Flatland Church&';
            url += "body=https%3A%2F%2Fflatlandchurch.com%2Fwatch%2F" + data['permalink'];
            return url;
        };
        this.copyLink = function (event) {
            event.preventDefault();
            var element = document.getElementById("fc-share-link");
            element.select();
            document.execCommand('copy');
            _this.copyText = "Copied";
        };
        this.openLink = function (link) {
            window.open(link, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
            return false;
        };
        this.closeModal = function () {
            _this.modalOpen = false;
        };
    }
    ShareComponent.prototype.ngOnInit = function () {
        this.socialLinks = [
            { url: this.buildFacebookURL(this.sermonData), icon: 'fa-facebook-official' },
            { url: this.buildTwitterURL(this.sermonData), icon: 'fa-twitter' },
            { url: this.buildEmailURL(this.sermonData), icon: 'fa-envelope' }
        ];
    };
    return ShareComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ShareComponent.prototype, "sermonData", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ShareComponent.prototype, "modalOpen", void 0);
ShareComponent = __decorate([
    core_1.Component({
        selector: 'share',
        templateUrl: './share.component.html',
        styleUrls: ['./share.component.css']
    }),
    __metadata("design:paramtypes", [])
], ShareComponent);
exports.ShareComponent = ShareComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYmx1ZWJlYXJkL2ZsYXRsYW5kY2h1cmNoLmNvbS9zcmMvYXBwL3ZpZGVvL3NoYXJlL3NoYXJlLmNvbXBvbmVudC50cyIsInNvdXJjZXMiOlsiL2hvbWUvYmx1ZWJlYXJkL2ZsYXRsYW5kY2h1cmNoLmNvbS9zcmMvYXBwL3ZpZGVvL3NoYXJlL3NoYXJlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUF5RDtBQU96RCxJQUFhLGNBQWM7SUFRekI7UUFBQSxpQkFDQTtRQVBRLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFJM0IsYUFBUSxHQUFHLE1BQU0sQ0FBQztRQWFsQixxQkFBZ0IsR0FBRyxVQUFDLElBQVE7WUFDM0IsSUFBSSxHQUFHLEdBQVcsK0NBQStDLENBQUE7WUFDakUsR0FBRyxJQUFJLGFBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBZ0IsQ0FBQztZQUNoRCxHQUFHLElBQUksd0RBQXNELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBRyxDQUFDO1lBQ2xGLEdBQUcsSUFBSSxzRkFBc0YsQ0FBQztZQUM5RixHQUFHLElBQUksVUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFnQixJQUFJLENBQUMsYUFBYSxDQUFHLENBQUM7WUFDbEUsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNaLENBQUMsQ0FBQztRQUVGLG9CQUFlLEdBQUcsVUFBQyxJQUFRO1lBQzFCLElBQUksR0FBRyxHQUFXLG1DQUFtQyxDQUFDO1lBQ3RELEdBQUcsSUFBSSw2REFBMkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFHLENBQUM7WUFDbkYsR0FBRyxJQUFJLG9EQUFrRCxJQUFJLENBQUMsV0FBVyxDQUFHLENBQUM7WUFDN0UsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNaLENBQUMsQ0FBQztRQUVGLGtCQUFhLEdBQUcsVUFBQyxJQUFRO1lBQ3hCLElBQUksR0FBRyxHQUFXLHlEQUF5RCxDQUFDO1lBQzVFLEdBQUcsSUFBSSxxREFBbUQsSUFBSSxDQUFDLFdBQVcsQ0FBRyxDQUFBO1lBQzdFLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDWixDQUFDLENBQUM7UUFFRixhQUFRLEdBQUcsVUFBQyxLQUFLO1lBQ2hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ3BDLE9BQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNyQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdCLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQzFCLENBQUMsQ0FBQztRQUVGLGFBQVEsR0FBRyxVQUFDLElBQUk7WUFDZixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFDZixFQUFFLEVBQ0YseUVBQXlFLENBQUMsQ0FBQztZQUM1RSxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2QsQ0FBQyxDQUFDO1FBRUYsZUFBVSxHQUFHO1lBQ1osS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQyxDQUFBO0lBakRELENBQUM7SUFFQSxpQ0FBUSxHQUFSO1FBQ0EsSUFBSSxDQUFDLFdBQVcsR0FBRztZQUNsQixFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUksRUFBRSxzQkFBc0IsRUFBRTtZQUM3RSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFDO1lBQ2pFLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUU7U0FDakUsQ0FBQztJQUNGLENBQUM7SUEyQ0gscUJBQUM7QUFBRCxDQUFDLEFBNURELElBNERDO0FBM0RTO0lBQVIsWUFBSyxFQUFFOztrREFBb0I7QUFDbkI7SUFBUixZQUFLLEVBQUU7O2lEQUFtQjtBQUZmLGNBQWM7SUFMMUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7S0FDckMsQ0FBQzs7R0FDVyxjQUFjLENBNEQxQjtBQTVEWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaGFyZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaGFyZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NoYXJlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTaGFyZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdEBJbnB1dCgpIHNlcm1vbkRhdGE6IG9iamVjdDtcblx0QElucHV0KCkgbW9kYWxPcGVuID0gZmFsc2U7XG5cblx0c29jaWFsTGlua3M6IFt7fV07XG5cblx0Y29weVRleHQgPSBcIkNvcHlcIjtcblxuICBjb25zdHJ1Y3RvcigpIHtcblx0fVxuXG4gIG5nT25Jbml0KCkge1xuXHRcdHRoaXMuc29jaWFsTGlua3MgPSBbXG5cdFx0XHR7IHVybDogdGhpcy5idWlsZEZhY2Vib29rVVJMKHRoaXMuc2VybW9uRGF0YSksIGljb246ICdmYS1mYWNlYm9vay1vZmZpY2lhbCcgfSxcblx0XHRcdHsgdXJsOiB0aGlzLmJ1aWxkVHdpdHRlclVSTCh0aGlzLnNlcm1vbkRhdGEpLCBpY29uOiAnZmEtdHdpdHRlcid9LFxuXHRcdFx0eyB1cmw6IHRoaXMuYnVpbGRFbWFpbFVSTCh0aGlzLnNlcm1vbkRhdGEpLCBpY29uOiAnZmEtZW52ZWxvcGUnIH1cblx0XHRdO1xuICB9XG5cblx0YnVpbGRGYWNlYm9va1VSTCA9IChkYXRhOiB7fSk6IHN0cmluZyA9PiB7XG5cdFx0dmFyIHVybDogc3RyaW5nID0gYGh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9kaWFsb2cvZmVlZD9hcHBfaWQ9JmBcblx0XHR1cmwgKz0gYHBpY3R1cmU9JHtkYXRhWydpbWFnZSddfSZkaXNwbGF5PXBvcHVwYDtcblx0XHR1cmwgKz0gYGNhcHRpb249aHR0cHMlM0ElMkYlMkZmbGF0bGFuZGNodXJjaC5jb20lMkZ3YXRjaCUyRiR7ZGF0YVsncGVybWFsaW5rJ119JmA7XG5cdFx0dXJsICs9ICdyZWRpcmVjdF91cmk9aHR0cHMlM0ElMkYlMkZmbGF0bGFuZGNodXJjaC5jb20mbGluaz1odHRwcyUzQSUyRiUyRmZsYXRsYW5kY2h1cmNoLmNvbSYnO1xuXHRcdHVybCArPSBgbmFtZT0ke2RhdGFbJ3RpdGxlJ119JmRlc2NyaXB0aW9uPSR7ZGF0YVsnZGVzY3JpcHRpb24nXX1gO1xuXHRcdHJldHVybiB1cmw7XG5cdH07XG5cblx0YnVpbGRUd2l0dGVyVVJMID0gKGRhdGE6IHt9KTogc3RyaW5nID0+IHtcblx0XHR2YXIgdXJsOiBzdHJpbmcgPSAnaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/Jztcblx0XHR1cmwgKz0gYHRleHQ9Q2hlY2sgb3V0IHRoaXMgd2VlaydzIHNlcm1vbiBmcm9tIEZsYXRsYW5kIENodXJjaDogJHtkYXRhWyd0aXRsZSddfSZgO1xuXHRcdHVybCArPSBgdXJsPWh0dHBzJTNBJTJGJTJGZmxhdGxhbmRjaHVyY2guY29tJTJGd2F0Y2glMkYke2RhdGFbJ3Blcm1hbGluayddfWA7XG5cdFx0cmV0dXJuIHVybDtcblx0fTtcblxuXHRidWlsZEVtYWlsVVJMID0gKGRhdGE6IHt9KTogc3RyaW5nID0+IHtcblx0XHR2YXIgdXJsOiBzdHJpbmcgPSAnbWFpbHRvOj9zdWJqZWN0PVdhdGNoIHRoaXMgc2VybW9uIGZyb20gRmxhdGxhbmQgQ2h1cmNoJic7XG5cdFx0dXJsICs9IGBib2R5PWh0dHBzJTNBJTJGJTJGZmxhdGxhbmRjaHVyY2guY29tJTJGd2F0Y2glMkYke2RhdGFbJ3Blcm1hbGluayddfWBcblx0XHRyZXR1cm4gdXJsO1xuXHR9O1xuXG5cdGNvcHlMaW5rID0gKGV2ZW50KSA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmMtc2hhcmUtbGlua1wiKTtcblx0XHQoPEhUTUxJbnB1dEVsZW1lbnQ+ZWxlbWVudCkuc2VsZWN0KCk7XG5cdFx0ZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcblx0XHR0aGlzLmNvcHlUZXh0ID0gXCJDb3BpZWRcIjtcblx0fTtcblxuXHRvcGVuTGluayA9IChsaW5rKSA9PiB7XG5cdFx0d2luZG93Lm9wZW4obGluayxcblx0XHRcdCcnLFxuXHRcdFx0J21lbnViYXI9bm8sdG9vbGJhcj1ubyxyZXNpemFibGU9eWVzLHNjcm9sbGJhcnM9eWVzLGhlaWdodD02MDAsd2lkdGg9NjAwJyk7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXG5cdGNsb3NlTW9kYWwgPSAoKSA9PiB7XG5cdFx0dGhpcy5tb2RhbE9wZW4gPSBmYWxzZTtcblx0fVxuXG59XG4iXX0=