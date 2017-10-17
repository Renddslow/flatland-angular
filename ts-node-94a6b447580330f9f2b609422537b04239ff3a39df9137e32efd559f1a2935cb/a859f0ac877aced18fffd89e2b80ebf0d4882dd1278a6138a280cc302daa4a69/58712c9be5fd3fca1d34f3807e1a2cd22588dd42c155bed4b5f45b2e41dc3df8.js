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
var markdown_1 = require("markdown");
var PageStackComponent = (function () {
    function PageStackComponent() {
    }
    PageStackComponent.prototype.toMarkdown = function (content) {
        return markdown_1.markdown.toHTML(content);
    };
    return PageStackComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], PageStackComponent.prototype, "stack", void 0);
PageStackComponent = __decorate([
    core_1.Component({
        selector: 'page-stack',
        templateUrl: './page-stack.component.html',
        styleUrls: ['./page-stack.component.css']
    })
], PageStackComponent);
exports.PageStackComponent = PageStackComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYmx1ZWJlYXJkL2ZsYXRsYW5kY2h1cmNoLmNvbS9zcmMvYXBwL3BhZ2UvcGFnZS1zdGFjay9wYWdlLXN0YWNrLmNvbXBvbmVudC50cyIsInNvdXJjZXMiOlsiL2hvbWUvYmx1ZWJlYXJkL2ZsYXRsYW5kY2h1cmNoLmNvbS9zcmMvYXBwL3BhZ2UvcGFnZS1zdGFjay9wYWdlLXN0YWNrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFpRDtBQUNqRCxxQ0FBb0M7QUFPcEMsSUFBYSxrQkFBa0I7SUFBL0I7SUFNQSxDQUFDO0lBSEEsdUNBQVUsR0FBVixVQUFXLE9BQU87UUFDakIsTUFBTSxDQUFDLG1CQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDRix5QkFBQztBQUFELENBQUMsQUFORCxJQU1DO0FBTFM7SUFBUixZQUFLLEVBQUU7O2lEQUFpQjtBQURiLGtCQUFrQjtJQUw5QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFlBQVk7UUFDdEIsV0FBVyxFQUFFLDZCQUE2QjtRQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztLQUMxQyxDQUFDO0dBQ1csa0JBQWtCLENBTTlCO0FBTlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbWFya2Rvd24gfSBmcm9tICdtYXJrZG93bic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2Utc3RhY2snLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnZS1zdGFjay5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BhZ2Utc3RhY2suY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VTdGFja0NvbXBvbmVudCB7XG5cdEBJbnB1dCgpIHN0YWNrOiBbb2JqZWN0XTtcblxuXHR0b01hcmtkb3duKGNvbnRlbnQpIHtcblx0XHRyZXR1cm4gbWFya2Rvd24udG9IVE1MKGNvbnRlbnQpO1xuXHR9XG59XG4iXX0=