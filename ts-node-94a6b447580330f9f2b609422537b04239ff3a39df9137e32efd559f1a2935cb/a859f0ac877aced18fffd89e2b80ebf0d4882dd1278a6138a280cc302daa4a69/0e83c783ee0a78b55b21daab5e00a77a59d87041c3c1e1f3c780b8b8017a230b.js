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
var HeaderComponent = (function () {
    function HeaderComponent() {
        this.navigation = {
            login: [
                {
                    uri: "https://my.flatlandchurch.com",
                    label: "Sign In"
                }
            ],
            navItems: [
                {
                    uri: "/watch",
                    mainLabel: "Watch",
                    subLabel: "Sermons | Videos"
                },
                {
                    uri: "/visit",
                    mainLabel: "Visit",
                    subLabel: "Times | Info"
                },
                {
                    uri: "/move",
                    mainLabel: "Move",
                    subLabel: "Classes | Groups"
                },
                {
                    uri: "/enjoy",
                    mainLabel: "Enjoy",
                    subLabel: "Retreats | Events"
                },
                {
                    uri: "/give",
                    mainLabel: "Give",
                    subLabel: "Serve | Donate"
                }
            ]
        };
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.css']
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYmx1ZWJlYXJkL2ZsYXRsYW5kY2h1cmNoLmNvbS9zcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIiwic291cmNlcyI6WyIvaG9tZS9ibHVlYmVhcmQvZmxhdGxhbmRjaHVyY2guY29tL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBa0Q7QUFPbEQsSUFBYSxlQUFlO0lBc0MxQjtRQXBDRCxlQUFVLEdBQUc7WUFDWixLQUFLLEVBQUU7Z0JBQ047b0JBQ0MsR0FBRyxFQUFFLCtCQUErQjtvQkFDcEMsS0FBSyxFQUFFLFNBQVM7aUJBQ2hCO2FBQ0Q7WUFDRCxRQUFRLEVBQUU7Z0JBQ1Q7b0JBQ0MsR0FBRyxFQUFFLFFBQVE7b0JBQ2IsU0FBUyxFQUFFLE9BQU87b0JBQ2xCLFFBQVEsRUFBRSxrQkFBa0I7aUJBQzVCO2dCQUNEO29CQUNDLEdBQUcsRUFBRSxRQUFRO29CQUNiLFNBQVMsRUFBRSxPQUFPO29CQUNsQixRQUFRLEVBQUUsY0FBYztpQkFDeEI7Z0JBQ0Q7b0JBQ0MsR0FBRyxFQUFFLE9BQU87b0JBQ1osU0FBUyxFQUFFLE1BQU07b0JBQ2pCLFFBQVEsRUFBRSxrQkFBa0I7aUJBQzVCO2dCQUNEO29CQUNDLEdBQUcsRUFBRSxRQUFRO29CQUNiLFNBQVMsRUFBRSxPQUFPO29CQUNsQixRQUFRLEVBQUUsbUJBQW1CO2lCQUM3QjtnQkFDRDtvQkFDQyxHQUFHLEVBQUUsT0FBTztvQkFDWixTQUFTLEVBQUUsTUFBTTtvQkFDakIsUUFBUSxFQUFFLGdCQUFnQjtpQkFDMUI7YUFDRDtTQUNELENBQUM7SUFFZSxDQUFDO0lBRWpCLGtDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUgsc0JBQUM7QUFBRCxDQUFDLEFBM0NELElBMkNDO0FBM0NZLGVBQWU7SUFMM0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFdBQVcsRUFBRSx5QkFBeUI7UUFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7S0FDdEMsQ0FBQzs7R0FDVyxlQUFlLENBMkMzQjtBQTNDWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaGVhZGVyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdG5hdmlnYXRpb24gPSB7XG5cdFx0bG9naW46IFtcblx0XHRcdHtcblx0XHRcdFx0dXJpOiBcImh0dHBzOi8vbXkuZmxhdGxhbmRjaHVyY2guY29tXCIsXG5cdFx0XHRcdGxhYmVsOiBcIlNpZ24gSW5cIlxuXHRcdFx0fVxuXHRcdF0sXG5cdFx0bmF2SXRlbXM6IFtcblx0XHRcdHtcblx0XHRcdFx0dXJpOiBcIi93YXRjaFwiLFxuXHRcdFx0XHRtYWluTGFiZWw6IFwiV2F0Y2hcIixcblx0XHRcdFx0c3ViTGFiZWw6IFwiU2VybW9ucyB8IFZpZGVvc1wiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR1cmk6IFwiL3Zpc2l0XCIsXG5cdFx0XHRcdG1haW5MYWJlbDogXCJWaXNpdFwiLFxuXHRcdFx0XHRzdWJMYWJlbDogXCJUaW1lcyB8IEluZm9cIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dXJpOiBcIi9tb3ZlXCIsXG5cdFx0XHRcdG1haW5MYWJlbDogXCJNb3ZlXCIsXG5cdFx0XHRcdHN1YkxhYmVsOiBcIkNsYXNzZXMgfCBHcm91cHNcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dXJpOiBcIi9lbmpveVwiLFxuXHRcdFx0XHRtYWluTGFiZWw6IFwiRW5qb3lcIixcblx0XHRcdFx0c3ViTGFiZWw6IFwiUmV0cmVhdHMgfCBFdmVudHNcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dXJpOiBcIi9naXZlXCIsXG5cdFx0XHRcdG1haW5MYWJlbDogXCJHaXZlXCIsXG5cdFx0XHRcdHN1YkxhYmVsOiBcIlNlcnZlIHwgRG9uYXRlXCJcblx0XHRcdH1cblx0XHRdXG5cdH07XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=