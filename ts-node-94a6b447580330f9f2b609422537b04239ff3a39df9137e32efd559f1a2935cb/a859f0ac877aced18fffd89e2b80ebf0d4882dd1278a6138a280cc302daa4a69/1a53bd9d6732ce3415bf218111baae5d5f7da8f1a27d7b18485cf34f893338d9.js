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
var moment = require("moment");
var PageFormComponent = (function () {
    function PageFormComponent() {
        var _this = this;
        this.visitor = {
            firstName: null,
            lastName: null,
            email: null,
            phone: null,
            spouseCount: 0,
            date: null
        };
        this.invite = {
            friendName: null,
            friendEmail: null,
            name: null,
            email: null,
            message: null
        };
        this.dates = [
            {
                friendly: 'This Sunday',
                short: moment().add(1, 'weeks').isoWeekday(0).format('MMM D'),
                value: moment().add(1, 'weeks').isoWeekday(0).unix()
            },
            {
                friendly: 'Next Sunday',
                short: moment().add(2, 'weeks').isoWeekday(0).format('MMM D'),
                value: moment().add(2, 'weeks').isoWeekday(0).unix()
            },
            {
                friendly: 'Next Next Sunday',
                short: moment().add(3, 'weeks').isoWeekday(0).format('MMM D'),
                value: moment().add(3, 'weeks').isoWeekday(0).unix()
            }
        ];
        this.addSpouse = function () {
            _this.visitor.spouseCount = 1;
            _this.visitor.spouse = { name: null };
        };
        this.addChild = function () {
            if (!_this.visitor.children) {
                _this.visitor.children = [
                    {
                        name: null,
                        dob: null
                    }
                ];
            }
            else {
                _this.visitor.children.push({
                    name: null,
                    dob: null
                });
            }
        };
    }
    PageFormComponent.prototype.ngOnInit = function () {
    };
    PageFormComponent.prototype.sendVisitor = function () {
        console.log(this.visitor);
    };
    PageFormComponent.prototype.sendInvite = function () {
        console.log(this.invite);
    };
    return PageFormComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PageFormComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PageFormComponent.prototype, "name", void 0);
PageFormComponent = __decorate([
    core_1.Component({
        selector: 'page-form',
        templateUrl: './page-form.component.html',
        styleUrls: ['./page-form.component.css']
    })
], PageFormComponent);
exports.PageFormComponent = PageFormComponent;
var Visitor = (function () {
    function Visitor() {
        this.spouseCount = 0;
    }
    return Visitor;
}());
var Invite = (function () {
    function Invite() {
    }
    return Invite;
}());
var Child = (function () {
    function Child() {
    }
    return Child;
}());
var Spouse = (function () {
    function Spouse() {
    }
    return Spouse;
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYmx1ZWJlYXJkL2ZsYXRsYW5kY2h1cmNoLmNvbS9zcmMvYXBwL3BhZ2UvcGFnZS1mb3JtL3BhZ2UtZm9ybS5jb21wb25lbnQudHMiLCJzb3VyY2VzIjpbIi9ob21lL2JsdWViZWFyZC9mbGF0bGFuZGNodXJjaC5jb20vc3JjL2FwcC9wYWdlL3BhZ2UtZm9ybS9wYWdlLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXlEO0FBQ3pELCtCQUFpQztBQU9qQyxJQUFhLGlCQUFpQjtJQUw5QjtRQUFBLGlCQThFQztRQWhFQSxZQUFPLEdBQVk7WUFDbEIsU0FBUyxFQUFFLElBQUk7WUFDZixRQUFRLEVBQUUsSUFBSTtZQUNkLEtBQUssRUFBRSxJQUFJO1lBQ1gsS0FBSyxFQUFFLElBQUk7WUFDWCxXQUFXLEVBQUUsQ0FBQztZQUNkLElBQUksRUFBRSxJQUFJO1NBQ1YsQ0FBQztRQUVGLFdBQU0sR0FBVztZQUNoQixVQUFVLEVBQUUsSUFBSTtZQUNoQixXQUFXLEVBQUUsSUFBSTtZQUNqQixJQUFJLEVBQUUsSUFBSTtZQUNWLEtBQUssRUFBRSxJQUFJO1lBQ1gsT0FBTyxFQUFFLElBQUk7U0FDYixDQUFDO1FBRUYsVUFBSyxHQUFHO1lBQ1A7Z0JBQ0MsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUM3RCxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFO2FBQ3BEO1lBQ0Q7Z0JBQ0MsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUM3RCxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFO2FBQ3BEO1lBQ0Q7Z0JBQ0MsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQzdELEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUU7YUFDcEQ7U0FDRCxDQUFDO1FBRUYsY0FBUyxHQUFHO1lBQ1gsS0FBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1lBQzdCLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO1FBQ3RDLENBQUMsQ0FBQztRQUVGLGFBQVEsR0FBRztZQUNWLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRztvQkFDdkI7d0JBQ0UsSUFBSSxFQUFFLElBQUk7d0JBQ1YsR0FBRyxFQUFFLElBQUk7cUJBQ1Y7aUJBQ0QsQ0FBQztZQUNILENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDUCxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7b0JBQzFCLElBQUksRUFBRSxJQUFJO29CQUNWLEdBQUcsRUFBRSxJQUFJO2lCQUNULENBQUMsQ0FBQztZQUNKLENBQUM7UUFDRixDQUFDLENBQUE7SUFVRixDQUFDO0lBbkVBLG9DQUFRLEdBQVI7SUFDQyxDQUFDO0lBMERGLHVDQUFXLEdBQVg7UUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMxQixDQUFDO0lBRUQsc0NBQVUsR0FBVjtRQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ3pCLENBQUM7SUFFRix3QkFBQztBQUFELENBQUMsQUF6RUQsSUF5RUM7QUF4RVM7SUFBUixZQUFLLEVBQUU7O2dEQUFlO0FBQ2Q7SUFBUixZQUFLLEVBQUU7OytDQUFjO0FBRlYsaUJBQWlCO0lBTDdCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsV0FBVztRQUNyQixXQUFXLEVBQUUsNEJBQTRCO1FBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO0tBQ3pDLENBQUM7R0FDVyxpQkFBaUIsQ0F5RTdCO0FBekVZLDhDQUFpQjtBQTJFOUI7SUFBQTtRQUtDLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO0lBSXpCLENBQUM7SUFBRCxjQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7QUFFRDtJQUFBO0lBTUEsQ0FBQztJQUFELGFBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQztBQUVEO0lBQUE7SUFHQSxDQUFDO0lBQUQsWUFBQztBQUFELENBQUMsQUFIRCxJQUdDO0FBRUQ7SUFBQTtJQUVBLENBQUM7SUFBRCxhQUFDO0FBQUQsQ0FBQyxBQUZELElBRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLWZvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnZS1mb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGFnZS1mb3JtLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQYWdlRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG5cdEBJbnB1dCgpIG5hbWU6IHN0cmluZztcblxuXHRwcm9maWxlOiBhbnk7XG5cblx0bmdPbkluaXQoKSB7XG4gIH1cblxuXHR2aXNpdG9yOiBWaXNpdG9yID0ge1xuXHRcdGZpcnN0TmFtZTogbnVsbCxcblx0XHRsYXN0TmFtZTogbnVsbCxcblx0XHRlbWFpbDogbnVsbCxcblx0XHRwaG9uZTogbnVsbCxcblx0XHRzcG91c2VDb3VudDogMCxcblx0XHRkYXRlOiBudWxsXG5cdH07XG5cblx0aW52aXRlOiBJbnZpdGUgPSB7XG5cdFx0ZnJpZW5kTmFtZTogbnVsbCxcblx0XHRmcmllbmRFbWFpbDogbnVsbCxcblx0XHRuYW1lOiBudWxsLFxuXHRcdGVtYWlsOiBudWxsLFxuXHRcdG1lc3NhZ2U6IG51bGxcblx0fTtcblxuXHRkYXRlcyA9IFtcblx0XHR7XG5cdFx0XHRmcmllbmRseTogJ1RoaXMgU3VuZGF5Jyxcblx0XHRcdHNob3J0OiBtb21lbnQoKS5hZGQoMSwgJ3dlZWtzJykuaXNvV2Vla2RheSgwKS5mb3JtYXQoJ01NTSBEJyksXG5cdFx0XHR2YWx1ZTogbW9tZW50KCkuYWRkKDEsICd3ZWVrcycpLmlzb1dlZWtkYXkoMCkudW5peCgpXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRmcmllbmRseTogJ05leHQgU3VuZGF5Jyxcblx0XHRcdHNob3J0OiBtb21lbnQoKS5hZGQoMiwgJ3dlZWtzJykuaXNvV2Vla2RheSgwKS5mb3JtYXQoJ01NTSBEJyksXG5cdFx0XHR2YWx1ZTogbW9tZW50KCkuYWRkKDIsICd3ZWVrcycpLmlzb1dlZWtkYXkoMCkudW5peCgpXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRmcmllbmRseTogJ05leHQgTmV4dCBTdW5kYXknLFxuXHRcdFx0c2hvcnQ6IG1vbWVudCgpLmFkZCgzLCAnd2Vla3MnKS5pc29XZWVrZGF5KDApLmZvcm1hdCgnTU1NIEQnKSxcblx0XHRcdHZhbHVlOiBtb21lbnQoKS5hZGQoMywgJ3dlZWtzJykuaXNvV2Vla2RheSgwKS51bml4KClcblx0XHR9XG5cdF07XG5cblx0YWRkU3BvdXNlID0gKCkgPT4ge1xuXHRcdHRoaXMudmlzaXRvci5zcG91c2VDb3VudCA9IDE7XG5cdFx0dGhpcy52aXNpdG9yLnNwb3VzZSA9IHsgbmFtZTogbnVsbCB9O1xuXHR9O1xuXG5cdGFkZENoaWxkID0gKCkgPT4ge1xuXHRcdGlmICghdGhpcy52aXNpdG9yLmNoaWxkcmVuKSB7XG5cdFx0XHR0aGlzLnZpc2l0b3IuY2hpbGRyZW4gPSBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcdG5hbWU6IG51bGwsXG5cdFx0XHRcdFx0XHRkb2I6IG51bGxcblx0XHRcdFx0fVxuXHRcdFx0XTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy52aXNpdG9yLmNoaWxkcmVuLnB1c2goe1xuXHRcdFx0XHRuYW1lOiBudWxsLFxuXHRcdFx0XHRkb2I6IG51bGxcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHNlbmRWaXNpdG9yKCkge1xuXHRcdGNvbnNvbGUubG9nKHRoaXMudmlzaXRvcilcblx0fVxuXG5cdHNlbmRJbnZpdGUoKSB7XG5cdFx0Y29uc29sZS5sb2codGhpcy5pbnZpdGUpXG5cdH1cblxufVxuXG5jbGFzcyBWaXNpdG9yIHtcblx0Zmlyc3ROYW1lOiBzdHJpbmc7XG5cdGxhc3ROYW1lOiBzdHJpbmc7XG5cdGVtYWlsOiBzdHJpbmc7XG5cdHBob25lOiBzdHJpbmc7XG5cdHNwb3VzZUNvdW50OiBudW1iZXIgPSAwO1xuXHRjaGlsZHJlbj86IFtDaGlsZF07XG5cdHNwb3VzZT86IFNwb3VzZTtcblx0ZGF0ZTogc3RyaW5nO1xufVxuXG5jbGFzcyBJbnZpdGUge1xuXHRmcmllbmROYW1lOiBzdHJpbmc7XG5cdGZyaWVuZEVtYWlsOiBzdHJpbmc7XG5cdG5hbWU6IHN0cmluZztcblx0ZW1haWw6IHN0cmluZztcblx0bWVzc2FnZTogc3RyaW5nO1xufVxuXG5jbGFzcyBDaGlsZCB7XG5cdG5hbWU6IHN0cmluZztcblx0ZG9iOiBzdHJpbmc7XG59XG5cbmNsYXNzIFNwb3VzZSB7XG5cdG5hbWU6IHN0cmluZztcbn1cbiJdfQ==