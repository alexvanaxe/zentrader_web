"use strict";
exports.__esModule = true;
var stock_1 = require("../../stock/model/stock");
var Operation = /** @class */ (function () {
    function Operation(pk, stock, operation_type, date, nickname, amount, cost, price, archived) {
        if (pk === void 0) { pk = null; }
        if (stock === void 0) { stock = null; }
        if (operation_type === void 0) { operation_type = null; }
        if (date === void 0) { date = null; }
        if (nickname === void 0) { nickname = null; }
        if (amount === void 0) { amount = null; }
        if (cost === void 0) { cost = null; }
        if (price === void 0) { price = null; }
        if (archived === void 0) { archived = false; }
        this.pk = pk;
        this.stock = stock;
        this.operation_type = operation_type;
        this.date = date;
        this.nickname = nickname;
        this.amount = amount;
        this.cost = cost;
        this.price = price;
        this.archived = archived;
    }
    return Operation;
}());
exports.Operation = Operation;
var OperationNested = /** @class */ (function () {
    function OperationNested(pk, stock, operation_type, date, nickname, amount, cost, price, archived) {
        if (pk === void 0) { pk = null; }
        if (stock === void 0) { stock = new stock_1.Stock(); }
        if (operation_type === void 0) { operation_type = null; }
        if (date === void 0) { date = null; }
        if (nickname === void 0) { nickname = null; }
        if (amount === void 0) { amount = null; }
        if (cost === void 0) { cost = null; }
        if (price === void 0) { price = null; }
        if (archived === void 0) { archived = false; }
        this.pk = pk;
        this.stock = stock;
        this.operation_type = operation_type;
        this.date = date;
        this.nickname = nickname;
        this.amount = amount;
        this.cost = cost;
        this.price = price;
        this.archived = archived;
    }
    return OperationNested;
}());
exports.OperationNested = OperationNested;
