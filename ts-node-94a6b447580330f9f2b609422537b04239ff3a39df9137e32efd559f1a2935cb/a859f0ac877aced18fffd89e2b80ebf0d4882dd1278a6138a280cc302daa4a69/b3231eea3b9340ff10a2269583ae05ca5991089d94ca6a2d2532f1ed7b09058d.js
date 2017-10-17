"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("./post.component.css.shim.ngstyle");
var i1 = require("@angular/core");
var i2 = require("@angular/common");
var i3 = require("../../../../../src/app/post/post.component");
var i4 = require("@angular/http");
var i5 = require("@angular/router");
var i6 = require("@angular/platform-browser");
var styles_PostComponent = [i0.styles];
exports.RenderType_PostComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_PostComponent, data: {} });
function View_PostComponent_2(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, 'li', [], null, null, null, null, null)), (_l()(),
            i1.ɵted(1, null, ['', '']))], null, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit;
        _ck(_v, 1, 0, currVal_0);
    });
}
function View_PostComponent_1(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 7, 'div', [['class',
                'page-card-nav']], null, null, null, null, null)),
        (_l()(), i1.ɵted(-1, null, ['\n			'])), (_l()(), i1.ɵeld(2, 0, null, null, 4, 'ul', [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['\n				'])),
        (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PostComponent_2)),
        i1.ɵdid(5, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef,
            i1.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i1.ɵted(-1, null, ['\n			'])), (_l()(), i1.ɵted(-1, null, ['\n		']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.pageData.metaFields;
        _ck(_v, 5, 0, currVal_0);
    }, null);
}
function View_PostComponent_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 22, 'div', [['class',
                'page']], null, null, null, null, null)),
        (_l()(), i1.ɵted(-1, null, ['\n	'])), (_l()(), i1.ɵeld(2, 0, null, null, 8, 'div', [['class', 'page-background']], null, null, null, null, null)), i1.ɵdid(3, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer], { ngStyle: [0,
                'ngStyle'] }, null), i1.ɵpod(4, { 'background-image': 0 }), (_l()(),
            i1.ɵted(-1, null, ['\n		'])), (_l()(), i1.ɵeld(6, 0, null, null, 1, 'h1', [], null, null, null, null, null)), (_l()(), i1.ɵted(7, null, ['', ''])), (_l()(), i1.ɵted(-1, null, ['\n		'])), (_l()(), i1.ɵeld(9, 0, null, null, 0, 'div', [['class', 'gradient']], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['\n	'])),
        (_l()(), i1.ɵted(-1, null, ['\n	'])), (_l()(), i1.ɵeld(12, 0, null, null, 9, 'div', [['class', 'page-card']], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['\n		'])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PostComponent_1)), i1.ɵdid(15, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef,
            i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i1.ɵted(-1, null, ['\n		'])), (_l()(), i1.ɵeld(17, 0, null, null, 3, 'div', [['class',
                'post-content']], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['\n			'])), (_l()(), i1.ɵeld(19, 0, null, null, 0, 'div', [], [[8, 'innerHTML', 1]], null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['\n		'])), (_l()(), i1.ɵted(-1, null, ['\n	'])), (_l()(),
            i1.ɵted(-1, null, ['\n'])), (_l()(), i1.ɵted(-1, null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _ck(_v, 4, 0, (('url(' + _co.pageData.jumbotronImage) + ')'));
        _ck(_v, 3, 0, currVal_0);
        var currVal_2 = _co.pageData.metaFields.length;
        _ck(_v, 15, 0, currVal_2);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = _co.pageData.title;
        _ck(_v, 7, 0, currVal_1);
        var currVal_3 = _co.toMarkdown(_co.pageData.content);
        _ck(_v, 19, 0, currVal_3);
    });
}
exports.View_PostComponent_0 = View_PostComponent_0;
function View_PostComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, 'app-post', [], null, null, null, View_PostComponent_0, exports.RenderType_PostComponent)),
        i1.ɵdid(1, 114688, null, 0, i3.PostComponent, [i4.Http, i5.ActivatedRoute,
            i5.Router, i6.Meta, i6.Title], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
exports.View_PostComponent_Host_0 = View_PostComponent_Host_0;
exports.PostComponentNgFactory = i1.ɵccf('app-post', i3.PostComponent, View_PostComponent_Host_0, {}, {}, []);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvYmx1ZWJlYXJkL2ZsYXRsYW5kY2h1cmNoLmNvbS9zcmMvYXBwL3Bvc3QvcG9zdC5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vaG9tZS9ibHVlYmVhcmQvZmxhdGxhbmRjaHVyY2guY29tL3NyYy9hcHAvcG9zdC9wb3N0LmNvbXBvbmVudC50cyIsIm5nOi8vL2hvbWUvYmx1ZWJlYXJkL2ZsYXRsYW5kY2h1cmNoLmNvbS9zcmMvYXBwL3Bvc3QvcG9zdC5jb21wb25lbnQuaHRtbCIsIm5nOi8vL2hvbWUvYmx1ZWJlYXJkL2ZsYXRsYW5kY2h1cmNoLmNvbS9zcmMvYXBwL3Bvc3QvcG9zdC5jb21wb25lbnQudHMuUG9zdENvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxkaXYgY2xhc3M9XCJwYWdlXCI+XG5cdDxkaXYgY2xhc3M9XCJwYWdlLWJhY2tncm91bmRcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKCcgKyBwYWdlRGF0YS5qdW1ib3Ryb25JbWFnZSArICcpJ31cIj5cblx0XHQ8aDE+e3sgcGFnZURhdGEudGl0bGUgfX08L2gxPlxuXHRcdDxkaXYgY2xhc3M9XCJncmFkaWVudFwiPjwvZGl2PlxuXHQ8L2Rpdj5cblx0PGRpdiBjbGFzcz1cInBhZ2UtY2FyZFwiPlxuXHRcdDxkaXYgY2xhc3M9XCJwYWdlLWNhcmQtbmF2XCIgKm5nSWY9XCJwYWdlRGF0YS5tZXRhRmllbGRzLmxlbmd0aFwiPlxuXHRcdFx0PHVsPlxuXHRcdFx0XHQ8bGkgKm5nRm9yPVwibGV0IG1ldGFJdGVtIG9mIHBhZ2VEYXRhLm1ldGFGaWVsZHNcIj57eyBtZXRhSXRlbSB9fTwvbGk+XG5cdFx0XHQ8L3VsPlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJwb3N0LWNvbnRlbnRcIj5cblx0XHRcdDxkaXYgW2lubmVySHRtbF09XCJ0b01hcmtkb3duKHBhZ2VEYXRhLmNvbnRlbnQpXCI+PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC9kaXY+XG4iLCI8YXBwLXBvc3Q+PC9hcHAtcG9zdD4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ1FJO01BQUEsd0VBQWlEO2FBQUE7SUFBQTtJQUFBOzs7O29CQUZuRDtNQUFBO01BQThELDZDQUM3RDtVQUFBO1VBQUEsOEJBQUk7TUFDSDthQUFBOzRCQUFBLHlDQUFvRTtVQUFBLDBCQUNoRTs7O0lBREE7SUFBSixXQUFJLFNBQUo7Ozs7b0JBUko7TUFBQTtNQUFrQiwyQ0FDakI7VUFBQTtVQUFBLG1EQUFBO1VBQUE7Y0FBQSxrQ0FBNkIsMkJBQXlFO2lCQUFBLDZCQUNyRztVQUFBO1VBQUEsZ0JBQUksMENBQXlCO1VBQUEseUJBQzdCO1VBQUE7VUFBQSw4QkFBNEI7TUFDdkIsMkNBQ047VUFBQTtVQUFBLDRDQUF1QjtVQUFBLFdBQ3RCO1VBQUEsOEJBQUE7d0JBQUEsbUNBSU07VUFBQSxXQUNOO1VBQUE7VUFBQSxnQkFBMEIsNkNBQ3pCO1VBQUE7VUFBQSwwREFBc0Q7VUFBQSx5QkFDakQsMkNBQ0Q7aUJBQUEsMkJBQ0Q7OztRQWR3QjtRQUE3QixXQUE2QixTQUE3QjtRQUs0QjtRQUEzQixZQUEyQixTQUEzQjs7O1FBSkk7UUFBQTtRQVVFO1FBQUwsWUFBSyxTQUFMOzs7O29CQ1pIO01BQUE7YUFBQTtvQ0FBQTtJQUFBOzs7OyJ9
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYmx1ZWJlYXJkL2ZsYXRsYW5kY2h1cmNoLmNvbS9kaXN0L25nZmFjdG9yeS9zcmMvYXBwL3Bvc3QvcG9zdC5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwic291cmNlcyI6WyIvaG9tZS9ibHVlYmVhcmQvZmxhdGxhbmRjaHVyY2guY29tL2Rpc3QvbmdmYWN0b3J5L3NyYy9hcHAvcG9zdC9wb3N0LmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0dBSUc7QUFDRixvQkFBb0I7O0FBR3JCLHNEQUF3RDtBQUN4RCxrQ0FBb0M7QUFDcEMsb0NBQXNDO0FBQ3RDLCtEQUFpRTtBQUNqRSxrQ0FBb0M7QUFDcEMsb0NBQXNDO0FBQ3RDLDhDQUFnRDtBQUNoRCxJQUFNLG9CQUFvQixHQUFTLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2xDLFFBQUEsd0JBQXdCLEdBQW9CLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBQyxhQUFhLEVBQUMsQ0FBQztJQUM3RSxNQUFNLEVBQUMsb0JBQW9CLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUM7QUFDMUMsOEJBQThCLEVBQU07SUFDbEMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxJQUFZLEVBQUUsSUFBWSxFQUFDLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBWSxFQUNqRixJQUFZLEVBQUUsSUFBWSxFQUFFLElBQVksRUFBRSxJQUFZLEVBQUUsSUFBWSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBRSxFQUFFO1lBQy9FLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQVksRUFBQyxDQUFDLEVBQUUsRUFBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFZLEVBQUMsVUFBQyxHQUFHLEVBQUMsRUFBRTtRQUMxRCxJQUFNLFNBQVMsR0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUMzQyxHQUFHLENBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEIsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBQ0QsOEJBQThCLEVBQU07SUFDbEMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxJQUFZLEVBQUUsSUFBWSxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLE9BQU87Z0JBQy9FLGVBQWUsQ0FBQyxDQUFDLEVBQUUsSUFBWSxFQUFFLElBQVksRUFBRSxJQUFZLEVBQUUsSUFBWSxFQUFFLElBQVksQ0FBQyxDQUFDO1FBQ3pGLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQVksRUFBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLElBQVksRUFDekUsSUFBWSxFQUFDLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBWSxFQUFFLElBQVksRUFBRSxJQUFZLEVBQUUsSUFBWSxFQUMzRSxJQUFZLEVBQUUsSUFBWSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFZLEVBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQy9FLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFZLEVBQUUsSUFBWSxFQUFDLENBQUMsRUFBRSxJQUFZLEVBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUMzRixFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxNQUFNLEVBQUUsSUFBWSxFQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsT0FBTyxFQUFDLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFDLEVBQUUsQ0FBQyxXQUFXO1lBQzNFLEVBQUUsQ0FBQyxlQUFlLENBQUMsRUFBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLENBQUMsRUFBQyxTQUFTLENBQUMsRUFBQyxFQUFFLElBQVksQ0FBQyxFQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUM1RSxJQUFZLEVBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBWSxFQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsVUFBQyxHQUFHLEVBQy9FLEVBQUU7UUFDSixJQUFJLEdBQUcsR0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDO1FBQzNCLElBQU0sU0FBUyxHQUFPLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO1FBQzlDLEdBQUcsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxTQUFTLENBQUMsQ0FBQztJQUN4QixDQUFDLEVBQUUsSUFBWSxDQUFDLENBQUM7QUFDbkIsQ0FBQztBQUNELDhCQUFxQyxFQUFNO0lBQ3pDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsSUFBWSxFQUFFLElBQVksRUFBQyxFQUFFLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxPQUFPO2dCQUNoRixNQUFNLENBQUMsQ0FBQyxFQUFFLElBQVksRUFBRSxJQUFZLEVBQUUsSUFBWSxFQUFFLElBQVksRUFBRSxJQUFZLENBQUMsQ0FBQztRQUNoRixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFZLEVBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxJQUFZLEVBQ3ZFLElBQVksRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLElBQVksRUFBRSxJQUFZLEVBQzlFLElBQVksRUFBRSxJQUFZLEVBQUUsSUFBWSxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxNQUFNLEVBQUUsSUFBWSxFQUMxRSxDQUFDLEVBQUMsRUFBRSxDQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUMsRUFBRSxDQUFDLFVBQVUsRUFBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO2dCQUNuRSxTQUFTLENBQUMsRUFBQyxFQUFFLElBQVksQ0FBQyxFQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLEVBQUMsa0JBQWtCLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBRSxFQUFFO1lBQ3hFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBWSxFQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsSUFBWSxFQUFFLElBQVksRUFDbkYsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFZLEVBQUUsSUFBWSxFQUFFLElBQVksRUFBRSxJQUFZLEVBQUUsSUFBWSxFQUMzRSxJQUFZLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFZLEVBQUMsQ0FBQyxFQUFFLEVBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUMzRSxJQUFZLEVBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxJQUFZLEVBQUUsSUFBWSxFQUN4RSxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxJQUFZLEVBQUUsSUFBWSxFQUFFLElBQVksRUFDdkUsSUFBWSxFQUFFLElBQVksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBWSxFQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM1RSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFZLEVBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLENBQUMsRUFBRSxJQUFZLEVBQ3hFLElBQVksRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxJQUFZLEVBQUUsSUFBWSxFQUN4RSxJQUFZLEVBQUUsSUFBWSxFQUFFLElBQVksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBWSxFQUM1RSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBWSxFQUFFLElBQVksRUFBQyxDQUFDLEVBQUUsSUFBWSxFQUMvRSxvQkFBb0IsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsS0FBSyxFQUFFLElBQVksRUFBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLElBQUksRUFBQyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0I7WUFDcEYsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxFQUFDLE1BQU0sQ0FBQyxFQUFDLEVBQUUsSUFBWSxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBWSxFQUNqRixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsQ0FBQyxFQUFFLElBQVksRUFBRSxJQUFZLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsT0FBTztnQkFDN0UsY0FBYyxDQUFDLENBQUMsRUFBRSxJQUFZLEVBQUUsSUFBWSxFQUFFLElBQVksRUFBRSxJQUFZLEVBQ3ZFLElBQVksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBWSxFQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFDL0UsQ0FBQyxFQUFFLElBQVksRUFBRSxJQUFZLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBRSxFQUFZLEVBQUMsQ0FBQyxDQUFDLENBQUMs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SUFBWSxDQUFDLENBQUM7QUFDbkIsQ0FBQztBQVBELDhEQU9DO0FBQ1ksUUFBQSxzQkFBc0IsR0FBeUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQzFGLEVBQUUsQ0FBQyxhQUFhLEVBQUMseUJBQXlCLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBRSxFQUFZLENBQUMsQ0FBQztBQUNwRSwwakVBQTBqRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVvdmVydmlldyBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IHRoZSBBbmd1bGFyIHRlbXBsYXRlIGNvbXBpbGVyLlxuICogRG8gbm90IGVkaXQuXG4gKiBAc3VwcHJlc3Mge3N1c3BpY2lvdXNDb2RlLHVzZWxlc3NDb2RlLG1pc3NpbmdQcm9wZXJ0aWVzLG1pc3NpbmdPdmVycmlkZX1cbiAqL1xuIC8qIHRzbGludDpkaXNhYmxlICovXG5cblxuaW1wb3J0ICogYXMgaTAgZnJvbSAnLi9wb3N0LmNvbXBvbmVudC5jc3Muc2hpbS5uZ3N0eWxlJztcbmltcG9ydCAqIGFzIGkxIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgaTIgZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCAqIGFzIGkzIGZyb20gJy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvcG9zdC9wb3N0LmNvbXBvbmVudCc7XG5pbXBvcnQgKiBhcyBpNCBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCAqIGFzIGk1IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgKiBhcyBpNiBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmNvbnN0IHN0eWxlc19Qb3N0Q29tcG9uZW50OmFueVtdID0gW2kwLnN0eWxlc107XG5leHBvcnQgY29uc3QgUmVuZGVyVHlwZV9Qb3N0Q29tcG9uZW50OmkxLlJlbmRlcmVyVHlwZTIgPSBpMS7JtWNydCh7ZW5jYXBzdWxhdGlvbjowLFxuICAgIHN0eWxlczpzdHlsZXNfUG9zdENvbXBvbmVudCxkYXRhOnt9fSk7XG5mdW5jdGlvbiBWaWV3X1Bvc3RDb21wb25lbnRfMihfbDphbnkpOmkxLsm1Vmlld0RlZmluaXRpb24ge1xuICByZXR1cm4gaTEuybV2aWQoMCxbKF9sKCkoKSxpMS7JtWVsZCgwLDAsKG51bGwgYXMgYW55KSwobnVsbCBhcyBhbnkpLDEsJ2xpJywoW10gYXMgYW55W10pLFxuICAgICAgKG51bGwgYXMgYW55KSwobnVsbCBhcyBhbnkpLChudWxsIGFzIGFueSksKG51bGwgYXMgYW55KSwobnVsbCBhcyBhbnkpKSksKF9sKCkoKSxcbiAgICAgIGkxLsm1dGVkKDEsKG51bGwgYXMgYW55KSxbJycsJyddKSldLChudWxsIGFzIGFueSksKF9jayxfdikgPT4ge1xuICAgIGNvbnN0IGN1cnJWYWxfMDphbnkgPSBfdi5jb250ZXh0LiRpbXBsaWNpdDtcbiAgICBfY2soX3YsMSwwLGN1cnJWYWxfMCk7XG4gIH0pO1xufVxuZnVuY3Rpb24gVmlld19Qb3N0Q29tcG9uZW50XzEoX2w6YW55KTppMS7JtVZpZXdEZWZpbml0aW9uIHtcbiAgcmV0dXJuIGkxLsm1dmlkKDAsWyhfbCgpKCksaTEuybVlbGQoMCwwLChudWxsIGFzIGFueSksKG51bGwgYXMgYW55KSw3LCdkaXYnLFtbJ2NsYXNzJyxcbiAgICAgICdwYWdlLWNhcmQtbmF2J11dLChudWxsIGFzIGFueSksKG51bGwgYXMgYW55KSwobnVsbCBhcyBhbnkpLChudWxsIGFzIGFueSksKG51bGwgYXMgYW55KSkpLFxuICAgICAgKF9sKCkoKSxpMS7JtXRlZCgtMSwobnVsbCBhcyBhbnkpLFsnXFxuXHRcdFx0J10pKSwoX2woKSgpLGkxLsm1ZWxkKDIsMCwobnVsbCBhcyBhbnkpLFxuICAgICAgICAgIChudWxsIGFzIGFueSksNCwndWwnLChbXSBhcyBhbnlbXSksKG51bGwgYXMgYW55KSwobnVsbCBhcyBhbnkpLChudWxsIGFzIGFueSksXG4gICAgICAgICAgKG51bGwgYXMgYW55KSwobnVsbCBhcyBhbnkpKSksKF9sKCkoKSxpMS7JtXRlZCgtMSwobnVsbCBhcyBhbnkpLFsnXFxuXHRcdFx0XHQnXSkpLFxuICAgICAgKF9sKCkoKSxpMS7JtWFuZCgxNjc3NzIxNiwobnVsbCBhcyBhbnkpLChudWxsIGFzIGFueSksMSwobnVsbCBhcyBhbnkpLFZpZXdfUG9zdENvbXBvbmVudF8yKSksXG4gICAgICBpMS7JtWRpZCg1LDgwMjgxNiwobnVsbCBhcyBhbnkpLDAsaTIuTmdGb3JPZixbaTEuVmlld0NvbnRhaW5lclJlZixpMS5UZW1wbGF0ZVJlZixcbiAgICAgICAgICBpMS5JdGVyYWJsZURpZmZlcnNdLHtuZ0Zvck9mOlswLCduZ0Zvck9mJ119LChudWxsIGFzIGFueSkpLChfbCgpKCksaTEuybV0ZWQoLTEsXG4gICAgICAgICAgKG51bGwgYXMgYW55KSxbJ1xcblx0XHRcdCddKSksKF9sKCkoKSxpMS7JtXRlZCgtMSwobnVsbCBhcyBhbnkpLFsnXFxuXHRcdCddKSldLChfY2ssXG4gICAgICBfdikgPT4ge1xuICAgIHZhciBfY286YW55ID0gX3YuY29tcG9uZW50O1xuICAgIGNvbnN0IGN1cnJWYWxfMDphbnkgPSBfY28ucGFnZURhdGEubWV0YUZpZWxkcztcbiAgICBfY2soX3YsNSwwLGN1cnJWYWxfMCk7XG4gIH0sKG51bGwgYXMgYW55KSk7XG59XG5leHBvcnQgZnVuY3Rpb24gVmlld19Qb3N0Q29tcG9uZW50XzAoX2w6YW55KTppMS7JtVZpZXdEZWZpbml0aW9uIHtcbiAgcmV0dXJuIGkxLsm1dmlkKDAsWyhfbCgpKCksaTEuybVlbGQoMCwwLChudWxsIGFzIGFueSksKG51bGwgYXMgYW55KSwyMiwnZGl2JyxbWydjbGFzcycsXG4gICAgICAncGFnZSddXSwobnVsbCBhcyBhbnkpLChudWxsIGFzIGFueSksKG51bGwgYXMgYW55KSwobnVsbCBhcyBhbnkpLChudWxsIGFzIGFueSkpKSxcbiAgICAgIChfbCgpKCksaTEuybV0ZWQoLTEsKG51bGwgYXMgYW55KSxbJ1xcblx0J10pKSwoX2woKSgpLGkxLsm1ZWxkKDIsMCwobnVsbCBhcyBhbnkpLFxuICAgICAgICAgIChudWxsIGFzIGFueSksOCwnZGl2JyxbWydjbGFzcycsJ3BhZ2UtYmFja2dyb3VuZCddXSwobnVsbCBhcyBhbnkpLChudWxsIGFzIGFueSksXG4gICAgICAgICAgKG51bGwgYXMgYW55KSwobnVsbCBhcyBhbnkpLChudWxsIGFzIGFueSkpKSxpMS7JtWRpZCgzLDI3ODUyOCwobnVsbCBhcyBhbnkpLFxuICAgICAgICAgIDAsaTIuTmdTdHlsZSxbaTEuS2V5VmFsdWVEaWZmZXJzLGkxLkVsZW1lbnRSZWYsaTEuUmVuZGVyZXJdLHtuZ1N0eWxlOlswLFxuICAgICAgICAgICAgICAnbmdTdHlsZSddfSwobnVsbCBhcyBhbnkpKSxpMS7JtXBvZCg0LHsnYmFja2dyb3VuZC1pbWFnZSc6MH0pLChfbCgpKCksXG4gICAgICAgICAgaTEuybV0ZWQoLTEsKG51bGwgYXMgYW55KSxbJ1xcblx0XHQnXSkpLChfbCgpKCksaTEuybVlbGQoNiwwLChudWxsIGFzIGFueSksKG51bGwgYXMgYW55KSxcbiAgICAgICAgICAxLCdoMScsKFtdIGFzIGFueVtdKSwobnVsbCBhcyBhbnkpLChudWxsIGFzIGFueSksKG51bGwgYXMgYW55KSwobnVsbCBhcyBhbnkpLFxuICAgICAgICAgIChudWxsIGFzIGFueSkpKSwoX2woKSgpLGkxLsm1dGVkKDcsKG51bGwgYXMgYW55KSxbJycsJyddKSksKF9sKCkoKSxpMS7JtXRlZCgtMSxcbiAgICAgICAgICAobnVsbCBhcyBhbnkpLFsnXFxuXHRcdCddKSksKF9sKCkoKSxpMS7JtWVsZCg5LDAsKG51bGwgYXMgYW55KSwobnVsbCBhcyBhbnkpLFxuICAgICAgICAgIDAsJ2RpdicsW1snY2xhc3MnLCdncmFkaWVudCddXSwobnVsbCBhcyBhbnkpLChudWxsIGFzIGFueSksKG51bGwgYXMgYW55KSxcbiAgICAgICAgICAobnVsbCBhcyBhbnkpLChudWxsIGFzIGFueSkpKSwoX2woKSgpLGkxLsm1dGVkKC0xLChudWxsIGFzIGFueSksWydcXG5cdCddKSksXG4gICAgICAoX2woKSgpLGkxLsm1dGVkKC0xLChudWxsIGFzIGFueSksWydcXG5cdCddKSksKF9sKCkoKSxpMS7JtWVsZCgxMiwwLChudWxsIGFzIGFueSksXG4gICAgICAgICAgKG51bGwgYXMgYW55KSw5LCdkaXYnLFtbJ2NsYXNzJywncGFnZS1jYXJkJ11dLChudWxsIGFzIGFueSksKG51bGwgYXMgYW55KSxcbiAgICAgICAgICAobnVsbCBhcyBhbnkpLChudWxsIGFzIGFueSksKG51bGwgYXMgYW55KSkpLChfbCgpKCksaTEuybV0ZWQoLTEsKG51bGwgYXMgYW55KSxcbiAgICAgICAgICBbJ1xcblx0XHQnXSkpLChfbCgpKCksaTEuybVhbmQoMTY3NzcyMTYsKG51bGwgYXMgYW55KSwobnVsbCBhcyBhbnkpLDEsKG51bGwgYXMgYW55KSxcbiAgICAgICAgICBWaWV3X1Bvc3RDb21wb25lbnRfMSkpLGkxLsm1ZGlkKDE1LDE2Mzg0LChudWxsIGFzIGFueSksMCxpMi5OZ0lmLFtpMS5WaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICAgIGkxLlRlbXBsYXRlUmVmXSx7bmdJZjpbMCwnbmdJZiddfSwobnVsbCBhcyBhbnkpKSwoX2woKSgpLGkxLsm1dGVkKC0xLChudWxsIGFzIGFueSksXG4gICAgICAgICAgWydcXG5cdFx0J10pKSwoX2woKSgpLGkxLsm1ZWxkKDE3LDAsKG51bGwgYXMgYW55KSwobnVsbCBhcyBhbnkpLDMsJ2RpdicsW1snY2xhc3MnLFxuICAgICAgICAgICdwb3N0LWNvbnRlbnQnXV0sKG51bGwgYXMgYW55KSwobnVsbCBhcyBhbnkpLChudWxsIGFzIGFueSksKG51bGwgYXMgYW55KSxcbiAgICAgICAgICAobnVsbCBhcyBhbnkpKSksKF9sKCkoKSxpMS7JtXRlZCgtMSwobnVsbCBhcyBhbnkpLFsnXFxuXHRcdFx0J10pKSwoX2woKSgpLGkxLsm1ZWxkKDE5LFxuICAgICAgICAgIDAsKG51bGwgYXMgYW55KSwobnVsbCBhcyBhbnkpLDAsJ2RpdicsKFtdIGFzIGFueVtdKSxbWzgsJ2lubmVySFRNTCcsMV1dLFxuICAgICAgICAgIChudWxsIGFzIGFueSksKG51bGwgYXMgYW55KSwobnVsbCBhcyBhbnkpLChudWxsIGFzIGFueSkpKSwoX2woKSgpLGkxLsm1dGVkKC0xLFxuICAgICAgICAgIChudWxsIGFzIGFueSksWydcXG5cdFx0J10pKSwoX2woKSgpLGkxLsm1dGVkKC0xLChudWxsIGFzIGFueSksWydcXG5cdCddKSksKF9sKCkoKSxcbiAgICAgICAgICBpMS7JtXRlZCgtMSwobnVsbCBhcyBhbnkpLFsnXFxuJ10pKSwoX2woKSgpLGkxLsm1dGVkKC0xLChudWxsIGFzIGFueSksWydcXG4nXSkpXSxcbiAgICAgIChfY2ssX3YpID0+IHtcbiAgICAgICAgdmFyIF9jbzppMy5Qb3N0Q29tcG9uZW50ID0gX3YuY29tcG9uZW50O1xuICAgICAgICBjb25zdCBjdXJyVmFsXzA6YW55ID0gX2NrKF92LDQsMCwoKCd1cmwoJyArIF9jby5wYWdlRGF0YS5qdW1ib3Ryb25JbWFnZSkgKyAnKScpKTtcbiAgICAgICAgX2NrKF92LDMsMCxjdXJyVmFsXzApO1xuICAgICAgICBjb25zdCBjdXJyVmFsXzI6YW55ID0gX2NvLnBhZ2VEYXRhLm1ldGFGaWVsZHMubGVuZ3RoO1xuICAgICAgICBfY2soX3YsMTUsMCxjdXJyVmFsXzIpO1xuICAgICAgfSwoX2NrLF92KSA9PiB7XG4gICAgICAgIHZhciBfY286aTMuUG9zdENvbXBvbmVudCA9IF92LmNvbXBvbmVudDtcbiAgICAgICAgY29uc3QgY3VyclZhbF8xOmFueSA9IF9jby5wYWdlRGF0YS50aXRsZTtcbiAgICAgICAgX2NrKF92LDcsMCxjdXJyVmFsXzEpO1xuICAgICAgICBjb25zdCBjdXJyVmFsXzM6YW55ID0gX2NvLnRvTWFya2Rvd24oX2NvLnBhZ2VEYXRhLmNvbnRlbnQpO1xuICAgICAgICBfY2soX3YsMTksMCxjdXJyVmFsXzMpO1xuICAgICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gVmlld19Qb3N0Q29tcG9uZW50X0hvc3RfMChfbDphbnkpOmkxLsm1Vmlld0RlZmluaXRpb24ge1xuICByZXR1cm4gaTEuybV2aWQoMCxbKF9sKCkoKSxpMS7JtWVsZCgwLDAsKG51bGwgYXMgYW55KSwobnVsbCBhcyBhbnkpLDEsJ2FwcC1wb3N0JywoW10gYXMgYW55W10pLFxuICAgICAgKG51bGwgYXMgYW55KSwobnVsbCBhcyBhbnkpLChudWxsIGFzIGFueSksVmlld19Qb3N0Q29tcG9uZW50XzAsUmVuZGVyVHlwZV9Qb3N0Q29tcG9uZW50KSksXG4gICAgICBpMS7JtWRpZCgxLDExNDY4OCwobnVsbCBhcyBhbnkpLDAsaTMuUG9zdENvbXBvbmVudCxbaTQuSHR0cCxpNS5BY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICBpNS5Sb3V0ZXIsaTYuTWV0YSxpNi5UaXRsZV0sKG51bGwgYXMgYW55KSwobnVsbCBhcyBhbnkpKV0sKF9jayxfdikgPT4ge1xuICAgIF9jayhfdiwxLDApO1xuICB9LChudWxsIGFzIGFueSkpO1xufVxuZXhwb3J0IGNvbnN0IFBvc3RDb21wb25lbnROZ0ZhY3Rvcnk6aTEuQ29tcG9uZW50RmFjdG9yeTxpMy5Qb3N0Q29tcG9uZW50PiA9IGkxLsm1Y2NmKCdhcHAtcG9zdCcsXG4gICAgaTMuUG9zdENvbXBvbmVudCxWaWV3X1Bvc3RDb21wb25lbnRfSG9zdF8wLHt9LHt9LChbXSBhcyBhbnlbXSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUptYVd4bElqb2lMMmh2YldVdllteDFaV0psWVhKa0wyWnNZWFJzWVc1a1kyaDFjbU5vTG1OdmJTOXpjbU12WVhCd0wzQnZjM1F2Y0c5emRDNWpiMjF3YjI1bGJuUXVibWRtWVdOMGIzSjVMblJ6SWl3aWRtVnljMmx2YmlJNk15d2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2libWM2THk4dmFHOXRaUzlpYkhWbFltVmhjbVF2Wm14aGRHeGhibVJqYUhWeVkyZ3VZMjl0TDNOeVl5OWhjSEF2Y0c5emRDOXdiM04wTG1OdmJYQnZibVZ1ZEM1MGN5SXNJbTVuT2k4dkwyaHZiV1V2WW14MVpXSmxZWEprTDJac1lYUnNZVzVrWTJoMWNtTm9MbU52YlM5emNtTXZZWEJ3TDNCdmMzUXZjRzl6ZEM1amIyMXdiMjVsYm5RdWFIUnRiQ0lzSW01bk9pOHZMMmh2YldVdllteDFaV0psWVhKa0wyWnNZWFJzWVc1a1kyaDFjbU5vTG1OdmJTOXpjbU12WVhCd0wzQnZjM1F2Y0c5emRDNWpiMjF3YjI1bGJuUXVkSE11VUc5emRFTnZiWEJ2Ym1WdWRGOUliM04wTG1oMGJXd2lYU3dpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpSUNJc0lqeGthWFlnWTJ4aGMzTTlYQ0p3WVdkbFhDSStYRzVjZER4a2FYWWdZMnhoYzNNOVhDSndZV2RsTFdKaFkydG5jbTkxYm1SY0lpQmJibWRUZEhsc1pWMDlYQ0o3SjJKaFkydG5jbTkxYm1RdGFXMWhaMlVuT2lBbmRYSnNLQ2NnS3lCd1lXZGxSR0YwWVM1cWRXMWliM1J5YjI1SmJXRm5aU0FySUNjcEozMWNJajVjYmx4MFhIUThhREUrZTNzZ2NHRm5aVVJoZEdFdWRHbDBiR1VnZlgwOEwyZ3hQbHh1WEhSY2REeGthWFlnWTJ4aGMzTTlYQ0puY21Ga2FXVnVkRndpUGp3dlpHbDJQbHh1WEhROEwyUnBkajVjYmx4MFBHUnBkaUJqYkdGemN6MWNJbkJoWjJVdFkyRnlaRndpUGx4dVhIUmNkRHhrYVhZZ1kyeGhjM005WENKd1lXZGxMV05oY21RdGJtRjJYQ0lnS201blNXWTlYQ0p3WVdkbFJHRjBZUzV0WlhSaFJtbGxiR1J6TG14bGJtZDBhRndpUGx4dVhIUmNkRngwUEhWc1BseHVYSFJjZEZ4MFhIUThiR2tnS201blJtOXlQVndpYkdWMElHMWxkR0ZKZEdWdElHOW1JSEJoWjJWRVlYUmhMbTFsZEdGR2FXVnNaSE5jSWo1N2V5QnRaWFJoU1hSbGJTQjlmVHd2YkdrK1hHNWNkRngwWEhROEwzVnNQbHh1WEhSY2REd3ZaR2wyUGx4dVhIUmNkRHhrYVhZZ1kyeGhjM005WENKd2IzTjBMV052Ym5SbGJuUmNJajVjYmx4MFhIUmNkRHhrYVhZZ1cybHVibVZ5U0hSdGJGMDlYQ0owYjAxaGNtdGtiM2R1S0hCaFoyVkVZWFJoTG1OdmJuUmxiblFwWENJK1BDOWthWFkrWEc1Y2RGeDBQQzlrYVhZK1hHNWNkRHd2WkdsMlBseHVQQzlrYVhZK1hHNGlMQ0k4WVhCd0xYQnZjM1ErUEM5aGNIQXRjRzl6ZEQ0aVhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQk96czdPenM3T3pzN096czdPenM3T3pzN08yOUNRMUZKTzAxQlFVRXNkMFZCUVdsRU8yRkJRVUU3U1VGQlFUdEpRVUZCT3pzN08yOUNRVVp1UkR0TlFVRkJPMDFCUVRoRUxEWkRRVU0zUkR0VlFVRkJPMVZCUVVFc09FSkJRVWs3VFVGRFNEdGhRVUZCT3pSQ1FVRkJMSGxEUVVGdlJUdFZRVUZCTERCQ1FVTm9SVHM3TzBsQlJFRTdTVUZCU2l4WFFVRkpMRk5CUVVvN096czdiMEpCVWtvN1RVRkJRVHROUVVGclFpd3lRMEZEYWtJN1ZVRkJRVHRWUVVGQkxHMUVRVUZCTzFWQlFVRTdZMEZCUVN4clEwRkJOa0lzTWtKQlFYbEZPMmxDUVVGQkxEWkNRVU55Unp0VlFVRkJPMVZCUVVFc1owSkJRVWtzTUVOQlFYbENPMVZCUVVFc2VVSkJRemRDTzFWQlFVRTdWVUZCUVN3NFFrRkJORUk3VFVGRGRrSXNNa05CUTA0N1ZVRkJRVHRWUVVGQkxEUkRRVUYxUWp0VlFVRkJMRmRCUTNSQ08xVkJRVUVzT0VKQlFVRTdkMEpCUVVFc2JVTkJTVTA3VlVGQlFTeFhRVU5PTzFWQlFVRTdWVUZCUVN4blFrRkJNRUlzTmtOQlEzcENPMVZCUVVFN1ZVRkJRU3d3UkVGQmMwUTdWVUZCUVN4NVFrRkRha1FzTWtOQlEwUTdhVUpCUVVFc01rSkJRMFE3T3p0UlFXUjNRanRSUVVFM1FpeFhRVUUyUWl4VFFVRTNRanRSUVVzMFFqdFJRVUV6UWl4WlFVRXlRaXhUUVVFelFqczdPMUZCU2trN1VVRkJRVHRSUVZWRk8xRkJRVXdzV1VGQlN5eFRRVUZNT3pzN08yOUNRMXBJTzAxQlFVRTdZVUZCUVR0dlEwRkJRVHRKUVVGQk96czdPeUo5XG4iXX0=