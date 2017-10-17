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
var PageImageStackComponent = (function () {
    function PageImageStackComponent() {
    }
    PageImageStackComponent.prototype.toMarkdown = function (content) {
        return markdown_1.markdown.toHTML(content);
    };
    return PageImageStackComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], PageImageStackComponent.prototype, "stack", void 0);
PageImageStackComponent = __decorate([
    core_1.Component({
        selector: 'page-image-stack',
        templateUrl: './page-image-stack.component.html',
        styleUrls: ['./page-image-stack.component.css']
    })
], PageImageStackComponent);
exports.PageImageStackComponent = PageImageStackComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYmx1ZWJlYXJkL2ZsYXRsYW5kY2h1cmNoLmNvbS9zcmMvYXBwL3BhZ2UvcGFnZS1pbWFnZS1zdGFjay9wYWdlLWltYWdlLXN0YWNrLmNvbXBvbmVudC50cyIsInNvdXJjZXMiOlsiL2hvbWUvYmx1ZWJlYXJkL2ZsYXRsYW5kY2h1cmNoLmNvbS9zcmMvYXBwL3BhZ2UvcGFnZS1pbWFnZS1zdGFjay9wYWdlLWltYWdlLXN0YWNrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFpRDtBQUNqRCxxQ0FBb0M7QUFPcEMsSUFBYSx1QkFBdUI7SUFBcEM7SUFPQSxDQUFDO0lBSkEsNENBQVUsR0FBVixVQUFXLE9BQU87UUFDakIsTUFBTSxDQUFDLG1CQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRiw4QkFBQztBQUFELENBQUMsQUFQRCxJQU9DO0FBTlM7SUFBUixZQUFLLEVBQUU7O3NEQUFpQjtBQURiLHVCQUF1QjtJQUxuQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixXQUFXLEVBQUUsbUNBQW1DO1FBQ2hELFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO0tBQ2hELENBQUM7R0FDVyx1QkFBdUIsQ0FPbkM7QUFQWSwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBtYXJrZG93biB9IGZyb20gJ21hcmtkb3duJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1pbWFnZS1zdGFjaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdlLWltYWdlLXN0YWNrLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGFnZS1pbWFnZS1zdGFjay5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGFnZUltYWdlU3RhY2tDb21wb25lbnQge1xuXHRASW5wdXQoKSBzdGFjazogW29iamVjdF07XG5cblx0dG9NYXJrZG93bihjb250ZW50KSB7XG5cdFx0cmV0dXJuIG1hcmtkb3duLnRvSFRNTChjb250ZW50KTtcblx0fVxuXG59XG4iXX0=