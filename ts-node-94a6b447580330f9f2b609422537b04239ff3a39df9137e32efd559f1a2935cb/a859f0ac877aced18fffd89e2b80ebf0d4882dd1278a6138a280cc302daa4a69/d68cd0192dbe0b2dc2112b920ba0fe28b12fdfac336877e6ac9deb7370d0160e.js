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
var FooterComponent = (function () {
    function FooterComponent() {
        this.footer = {
            navigation: [
                {
                    uri: "/watch",
                    label: "Watch"
                },
                {
                    uri: "/visit",
                    label: "Visit"
                },
                {
                    uri: "/enjoy",
                    label: "Enjoy"
                },
                {
                    uri: "/move",
                    label: "Move"
                },
                {
                    uri: "/give",
                    label: "Give"
                },
                {
                    uri: "/blog",
                    label: "Blog"
                },
                {
                    uri: "/radio",
                    label: "Radio"
                }
            ],
            social: [
                {
                    uri: "https://www.facebook.com/flatlandchurchomaha",
                    icon: "fa-facebook-official"
                },
                {
                    uri: "https://twitter.com/FlatlandChurch",
                    icon: "fa-twitter"
                },
                {
                    uri: "https://www.instagram.com/flatlandchurch/",
                    icon: "fa-instagram"
                }
            ]
        };
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    core_1.Component({
        selector: 'app-footer',
        templateUrl: './footer.component.html',
        styleUrls: ['./footer.component.css']
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYmx1ZWJlYXJkL2ZsYXRsYW5kY2h1cmNoLmNvbS9zcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnRzIiwic291cmNlcyI6WyIvaG9tZS9ibHVlYmVhcmQvZmxhdGxhbmRjaHVyY2guY29tL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBa0Q7QUFPbEQsSUFBYSxlQUFlO0lBaUQxQjtRQS9DRCxXQUFNLEdBQUc7WUFDUixVQUFVLEVBQUU7Z0JBQ1g7b0JBQ0MsR0FBRyxFQUFFLFFBQVE7b0JBQ2IsS0FBSyxFQUFFLE9BQU87aUJBQ2Q7Z0JBQ0Q7b0JBQ0MsR0FBRyxFQUFFLFFBQVE7b0JBQ2IsS0FBSyxFQUFFLE9BQU87aUJBQ2Q7Z0JBQ0Q7b0JBQ0MsR0FBRyxFQUFFLFFBQVE7b0JBQ2IsS0FBSyxFQUFFLE9BQU87aUJBQ2Q7Z0JBQ0Q7b0JBQ0MsR0FBRyxFQUFFLE9BQU87b0JBQ1osS0FBSyxFQUFFLE1BQU07aUJBQ2I7Z0JBQ0Q7b0JBQ0MsR0FBRyxFQUFFLE9BQU87b0JBQ1osS0FBSyxFQUFFLE1BQU07aUJBQ2I7Z0JBQ0Q7b0JBQ0MsR0FBRyxFQUFFLE9BQU87b0JBQ1osS0FBSyxFQUFFLE1BQU07aUJBQ2I7Z0JBQ0Q7b0JBQ0MsR0FBRyxFQUFFLFFBQVE7b0JBQ2IsS0FBSyxFQUFFLE9BQU87aUJBQ2Q7YUFDRDtZQUNELE1BQU0sRUFBRTtnQkFDUDtvQkFDQyxHQUFHLEVBQUUsOENBQThDO29CQUNuRCxJQUFJLEVBQUUsc0JBQXNCO2lCQUM1QjtnQkFDRDtvQkFDQyxHQUFHLEVBQUUsb0NBQW9DO29CQUN6QyxJQUFJLEVBQUUsWUFBWTtpQkFDbEI7Z0JBQ0Q7b0JBQ0MsR0FBRyxFQUFFLDJDQUEyQztvQkFDaEQsSUFBSSxFQUFFLGNBQWM7aUJBQ3BCO2FBQ0Q7U0FDRCxDQUFBO0lBRWdCLENBQUM7SUFFakIsa0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFSCxzQkFBQztBQUFELENBQUMsQUF0REQsSUFzREM7QUF0RFksZUFBZTtJQUwzQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFlBQVk7UUFDdEIsV0FBVyxFQUFFLHlCQUF5QjtRQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztLQUN0QyxDQUFDOztHQUNXLGVBQWUsQ0FzRDNCO0FBdERZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWZvb3RlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb290ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9mb290ZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZvb3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0Zm9vdGVyID0ge1xuXHRcdG5hdmlnYXRpb246IFtcblx0XHRcdHtcblx0XHRcdFx0dXJpOiBcIi93YXRjaFwiLFxuXHRcdFx0XHRsYWJlbDogXCJXYXRjaFwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR1cmk6IFwiL3Zpc2l0XCIsXG5cdFx0XHRcdGxhYmVsOiBcIlZpc2l0XCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHVyaTogXCIvZW5qb3lcIixcblx0XHRcdFx0bGFiZWw6IFwiRW5qb3lcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dXJpOiBcIi9tb3ZlXCIsXG5cdFx0XHRcdGxhYmVsOiBcIk1vdmVcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dXJpOiBcIi9naXZlXCIsXG5cdFx0XHRcdGxhYmVsOiBcIkdpdmVcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dXJpOiBcIi9ibG9nXCIsXG5cdFx0XHRcdGxhYmVsOiBcIkJsb2dcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dXJpOiBcIi9yYWRpb1wiLFxuXHRcdFx0XHRsYWJlbDogXCJSYWRpb1wiXG5cdFx0XHR9XG5cdFx0XSxcblx0XHRzb2NpYWw6IFtcblx0XHRcdHtcblx0XHRcdFx0dXJpOiBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9mbGF0bGFuZGNodXJjaG9tYWhhXCIsXG5cdFx0XHRcdGljb246IFwiZmEtZmFjZWJvb2stb2ZmaWNpYWxcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dXJpOiBcImh0dHBzOi8vdHdpdHRlci5jb20vRmxhdGxhbmRDaHVyY2hcIixcblx0XHRcdFx0aWNvbjogXCJmYS10d2l0dGVyXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHVyaTogXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2ZsYXRsYW5kY2h1cmNoL1wiLFxuXHRcdFx0XHRpY29uOiBcImZhLWluc3RhZ3JhbVwiXG5cdFx0XHR9XG5cdFx0XVxuXHR9XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=