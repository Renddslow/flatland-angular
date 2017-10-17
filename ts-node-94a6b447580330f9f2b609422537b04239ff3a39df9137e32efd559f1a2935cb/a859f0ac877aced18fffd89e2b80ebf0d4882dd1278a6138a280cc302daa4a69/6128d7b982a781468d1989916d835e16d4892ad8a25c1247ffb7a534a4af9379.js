"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("./share.component.css.shim.ngstyle");
var i1 = require("@angular/core");
var i2 = require("@angular/common");
var i3 = require("../../../../../../src/app/video/share/share.component");
var styles_ShareComponent = [i0.styles];
exports.RenderType_ShareComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_ShareComponent, data: {} });
function View_ShareComponent_2(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, 'li', [], null, null, null, null, null)), (_l()(),
            i1.ɵted(-1, null, ['\n			'])), (_l()(), i1.ɵeld(2, 0, null, null, 1, 'a', [], [[8, 'href', 4]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.openLink(_v.context.$implicit.url) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 0, 'i', [], [[8, 'className', 0]], null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['\n		']))], null, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.url;
        _ck(_v, 2, 0, currVal_0);
        var currVal_1 = i1.ɵinlineInterpolate(1, 'fa ', _v.context.$implicit.icon, '');
        _ck(_v, 3, 0, currVal_1);
    });
}
function View_ShareComponent_1(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 19, 'div', [['class',
                'modal social']], null, null, null, null, null)),
        (_l()(), i1.ɵted(-1, null, ['\n	'])), (_l()(), i1.ɵeld(2, 0, null, null, 2, 'span', [['class', 'modal-header']], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['SHARE '])), (_l()(), i1.ɵeld(4, 0, null, null, 0, 'i', [['aria-hidden',
                'true'], ['class', 'fa fa-share']], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['\n	'])),
        (_l()(), i1.ɵeld(6, 0, null, null, 1, 'div', [['class', 'modal-close']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.closeModal() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 0, 'i', [['aria-hidden', 'true'], ['class', 'fa fa-times']], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['\n	'])), (_l()(), i1.ɵeld(9, 0, null, null, 4, 'ul', [], null, null, null, null, null)),
        (_l()(), i1.ɵted(-1, null, ['\n		'])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ShareComponent_2)), i1.ɵdid(12, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i1.ɵted(-1, null, ['\n	'])), (_l()(), i1.ɵted(-1, null, ['\n	'])), (_l()(), i1.ɵeld(15, 0, null, null, 0, 'input', [['id', 'fc-share-link'], ['type',
                'text']], [[8, 'value', 0]], null, null, null, null)),
        (_l()(), i1.ɵted(-1, null, ['\n	'])), (_l()(), i1.ɵeld(17, 0, null, null, 1, 'a', [['class', 'clipboard-copy'], ['href', '/watch']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.copyLink($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i1.ɵted(18, null, ['', ''])),
        (_l()(), i1.ɵted(-1, null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.socialLinks;
        _ck(_v, 12, 0, currVal_0);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = i1.ɵinlineInterpolate(1, 'https://flatlandchurch.com/watch/', _co.sermonData['permalink'], '');
        _ck(_v, 15, 0, currVal_1);
        var currVal_2 = _co.copyText;
        _ck(_v, 18, 0, currVal_2);
    });
}
function View_ShareComponent_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵand(16777216, null, null, 1, null, View_ShareComponent_1)), i1.ɵdid(1, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef,
            i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i1.ɵted(-1, null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.modalOpen;
        _ck(_v, 1, 0, currVal_0);
    }, null);
}
exports.View_ShareComponent_0 = View_ShareComponent_0;
function View_ShareComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, 'share', [], null, null, null, View_ShareComponent_0, exports.RenderType_ShareComponent)),
        i1.ɵdid(1, 114688, null, 0, i3.ShareComponent, [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
exports.View_ShareComponent_Host_0 = View_ShareComponent_Host_0;
exports.ShareComponentNgFactory = i1.ɵccf('share', i3.ShareComponent, View_ShareComponent_Host_0, { sermonData: 'sermonData', modalOpen: 'modalOpen' }, {}, []);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvYmx1ZWJlYXJkL2ZsYXRsYW5kY2h1cmNoLmNvbS9zcmMvYXBwL3ZpZGVvL3NoYXJlL3NoYXJlLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9ob21lL2JsdWViZWFyZC9mbGF0bGFuZGNodXJjaC5jb20vc3JjL2FwcC92aWRlby9zaGFyZS9zaGFyZS5jb21wb25lbnQudHMiLCJuZzovLy9ob21lL2JsdWViZWFyZC9mbGF0bGFuZGNodXJjaC5jb20vc3JjL2FwcC92aWRlby9zaGFyZS9zaGFyZS5jb21wb25lbnQuaHRtbCIsIm5nOi8vL2hvbWUvYmx1ZWJlYXJkL2ZsYXRsYW5kY2h1cmNoLmNvbS9zcmMvYXBwL3ZpZGVvL3NoYXJlL3NoYXJlLmNvbXBvbmVudC50cy5TaGFyZUNvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxkaXYgY2xhc3M9XCJtb2RhbCBzb2NpYWxcIiAqbmdJZj1cIm1vZGFsT3BlblwiPlxuXHQ8c3BhbiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlNIQVJFIDxpIGNsYXNzPVwiZmEgZmEtc2hhcmVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9zcGFuPlxuXHQ8ZGl2IGNsYXNzPVwibW9kYWwtY2xvc2VcIiAoY2xpY2spPVwiY2xvc2VNb2RhbCgpXCI+PGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2Rpdj5cblx0PHVsPlxuXHRcdDxsaSAqbmdGb3I9XCJsZXQgc29jaWFsIG9mIHNvY2lhbExpbmtzXCI+XG5cdFx0XHQ8YSBbaHJlZl09XCJzb2NpYWwudXJsXCIgKGNsaWNrKT1cIm9wZW5MaW5rKHNvY2lhbC51cmwpXCI+PGkgY2xhc3M9XCJmYSB7eyBzb2NpYWwuaWNvbiB9fVwiPjwvaT48L2E+XG5cdFx0PC9saT5cblx0PC91bD5cblx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJmYy1zaGFyZS1saW5rXCIgdmFsdWU9XCJodHRwczovL2ZsYXRsYW5kY2h1cmNoLmNvbS93YXRjaC97eyBzZXJtb25EYXRhWydwZXJtYWxpbmsnXSB9fVwiPlxuXHQ8YSBjbGFzcz1cImNsaXBib2FyZC1jb3B5XCIgaHJlZj1cIi93YXRjaFwiIChjbGljayk9XCJjb3B5TGluaygkZXZlbnQpXCI+e3sgY29weVRleHQgfX08L2E+XG48L2Rpdj5cbiIsIjxzaGFyZT48L3NoYXJlPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDSUU7TUFBQSx3RUFBdUM7YUFBQSw4QkFDdEM7TUFBQTtRQUFBO1FBQUE7UUFBdUI7VUFBQTtVQUFBO1FBQUE7UUFBdkI7TUFBQSxnQ0FBc0Q7TUFBQTtNQUFBLGdCQUF3Qzs7SUFBM0Y7SUFBSCxXQUFHLFNBQUg7SUFBeUQ7UUFBQTtJQUFILFdBQUcsU0FBSDs7OztvQkFMekQ7TUFBQTtNQUE0QywyQ0FDM0M7VUFBQTtVQUFBLDRDQUEyQjtVQUFBLGFBQU07VUFBQTtVQUFBLDhCQUFxRDtNQUN0RjtVQUFBO1lBQUE7WUFBQTtZQUF5QjtjQUFBO2NBQUE7WUFBQTtZQUF6QjtVQUFBLGdDQUFnRDtVQUFBO1VBQUEsNENBQW9EO1VBQUEsVUFDcEc7VUFBQTtNQUFJLDRDQUNIO1VBQUEsNkRBQUE7VUFBQTtVQUFBLHVDQUVLO1VBQUEsVUFDRCwyQ0FDTDtVQUFBO2NBQUE7TUFBNkcsMkNBQzdHO1VBQUE7VUFBQTtZQUFBO1lBQUE7WUFBd0M7Y0FBQTtjQUFBO1lBQUE7WUFBeEM7VUFBQSxnQ0FBbUU7TUFBa0I7O0lBTGhGO0lBQUosWUFBSSxTQUFKOzs7SUFJcUM7UUFBQTtJQUF0QyxZQUFzQyxTQUF0QztJQUNtRTtJQUFBOzs7O29CQVRwRTtNQUFBLCtCQUFBO29CQUFBLG1DQVVNO01BQUE7O0lBVm9CO0lBQTFCLFdBQTBCLFNBQTFCOzs7O29CQ0FBO01BQUE7YUFBQTtVQUFBO0lBQUE7Ozs7OyJ9
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvYmx1ZWJlYXJkL2ZsYXRsYW5kY2h1cmNoLmNvbS9kaXN0L25nZmFjdG9yeS9zcmMvYXBwL3ZpZGVvL3NoYXJlL3NoYXJlLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJzb3VyY2VzIjpbIi9ob21lL2JsdWViZWFyZC9mbGF0bGFuZGNodXJjaC5jb20vZGlzdC9uZ2ZhY3Rvcnkvc3JjL2FwcC92aWRlby9zaGFyZS9zaGFyZS5jb21wb25lbnQubmdmYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztHQUlHO0FBQ0Ysb0JBQW9COztBQUdyQix1REFBeUQ7QUFDekQsa0NBQW9DO0FBQ3BDLG9DQUFzQztBQUN0QywwRUFBNEU7QUFDNUUsSUFBTSxxQkFBcUIsR0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNuQyxRQUFBLHlCQUF5QixHQUFvQixFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUMsYUFBYSxFQUFDLENBQUM7SUFDOUUsTUFBTSxFQUFDLHFCQUFxQixFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDO0FBQzNDLCtCQUErQixFQUFNO0lBQ25DLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsSUFBWSxFQUFFLElBQVksRUFBQyxDQUFDLEVBQUMsSUFBSSxFQUFFLEVBQVksRUFDakYsSUFBWSxFQUFFLElBQVksRUFBRSxJQUFZLEVBQUUsSUFBWSxFQUFFLElBQVksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRTtZQUMvRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQVksRUFBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUMsRUFBRSxDQUFDLElBQUksQ0FB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LEVBQUUsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNwQixDQUFDO1lBQ0QsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNaLENBQUMsRUFBRSxJQUFZLEVBQUUsSUFBWSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLElBQVksRUFBRSxJQUFZLEVBQy9FLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBQyxNQUFNLENBQUMsRUFBQyxDQUFDLE9BQU8sRUFBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLElBQVksRUFBRSxJQUFZLEVBQ2pGLElBQVksRUFBRSxJQUFZLEVBQUUsSUFBWSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFZLEVBQzVFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsSUFBWSxFQUFFLElBQVksRUFBQyxDQUFDLEVBQUMsSUFBSSxFQUFFLEVBQVksRUFDN0UsSUFBWSxFQUFFLElBQVksRUFBRSxJQUFZLEVBQUUsSUFBWSxFQUFFLElBQVksQ0FBQyxDQUFDO1FBQzNFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQVksRUFBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBWSxFQUM3RSxJQUFZLEVBQUMsQ0FBQyxFQUFFLElBQVksRUFBQyxxQkFBcUIsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsTUFBTSxFQUN0RSxJQUFZLEVBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUMsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUMsRUFBRSxDQUFDLFdBQVcsRUFBQyxFQUFFLENBQUMsZUFBZSxDQUFDLEVBQ2xGLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQyxFQUFDLFNBQVMsQ0FBQyxFQUFDLEVBQUUsSUFBWSxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBWSxFQUN2RSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFZLEVBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUN2RSxDQUFDLEVBQUUsSUFBWSxFQUFFLElBQVksRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUMsZUFBZSxDQUFDLEVBQUMsQ0FBQyxNQUFNO2dCQUNuRSxNQUFNLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBWSxFQUFFLElBQVksRUFBRSxJQUFZLEVBQUUsSUFBWSxDQUFDLENBQUM7UUFDMUYsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBWSxFQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUUsSUFBWSxFQUN4RSxJQUFZLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsT0FBTyxFQUFDLGdCQUFnQixDQUFDLEVBQUMsQ0FB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QUFDO1FBQ3BDLEdBQUcsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxTQUFTLENBQUMsQ0FBQztJQUN4QixDQUFDLEVBQUUsSUFBWSxDQUFDLENBQUM7QUFDbkIsQ0FBQztBQVRELHNEQVNDO0FBQ0Qsb0NBQTJDLEVBQU07SUFDL0MsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxJQUFZLEVBQUUsSUFBWSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUUsRUFBWSxFQUNwRixJQUFZLEVBQUUsSUFBWSxFQUFFLElBQVksRUFBQyxxQkFBcUIsRUFBQyxpQ0FBeUIsQ0FBQyxDQUFDO1FBQzNGLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBRSxJQUFZLEVBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsRUFBWSxFQUFFLElBQVksRUFDekUsSUFBWSxDQUFDLENBQUMsRUFBQyxVQUFDLEdBQUcsRUFBQyxFQUFFO1FBQzdCLEdBQUcsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2QsQ0FBQyxFQUFFLElBQVksQ0FBQyxDQUFDO0FBQ25CLENBQUM7QUFQRCxnRUFPQztBQUNZLFFBQUEsdUJBQXVCLEdBQTBDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUN6RixFQUFFLENBQUMsY0FBYyxFQUFDLDBCQUEwQixFQUFDLEVBQUMsVUFBVSxFQUFDLFlBQVksRUFBQyxTQUFTLEVBQUMsV0FBVyxFQUFDLEVBQzVGLEVBQUUsRUFBRSxFQUFZLENBQUMsQ0FBQztBQUN0Qiw4MUVBQTgxRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVvdmVydmlldyBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IHRoZSBBbmd1bGFyIHRlbXBsYXRlIGNvbXBpbGVyLlxuICogRG8gbm90IGVkaXQuXG4gKiBAc3VwcHJlc3Mge3N1c3BpY2lvdXNDb2RlLHVzZWxlc3NDb2RlLG1pc3NpbmdQcm9wZXJ0aWVzLG1pc3NpbmdPdmVycmlkZX1cbiAqL1xuIC8qIHRzbGludDpkaXNhYmxlICovXG5cblxuaW1wb3J0ICogYXMgaTAgZnJvbSAnLi9zaGFyZS5jb21wb25lbnQuY3NzLnNoaW0ubmdzdHlsZSc7XG5pbXBvcnQgKiBhcyBpMSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGkyIGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgKiBhcyBpMyBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL3ZpZGVvL3NoYXJlL3NoYXJlLmNvbXBvbmVudCc7XG5jb25zdCBzdHlsZXNfU2hhcmVDb21wb25lbnQ6YW55W10gPSBbaTAuc3R5bGVzXTtcbmV4cG9ydCBjb25zdCBSZW5kZXJUeXBlX1NoYXJlQ29tcG9uZW50OmkxLlJlbmRlcmVyVHlwZTIgPSBpMS7JtWNydCh7ZW5jYXBzdWxhdGlvbjowLFxuICAgIHN0eWxlczpzdHlsZXNfU2hhcmVDb21wb25lbnQsZGF0YTp7fX0pO1xuZnVuY3Rpb24gVmlld19TaGFyZUNvbXBvbmVudF8yKF9sOmFueSk6aTEuybVWaWV3RGVmaW5pdGlvbiB7XG4gIHJldHVybiBpMS7JtXZpZCgwLFsoX2woKSgpLGkxLsm1ZWxkKDAsMCwobnVsbCBhcyBhbnkpLChudWxsIGFzIGFueSksNCwnbGknLChbXSBhcyBhbnlbXSksXG4gICAgICAobnVsbCBhcyBhbnkpLChudWxsIGFzIGFueSksKG51bGwgYXMgYW55KSwobnVsbCBhcyBhbnkpLChudWxsIGFzIGFueSkpKSwoX2woKSgpLFxuICAgICAgaTEuybV0ZWQoLTEsKG51bGwgYXMgYW55KSxbJ1xcblx0XHRcdCddKSksKF9sKCkoKSxpMS7JtWVsZCgyLDAsKG51bGwgYXMgYW55KSwobnVsbCBhcyBhbnkpLFxuICAgICAgMSwnYScsKFtdIGFzIGFueVtdKSxbWzgsJ2hyZWYnLDRdXSxbWyhudWxsIGFzIGFueSksJ2NsaWNrJ11dLChfdixlbiwkZXZlbnQpID0+IHtcbiAgICAgICAgdmFyIGFkOmJvb2xlYW4gPSB0cnVlO1xuICAgICAgICB2YXIgX2NvOmFueSA9IF92LmNvbXBvbmVudDtcbiAgICAgICAgaWYgKCgnY2xpY2snID09PSBlbikpIHtcbiAgICAgICAgICBjb25zdCBwZF8wOmFueSA9ICgoPGFueT5fY28ub3BlbkxpbmsoX3YuY29udGV4dC4kaW1wbGljaXQudXJsKSkgIT09IGZhbHNlKTtcbiAgICAgICAgICBhZCA9IChwZF8wICYmIGFkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWQ7XG4gICAgICB9LChudWxsIGFzIGFueSksKG51bGwgYXMgYW55KSkpLChfbCgpKCksaTEuybVlbGQoMywwLChudWxsIGFzIGFueSksKG51bGwgYXMgYW55KSxcbiAgICAgIDAsJ2knLChbXSBhcyBhbnlbXSksW1s4LCdjbGFzc05hbWUnLDBdXSwobnVsbCBhcyBhbnkpLChudWxsIGFzIGFueSksKG51bGwgYXMgYW55KSxcbiAgICAgIChudWxsIGFzIGFueSkpKSwoX2woKSgpLGkxLsm1dGVkKC0xLChudWxsIGFzIGFueSksWydcXG5cdFx0J10pKV0sKG51bGwgYXMgYW55KSwoX2NrLFxuICAgICAgX3YpID0+IHtcbiAgICBjb25zdCBjdXJyVmFsXzA6YW55ID0gX3YuY29udGV4dC4kaW1wbGljaXQudXJsO1xuICAgIF9jayhfdiwyLDAsY3VyclZhbF8wKTtcbiAgICBjb25zdCBjdXJyVmFsXzE6YW55ID0gaTEuybVpbmxpbmVJbnRlcnBvbGF0ZSgxLCdmYSAnLF92LmNvbnRleHQuJGltcGxpY2l0Lmljb24sXG4gICAgICAgICcnKTtcbiAgICBfY2soX3YsMywwLGN1cnJWYWxfMSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gVmlld19TaGFyZUNvbXBvbmVudF8xKF9sOmFueSk6aTEuybVWaWV3RGVmaW5pdGlvbiB7XG4gIHJldHVybiBpMS7JtXZpZCgwLFsoX2woKSgpLGkxLsm1ZWxkKDAsMCwobnVsbCBhcyBhbnkpLChudWxsIGFzIGFueSksMTksJ2RpdicsW1snY2xhc3MnLFxuICAgICAgJ21vZGFsIHNvY2lhbCddXSwobnVsbCBhcyBhbnkpLChudWxsIGFzIGFueSksKG51bGwgYXMgYW55KSwobnVsbCBhcyBhbnkpLChudWxsIGFzIGFueSkpKSxcbiAgICAgIChfbCgpKCksaTEuybV0ZWQoLTEsKG51bGwgYXMgYW55KSxbJ1xcblx0J10pKSwoX2woKSgpLGkxLsm1ZWxkKDIsMCwobnVsbCBhcyBhbnkpLFxuICAgICAgICAgIChudWxsIGFzIGFueSksMiwnc3BhbicsW1snY2xhc3MnLCdtb2RhbC1oZWFkZXInXV0sKG51bGwgYXMgYW55KSwobnVsbCBhcyBhbnkpLFxuICAgICAgICAgIChudWxsIGFzIGFueSksKG51bGwgYXMgYW55KSwobnVsbCBhcyBhbnkpKSksKF9sKCkoKSxpMS7JtXRlZCgtMSwobnVsbCBhcyBhbnkpLFxuICAgICAgICAgIFsnU0hBUkUgJ10pKSwoX2woKSgpLGkxLsm1ZWxkKDQsMCwobnVsbCBhcyBhbnkpLChudWxsIGFzIGFueSksMCwnaScsW1snYXJpYS1oaWRkZW4nLFxuICAgICAgICAgICd0cnVlJ10sWydjbGFzcycsJ2ZhIGZhLXNoYXJlJ11dLChudWxsIGFzIGFueSksKG51bGwgYXMgYW55KSwobnVsbCBhcyBhbnkpLFxuICAgICAgICAgIChudWxsIGFzIGFueSksKG51bGwgYXMgYW55KSkpLChfbCgpKCksaTEuybV0ZWQoLTEsKG51bGwgYXMgYW55KSxbJ1xcblx0J10pKSxcbiAgICAgIChfbCgpKCksaTEuybVlbGQoNiwwLChudWxsIGFzIGFueSksKG51bGwgYXMgYW55KSwxLCdkaXYnLFtbJ2NsYXNzJywnbW9kYWwtY2xvc2UnXV0sXG4gICAgICAgICAgKG51bGwgYXMgYW55KSxbWyhudWxsIGFzIGFueSksJ2NsaWNrJ11dLChfdixlbiwkZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHZhciBhZDpib29sZWFuID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBfY286YW55ID0gX3YuY29tcG9uZW50O1xuICAgICAgICAgICAgaWYgKCgnY2xpY2snID09PSBlbikpIHtcbiAgICAgICAgICAgICAgY29uc3QgcGRfMDphbnkgPSAoKDxhbnk+X2NvLmNsb3NlTW9kYWwoKSkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgYWQgPSAocGRfMCAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWQ7XG4gICAgICAgICAgfSwobnVsbCBhcyBhbnkpLChudWxsIGFzIGFueSkpKSwoX2woKSgpLGkxLsm1ZWxkKDcsMCwobnVsbCBhcyBhbnkpLChudWxsIGFzIGFueSksXG4gICAgICAgICAgMCwnaScsW1snYXJpYS1oaWRkZW4nLCd0cnVlJ10sWydjbGFzcycsJ2ZhIGZhLXRpbWVzJ11dLChudWxsIGFzIGFueSksKG51bGwgYXMgYW55KSxcbiAgICAgICAgICAobnVsbCBhcyBhbnkpLChudWxsIGFzIGFueSksKG51bGwgYXMgYW55KSkpLChfbCgpKCksaTEuybV0ZWQoLTEsKG51bGwgYXMgYW55KSxcbiAgICAgICAgICBbJ1xcblx0J10pKSwoX2woKSgpLGkxLsm1ZWxkKDksMCwobnVsbCBhcyBhbnkpLChudWxsIGFzIGFueSksNCwndWwnLChbXSBhcyBhbnlbXSksXG4gICAgICAgICAgKG51bGwgYXMgYW55KSwobnVsbCBhcyBhbnkpLChudWxsIGFzIGFueSksKG51bGwgYXMgYW55KSwobnVsbCBhcyBhbnkpKSksXG4gICAgICAoX2woKSgpLGkxLsm1dGVkKC0xLChudWxsIGFzIGFueSksWydcXG5cdFx0J10pKSwoX2woKSgpLGkxLsm1YW5kKDE2Nzc3MjE2LChudWxsIGFzIGFueSksXG4gICAgICAgICAgKG51bGwgYXMgYW55KSwxLChudWxsIGFzIGFueSksVmlld19TaGFyZUNvbXBvbmVudF8yKSksaTEuybVkaWQoMTIsODAyODE2LFxuICAgICAgICAgIChudWxsIGFzIGFueSksMCxpMi5OZ0Zvck9mLFtpMS5WaWV3Q29udGFpbmVyUmVmLGkxLlRlbXBsYXRlUmVmLGkxLkl0ZXJhYmxlRGlmZmVyc10sXG4gICAgICAgICAge25nRm9yT2Y6WzAsJ25nRm9yT2YnXX0sKG51bGwgYXMgYW55KSksKF9sKCkoKSxpMS7JtXRlZCgtMSwobnVsbCBhcyBhbnkpLFxuICAgICAgICAgIFsnXFxuXHQnXSkpLChfbCgpKCksaTEuybV0ZWQoLTEsKG51bGwgYXMgYW55KSxbJ1xcblx0J10pKSwoX2woKSgpLGkxLsm1ZWxkKDE1LFxuICAgICAgICAgIDAsKG51bGwgYXMgYW55KSwobnVsbCBhcyBhbnkpLDAsJ2lucHV0JyxbWydpZCcsJ2ZjLXNoYXJlLWxpbmsnXSxbJ3R5cGUnLFxuICAgICAgICAgICAgICAndGV4dCddXSxbWzgsJ3ZhbHVlJywwXV0sKG51bGwgYXMgYW55KSwobnVsbCBhcyBhbnkpLChudWxsIGFzIGFueSksKG51bGwgYXMgYW55KSkpLFxuICAgICAgKF9sKCkoKSxpMS7JtXRlZCgtMSwobnVsbCBhcyBhbnkpLFsnXFxuXHQnXSkpLChfbCgpKCksaTEuybVlbGQoMTcsMCwobnVsbCBhcyBhbnkpLFxuICAgICAgICAgIChudWxsIGFzIGFueSksMSwnYScsW1snY2xhc3MnLCdjbGlwYm9hcmQtY29weSddLFsnaHJlZicsJy93YXRjaCddXSwobnVsbCBhcyBhbnkpLFxuICAgICAgICAgIFtbKG51bGwgYXMgYW55KSwnY2xpY2snXV0sKF92LGVuLCRldmVudCkgPT4ge1xuICAgICAgICAgICAgdmFyIGFkOmJvb2xlYW4gPSB0cnVlO1xuICAgICAgICAgICAgdmFyIF9jbzphbnkgPSBfdi5jb21wb25lbnQ7XG4gICAgICAgICAgICBpZiAoKCdjbGljaycgPT09IGVuKSkge1xuICAgICAgICAgICAgICBjb25zdCBwZF8wOmFueSA9ICgoPGFueT5fY28uY29weUxpbmsoJGV2ZW50KSkgIT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgYWQgPSAocGRfMCAmJiBhZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWQ7XG4gICAgICAgICAgfSwobnVsbCBhcyBhbnkpLChudWxsIGFzIGFueSkpKSwoX2woKSgpLGkxLsm1dGVkKDE4LChudWxsIGFzIGFueSksWycnLCcnXSkpLFxuICAgICAgKF9sKCkoKSxpMS7JtXRlZCgtMSwobnVsbCBhcyBhbnkpLFsnXFxuJ10pKV0sKF9jayxfdikgPT4ge1xuICAgIHZhciBfY286YW55ID0gX3YuY29tcG9uZW50O1xuICAgIGNvbnN0IGN1cnJWYWxfMDphbnkgPSBfY28uc29jaWFsTGlua3M7XG4gICAgX2NrKF92LDEyLDAsY3VyclZhbF8wKTtcbiAgfSwoX2NrLF92KSA9PiB7XG4gICAgdmFyIF9jbzphbnkgPSBfdi5jb21wb25lbnQ7XG4gICAgY29uc3QgY3VyclZhbF8xOmFueSA9IGkxLsm1aW5saW5lSW50ZXJwb2xhdGUoMSwnaHR0cHM6Ly9mbGF0bGFuZGNodXJjaC5jb20vd2F0Y2gvJyxcbiAgICAgICAgX2NvLnNlcm1vbkRhdGFbJ3Blcm1hbGluayddLCcnKTtcbiAgICBfY2soX3YsMTUsMCxjdXJyVmFsXzEpO1xuICAgIGNvbnN0IGN1cnJWYWxfMjphbnkgPSBfY28uY29weVRleHQ7XG4gICAgX2NrKF92LDE4LDAsY3VyclZhbF8yKTtcbiAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gVmlld19TaGFyZUNvbXBvbmVudF8wKF9sOmFueSk6aTEuybVWaWV3RGVmaW5pdGlvbiB7XG4gIHJldHVybiBpMS7JtXZpZCgwLFsoX2woKSgpLGkxLsm1YW5kKDE2Nzc3MjE2LChudWxsIGFzIGFueSksKG51bGwgYXMgYW55KSwxLChudWxsIGFzIGFueSksXG4gICAgICBWaWV3X1NoYXJlQ29tcG9uZW50XzEpKSxpMS7JtWRpZCgxLDE2Mzg0LChudWxsIGFzIGFueSksMCxpMi5OZ0lmLFtpMS5WaWV3Q29udGFpbmVyUmVmLFxuICAgICAgaTEuVGVtcGxhdGVSZWZdLHtuZ0lmOlswLCduZ0lmJ119LChudWxsIGFzIGFueSkpLChfbCgpKCksaTEuybV0ZWQoLTEsKG51bGwgYXMgYW55KSxcbiAgICAgIFsnXFxuJ10pKV0sKF9jayxfdikgPT4ge1xuICAgIHZhciBfY286aTMuU2hhcmVDb21wb25lbnQgPSBfdi5jb21wb25lbnQ7XG4gICAgY29uc3QgY3VyclZhbF8wOmFueSA9IF9jby5tb2RhbE9wZW47XG4gICAgX2NrKF92LDEsMCxjdXJyVmFsXzApO1xuICB9LChudWxsIGFzIGFueSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdfU2hhcmVDb21wb25lbnRfSG9zdF8wKF9sOmFueSk6aTEuybVWaWV3RGVmaW5pdGlvbiB7XG4gIHJldHVybiBpMS7JtXZpZCgwLFsoX2woKSgpLGkxLsm1ZWxkKDAsMCwobnVsbCBhcyBhbnkpLChudWxsIGFzIGFueSksMSwnc2hhcmUnLChbXSBhcyBhbnlbXSksXG4gICAgICAobnVsbCBhcyBhbnkpLChudWxsIGFzIGFueSksKG51bGwgYXMgYW55KSxWaWV3X1NoYXJlQ29tcG9uZW50XzAsUmVuZGVyVHlwZV9TaGFyZUNvbXBvbmVudCkpLFxuICAgICAgaTEuybVkaWQoMSwxMTQ2ODgsKG51bGwgYXMgYW55KSwwLGkzLlNoYXJlQ29tcG9uZW50LChbXSBhcyBhbnlbXSksKG51bGwgYXMgYW55KSxcbiAgICAgICAgICAobnVsbCBhcyBhbnkpKV0sKF9jayxfdikgPT4ge1xuICAgIF9jayhfdiwxLDApO1xuICB9LChudWxsIGFzIGFueSkpO1xufVxuZXhwb3J0IGNvbnN0IFNoYXJlQ29tcG9uZW50TmdGYWN0b3J5OmkxLkNvbXBvbmVudEZhY3Rvcnk8aTMuU2hhcmVDb21wb25lbnQ+ID0gaTEuybVjY2YoJ3NoYXJlJyxcbiAgICBpMy5TaGFyZUNvbXBvbmVudCxWaWV3X1NoYXJlQ29tcG9uZW50X0hvc3RfMCx7c2VybW9uRGF0YTonc2VybW9uRGF0YScsbW9kYWxPcGVuOidtb2RhbE9wZW4nfSxcbiAgICB7fSwoW10gYXMgYW55W10pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKbWFXeGxJam9pTDJodmJXVXZZbXgxWldKbFlYSmtMMlpzWVhSc1lXNWtZMmgxY21Ob0xtTnZiUzl6Y21NdllYQndMM1pwWkdWdkwzTm9ZWEpsTDNOb1lYSmxMbU52YlhCdmJtVnVkQzV1WjJaaFkzUnZjbmt1ZEhNaUxDSjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp1Wnpvdkx5OW9iMjFsTDJKc2RXVmlaV0Z5WkM5bWJHRjBiR0Z1WkdOb2RYSmphQzVqYjIwdmMzSmpMMkZ3Y0M5MmFXUmxieTl6YUdGeVpTOXphR0Z5WlM1amIyMXdiMjVsYm5RdWRITWlMQ0p1Wnpvdkx5OW9iMjFsTDJKc2RXVmlaV0Z5WkM5bWJHRjBiR0Z1WkdOb2RYSmphQzVqYjIwdmMzSmpMMkZ3Y0M5MmFXUmxieTl6YUdGeVpTOXphR0Z5WlM1amIyMXdiMjVsYm5RdWFIUnRiQ0lzSW01bk9pOHZMMmh2YldVdllteDFaV0psWVhKa0wyWnNZWFJzWVc1a1kyaDFjbU5vTG1OdmJTOXpjbU12WVhCd0wzWnBaR1Z2TDNOb1lYSmxMM05vWVhKbExtTnZiWEJ2Ym1WdWRDNTBjeTVUYUdGeVpVTnZiWEJ2Ym1WdWRGOUliM04wTG1oMGJXd2lYU3dpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpSUNJc0lqeGthWFlnWTJ4aGMzTTlYQ0p0YjJSaGJDQnpiMk5wWVd4Y0lpQXFibWRKWmoxY0ltMXZaR0ZzVDNCbGJsd2lQbHh1WEhROGMzQmhiaUJqYkdGemN6MWNJbTF2WkdGc0xXaGxZV1JsY2x3aVBsTklRVkpGSUR4cElHTnNZWE56UFZ3aVptRWdabUV0YzJoaGNtVmNJaUJoY21saExXaHBaR1JsYmoxY0luUnlkV1ZjSWo0OEwyaytQQzl6Y0dGdVBseHVYSFE4WkdsMklHTnNZWE56UFZ3aWJXOWtZV3d0WTJ4dmMyVmNJaUFvWTJ4cFkyc3BQVndpWTJ4dmMyVk5iMlJoYkNncFhDSStQR2tnWTJ4aGMzTTlYQ0ptWVNCbVlTMTBhVzFsYzF3aUlHRnlhV0V0YUdsa1pHVnVQVndpZEhKMVpWd2lQand2YVQ0OEwyUnBkajVjYmx4MFBIVnNQbHh1WEhSY2REeHNhU0FxYm1kR2IzSTlYQ0pzWlhRZ2MyOWphV0ZzSUc5bUlITnZZMmxoYkV4cGJtdHpYQ0krWEc1Y2RGeDBYSFE4WVNCYmFISmxabDA5WENKemIyTnBZV3d1ZFhKc1hDSWdLR05zYVdOcktUMWNJbTl3Wlc1TWFXNXJLSE52WTJsaGJDNTFjbXdwWENJK1BHa2dZMnhoYzNNOVhDSm1ZU0I3ZXlCemIyTnBZV3d1YVdOdmJpQjlmVndpUGp3dmFUNDhMMkUrWEc1Y2RGeDBQQzlzYVQ1Y2JseDBQQzkxYkQ1Y2JseDBQR2x1Y0hWMElIUjVjR1U5WENKMFpYaDBYQ0lnYVdROVhDSm1ZeTF6YUdGeVpTMXNhVzVyWENJZ2RtRnNkV1U5WENKb2RIUndjem92TDJac1lYUnNZVzVrWTJoMWNtTm9MbU52YlM5M1lYUmphQzk3ZXlCelpYSnRiMjVFWVhSaFd5ZHdaWEp0WVd4cGJtc25YU0I5ZlZ3aVBseHVYSFE4WVNCamJHRnpjejFjSW1Oc2FYQmliMkZ5WkMxamIzQjVYQ0lnYUhKbFpqMWNJaTkzWVhSamFGd2lJQ2hqYkdsamF5azlYQ0pqYjNCNVRHbHVheWdrWlhabGJuUXBYQ0krZTNzZ1kyOXdlVlJsZUhRZ2ZYMDhMMkUrWEc0OEwyUnBkajVjYmlJc0lqeHphR0Z5WlQ0OEwzTm9ZWEpsUGlKZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN096czdPenM3T3pzN096czdPenM3YjBKRFNVVTdUVUZCUVN4M1JVRkJkVU03WVVGQlFTdzRRa0ZEZEVNN1RVRkJRVHRSUVVGQk8xRkJRVUU3VVVGQmRVSTdWVUZCUVR0VlFVRkJPMUZCUVVFN1VVRkJka0k3VFVGQlFTeG5RMEZCYzBRN1RVRkJRVHROUVVGQkxHZENRVUYzUXpzN1NVRkJNMFk3U1VGQlNDeFhRVUZITEZOQlFVZzdTVUZCZVVRN1VVRkJRVHRKUVVGSUxGZEJRVWNzVTBGQlNEczdPenR2UWtGTWVrUTdUVUZCUVR0TlFVRTBReXd5UTBGRE0wTTdWVUZCUVR0VlFVRkJMRFJEUVVFeVFqdFZRVUZCTEdGQlFVMDdWVUZCUVR0VlFVRkJMRGhDUVVGeFJEdE5RVU4wUmp0VlFVRkJPMWxCUVVFN1dVRkJRVHRaUVVGNVFqdGpRVUZCTzJOQlFVRTdXVUZCUVR0WlFVRjZRanRWUVVGQkxHZERRVUZuUkR0VlFVRkJPMVZCUVVFc05FTkJRVzlFTzFWQlFVRXNWVUZEY0VjN1ZVRkJRVHROUVVGSkxEUkRRVU5JTzFWQlFVRXNOa1JCUVVFN1ZVRkJRVHRWUVVGQkxIVkRRVVZMTzFWQlFVRXNWVUZEUkN3eVEwRkRURHRWUVVGQk8yTkJRVUU3VFVGQk5rY3NNa05CUXpkSE8xVkJRVUU3VlVGQlFUdFpRVUZCTzFsQlFVRTdXVUZCZDBNN1kwRkJRVHRqUVVGQk8xbEJRVUU3V1VGQmVFTTdWVUZCUVN4blEwRkJiVVU3VFVGQmEwSTdPMGxCVEdoR08wbEJRVW9zV1VGQlNTeFRRVUZLT3pzN1NVRkpjVU03VVVGQlFUdEpRVUYwUXl4WlFVRnpReXhUUVVGMFF6dEpRVU50UlR0SlFVRkJPenM3TzI5Q1FWUndSVHROUVVGQkxDdENRVUZCTzI5Q1FVRkJMRzFEUVZWTk8wMUJRVUU3TzBsQlZtOUNPMGxCUVRGQ0xGZEJRVEJDTEZOQlFURkNPenM3TzI5Q1EwRkJPMDFCUVVFN1lVRkJRVHRWUVVGQk8wbEJRVUU3T3pzN095SjlcbiJdfQ==