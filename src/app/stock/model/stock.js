"use strict";
exports.__esModule = true;
var Stock = /** @class */ (function () {
    function Stock(pk, code, price) {
        if (pk === void 0) { pk = null; }
        if (code === void 0) { code = ''; }
        if (price === void 0) { price = null; }
        this.pk = pk;
        this.code = code;
        this.price = price;
    }
    return Stock;
}());
exports.Stock = Stock;
