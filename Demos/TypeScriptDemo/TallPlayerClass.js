"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TallPlayer = void 0;
var PlayerClass_1 = require("./PlayerClass");
var TallPlayer = /** @class */ (function (_super) {
    __extends(TallPlayer, _super);
    function TallPlayer(id, name, height) {
        var _this = _super.call(this, id, name) || this;
        _this.height = height;
        return _this;
    }
    return TallPlayer;
}(PlayerClass_1.Player));
exports.TallPlayer = TallPlayer;
;
