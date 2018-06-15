"use strict";
exports.__esModule = true;
var Buy = /** @class */ (function () {
    function Buy(
    /* Itens of the operation */
    pk, stock, operation_type, date, nickname, amount, cost, price, archived, operation_gain) {
        if (pk === void 0) { pk = null; }
        if (stock === void 0) { stock = null; }
        if (operation_type === void 0) { operation_type = null; }
        if (date === void 0) { date = null; }
        if (nickname === void 0) { nickname = null; }
        if (amount === void 0) { amount = null; }
        if (cost === void 0) { cost = null; }
        if (price === void 0) { price = null; }
        if (archived === void 0) { archived = false; }
        if (operation_gain === void 0) { operation_gain = null; }
        this.pk = pk;
        this.stock = stock;
        this.operation_type = operation_type;
        this.date = date;
        this.nickname = nickname;
        this.amount = amount;
        this.cost = cost;
        this.price = price;
        this.archived = archived;
        this.operation_gain = operation_gain;
    }
    return Buy;
}());
exports.Buy = Buy;
