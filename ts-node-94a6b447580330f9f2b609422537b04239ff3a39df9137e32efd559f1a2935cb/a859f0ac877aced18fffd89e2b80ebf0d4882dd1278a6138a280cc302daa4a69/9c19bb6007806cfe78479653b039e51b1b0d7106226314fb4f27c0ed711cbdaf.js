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
var HeaderMobileMenuComponent = (function () {
    function HeaderMobileMenuComponent() {
        this.hideMenu = function () {
            var element = document.getElementById("menu-toggle");
            element.checked = false;
        };
    }
    return HeaderMobileMenuComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], HeaderMobileMenuComponent.prototype, "navigation", void 0);
HeaderMobileMenuComponent = __decorate([
    core_1.Component({
        selector: 'header-mobile-menu',
        templateUrl: './header-mobile-menu.component.html',
        styleUrls: ['./header-mobile-menu.component.css']
    })
], HeaderMobileMenuComponent);
exports.HeaderMobileMenuComponent = HeaderMobileMenuComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYmx1ZWJlYXJkL2ZsYXRsYW5kY2h1cmNoLmNvbS9zcmMvYXBwL2hlYWRlci9oZWFkZXItbW9iaWxlLW1lbnUvaGVhZGVyLW1vYmlsZS1tZW51LmNvbXBvbmVudC50cyIsInNvdXJjZXMiOlsiL2hvbWUvYmx1ZWJlYXJkL2ZsYXRsYW5kY2h1cmNoLmNvbS9zcmMvYXBwL2hlYWRlci9oZWFkZXItbW9iaWxlLW1lbnUvaGVhZGVyLW1vYmlsZS1tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFpRDtBQU9qRCxJQUFhLHlCQUF5QjtJQUx0QztRQVFDLGFBQVEsR0FBRztZQUNWLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDbEMsT0FBUSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDN0MsQ0FBQyxDQUFBO0lBQ0YsQ0FBQztJQUFELGdDQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7QUFOUztJQUFSLFlBQUssRUFBRTs7NkRBQXFCO0FBRGpCLHlCQUF5QjtJQUxyQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG9CQUFvQjtRQUM5QixXQUFXLEVBQUUscUNBQXFDO1FBQ2xELFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO0tBQ2xELENBQUM7R0FDVyx5QkFBeUIsQ0FPckM7QUFQWSw4REFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hlYWRlci1tb2JpbGUtbWVudScsXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXItbW9iaWxlLW1lbnUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9oZWFkZXItbW9iaWxlLW1lbnUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlck1vYmlsZU1lbnVDb21wb25lbnQge1xuXHRASW5wdXQoKSBuYXZpZ2F0aW9uOiBbb2JqZWN0XVxuXG5cdGhpZGVNZW51ID0gKCkgPT4ge1xuXHRcdGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51LXRvZ2dsZVwiKTtcblx0XHQoPEhUTUxJbnB1dEVsZW1lbnQ+ZWxlbWVudCkuY2hlY2tlZCA9IGZhbHNlO1xuXHR9XG59XG4iXX0=