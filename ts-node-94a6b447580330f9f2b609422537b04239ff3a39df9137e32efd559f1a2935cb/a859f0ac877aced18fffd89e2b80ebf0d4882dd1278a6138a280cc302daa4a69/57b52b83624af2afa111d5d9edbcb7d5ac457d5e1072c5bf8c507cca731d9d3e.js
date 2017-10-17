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
var moment = require("moment");
var PageFormComponent = (function () {
    function PageFormComponent(http) {
        var _this = this;
        this.http = http;
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
    }),
    __metadata("design:paramtypes", [http_1.Http])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYmx1ZWJlYXJkL2ZsYXRsYW5kY2h1cmNoLmNvbS9zcmMvYXBwL3BhZ2UvcGFnZS1mb3JtL3BhZ2UtZm9ybS5jb21wb25lbnQudHMiLCJzb3VyY2VzIjpbIi9ob21lL2JsdWViZWFyZC9mbGF0bGFuZGNodXJjaC5jb20vc3JjL2FwcC9wYWdlL3BhZ2UtZm9ybS9wYWdlLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXlEO0FBQ3pELHNDQUFxQztBQUNyQywrQkFBaUM7QUFPakMsSUFBYSxpQkFBaUI7SUFNN0IsMkJBQW9CLElBQVU7UUFBOUIsaUJBQWtDO1FBQWQsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUs5QixZQUFPLEdBQVk7WUFDbEIsU0FBUyxFQUFFLElBQUk7WUFDZixRQUFRLEVBQUUsSUFBSTtZQUNkLEtBQUssRUFBRSxJQUFJO1lBQ1gsS0FBSyxFQUFFLElBQUk7WUFDWCxXQUFXLEVBQUUsQ0FBQztZQUNkLElBQUksRUFBRSxJQUFJO1NBQ1YsQ0FBQztRQUVGLFdBQU0sR0FBVztZQUNoQixVQUFVLEVBQUUsSUFBSTtZQUNoQixXQUFXLEVBQUUsSUFBSTtZQUNqQixJQUFJLEVBQUUsSUFBSTtZQUNWLEtBQUssRUFBRSxJQUFJO1lBQ1gsT0FBTyxFQUFFLElBQUk7U0FDYixDQUFDO1FBRUYsVUFBSyxHQUFHO1lBQ1A7Z0JBQ0MsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUM3RCxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFO2FBQ3BEO1lBQ0Q7Z0JBQ0MsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUM3RCxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFO2FBQ3BEO1lBQ0Q7Z0JBQ0MsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQzdELEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUU7YUFDcEQ7U0FDRCxDQUFDO1FBRUYsY0FBUyxHQUFHO1lBQ1gsS0FBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1lBQzdCLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO1FBQ3RDLENBQUMsQ0FBQztRQUVGLGFBQVEsR0FBRztZQUNWLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRztvQkFDdkI7d0JBQ0UsSUFBSSxFQUFFLElBQUk7d0JBQ1YsR0FBRyxFQUFFLElBQUk7cUJBQ1Y7aUJBQ0QsQ0FBQztZQUNILENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDUCxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7b0JBQzFCLElBQUksRUFBRSxJQUFJO29CQUNWLEdBQUcsRUFBRSxJQUFJO2lCQUNULENBQUMsQ0FBQztZQUNKLENBQUM7UUFDRixDQUFDLENBQUE7SUEzRGdDLENBQUM7SUFFbEMsb0NBQVEsR0FBUjtJQUNDLENBQUM7SUEwREYsdUNBQVcsR0FBWDtRQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQzFCLENBQUM7SUFFRCxzQ0FBVSxHQUFWO1FBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDekIsQ0FBQztJQUVGLHdCQUFDO0FBQUQsQ0FBQyxBQTNFRCxJQTJFQztBQTFFUztJQUFSLFlBQUssRUFBRTs7Z0RBQWU7QUFDZDtJQUFSLFlBQUssRUFBRTs7K0NBQWM7QUFGVixpQkFBaUI7SUFMN0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFdBQVcsRUFBRSw0QkFBNEI7UUFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7S0FDekMsQ0FBQztxQ0FPeUIsV0FBSTtHQU5sQixpQkFBaUIsQ0EyRTdCO0FBM0VZLDhDQUFpQjtBQTZFOUI7SUFBQTtRQUtDLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO0lBSXpCLENBQUM7SUFBRCxjQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7QUFFRDtJQUFBO0lBTUEsQ0FBQztJQUFELGFBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQztBQUVEO0lBQUE7SUFHQSxDQUFDO0lBQUQsWUFBQztBQUFELENBQUMsQUFIRCxJQUdDO0FBRUQ7SUFBQTtJQUVBLENBQUM7SUFBRCxhQUFDO0FBQUQsQ0FBQyxBQUZELElBRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLWZvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnZS1mb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGFnZS1mb3JtLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQYWdlRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG5cdEBJbnB1dCgpIG5hbWU6IHN0cmluZztcblxuXHRwcm9maWxlOiBhbnk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxuXG5cdG5nT25Jbml0KCkge1xuICB9XG5cblx0dmlzaXRvcjogVmlzaXRvciA9IHtcblx0XHRmaXJzdE5hbWU6IG51bGwsXG5cdFx0bGFzdE5hbWU6IG51bGwsXG5cdFx0ZW1haWw6IG51bGwsXG5cdFx0cGhvbmU6IG51bGwsXG5cdFx0c3BvdXNlQ291bnQ6IDAsXG5cdFx0ZGF0ZTogbnVsbFxuXHR9O1xuXG5cdGludml0ZTogSW52aXRlID0ge1xuXHRcdGZyaWVuZE5hbWU6IG51bGwsXG5cdFx0ZnJpZW5kRW1haWw6IG51bGwsXG5cdFx0bmFtZTogbnVsbCxcblx0XHRlbWFpbDogbnVsbCxcblx0XHRtZXNzYWdlOiBudWxsXG5cdH07XG5cblx0ZGF0ZXMgPSBbXG5cdFx0e1xuXHRcdFx0ZnJpZW5kbHk6ICdUaGlzIFN1bmRheScsXG5cdFx0XHRzaG9ydDogbW9tZW50KCkuYWRkKDEsICd3ZWVrcycpLmlzb1dlZWtkYXkoMCkuZm9ybWF0KCdNTU0gRCcpLFxuXHRcdFx0dmFsdWU6IG1vbWVudCgpLmFkZCgxLCAnd2Vla3MnKS5pc29XZWVrZGF5KDApLnVuaXgoKVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0ZnJpZW5kbHk6ICdOZXh0IFN1bmRheScsXG5cdFx0XHRzaG9ydDogbW9tZW50KCkuYWRkKDIsICd3ZWVrcycpLmlzb1dlZWtkYXkoMCkuZm9ybWF0KCdNTU0gRCcpLFxuXHRcdFx0dmFsdWU6IG1vbWVudCgpLmFkZCgyLCAnd2Vla3MnKS5pc29XZWVrZGF5KDApLnVuaXgoKVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0ZnJpZW5kbHk6ICdOZXh0IE5leHQgU3VuZGF5Jyxcblx0XHRcdHNob3J0OiBtb21lbnQoKS5hZGQoMywgJ3dlZWtzJykuaXNvV2Vla2RheSgwKS5mb3JtYXQoJ01NTSBEJyksXG5cdFx0XHR2YWx1ZTogbW9tZW50KCkuYWRkKDMsICd3ZWVrcycpLmlzb1dlZWtkYXkoMCkudW5peCgpXG5cdFx0fVxuXHRdO1xuXG5cdGFkZFNwb3VzZSA9ICgpID0+IHtcblx0XHR0aGlzLnZpc2l0b3Iuc3BvdXNlQ291bnQgPSAxO1xuXHRcdHRoaXMudmlzaXRvci5zcG91c2UgPSB7IG5hbWU6IG51bGwgfTtcblx0fTtcblxuXHRhZGRDaGlsZCA9ICgpID0+IHtcblx0XHRpZiAoIXRoaXMudmlzaXRvci5jaGlsZHJlbikge1xuXHRcdFx0dGhpcy52aXNpdG9yLmNoaWxkcmVuID0gW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRuYW1lOiBudWxsLFxuXHRcdFx0XHRcdFx0ZG9iOiBudWxsXG5cdFx0XHRcdH1cblx0XHRcdF07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMudmlzaXRvci5jaGlsZHJlbi5wdXNoKHtcblx0XHRcdFx0bmFtZTogbnVsbCxcblx0XHRcdFx0ZG9iOiBudWxsXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRzZW5kVmlzaXRvcigpIHtcblx0XHRjb25zb2xlLmxvZyh0aGlzLnZpc2l0b3IpXG5cdH1cblxuXHRzZW5kSW52aXRlKCkge1xuXHRcdGNvbnNvbGUubG9nKHRoaXMuaW52aXRlKVxuXHR9XG5cbn1cblxuY2xhc3MgVmlzaXRvciB7XG5cdGZpcnN0TmFtZTogc3RyaW5nO1xuXHRsYXN0TmFtZTogc3RyaW5nO1xuXHRlbWFpbDogc3RyaW5nO1xuXHRwaG9uZTogc3RyaW5nO1xuXHRzcG91c2VDb3VudDogbnVtYmVyID0gMDtcblx0Y2hpbGRyZW4/OiBbQ2hpbGRdO1xuXHRzcG91c2U/OiBTcG91c2U7XG5cdGRhdGU6IHN0cmluZztcbn1cblxuY2xhc3MgSW52aXRlIHtcblx0ZnJpZW5kTmFtZTogc3RyaW5nO1xuXHRmcmllbmRFbWFpbDogc3RyaW5nO1xuXHRuYW1lOiBzdHJpbmc7XG5cdGVtYWlsOiBzdHJpbmc7XG5cdG1lc3NhZ2U6IHN0cmluZztcbn1cblxuY2xhc3MgQ2hpbGQge1xuXHRuYW1lOiBzdHJpbmc7XG5cdGRvYjogc3RyaW5nO1xufVxuXG5jbGFzcyBTcG91c2Uge1xuXHRuYW1lOiBzdHJpbmc7XG59XG4iXX0=