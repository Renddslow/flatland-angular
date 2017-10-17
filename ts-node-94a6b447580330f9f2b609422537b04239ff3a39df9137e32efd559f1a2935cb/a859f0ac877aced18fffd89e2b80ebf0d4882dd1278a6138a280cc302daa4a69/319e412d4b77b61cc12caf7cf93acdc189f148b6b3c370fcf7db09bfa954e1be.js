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
var HeaderNavComponent = (function () {
    function HeaderNavComponent() {
    }
    return HeaderNavComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], HeaderNavComponent.prototype, "navigation", void 0);
HeaderNavComponent = __decorate([
    core_1.Component({
        selector: 'header-nav',
        templateUrl: './header-nav.component.html',
        styleUrls: ['./header-nav.component.css']
    })
], HeaderNavComponent);
exports.HeaderNavComponent = HeaderNavComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYmx1ZWJlYXJkL2ZsYXRsYW5kY2h1cmNoLmNvbS9zcmMvYXBwL2hlYWRlci9oZWFkZXItbmF2L2hlYWRlci1uYXYuY29tcG9uZW50LnRzIiwic291cmNlcyI6WyIvaG9tZS9ibHVlYmVhcmQvZmxhdGxhbmRjaHVyY2guY29tL3NyYy9hcHAvaGVhZGVyL2hlYWRlci1uYXYvaGVhZGVyLW5hdi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBaUQ7QUFPakQsSUFBYSxrQkFBa0I7SUFBL0I7SUFBZ0UsQ0FBQztJQUFELHlCQUFDO0FBQUQsQ0FBQyxBQUFqRSxJQUFpRTtBQUF0QjtJQUFSLFlBQUssRUFBRTs7c0RBQXFCO0FBQWxELGtCQUFrQjtJQUw5QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFlBQVk7UUFDdEIsV0FBVyxFQUFFLDZCQUE2QjtRQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztLQUMxQyxDQUFDO0dBQ1csa0JBQWtCLENBQWtDO0FBQXBELGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaGVhZGVyLW5hdicsXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXItbmF2LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaGVhZGVyLW5hdi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyTmF2Q29tcG9uZW50IHsgQElucHV0KCkgbmF2aWdhdGlvbjogW29iamVjdF0gfVxuIl19