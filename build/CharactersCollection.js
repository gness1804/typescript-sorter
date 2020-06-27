"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    CharactersCollection.prototype.compare = function (leftIndex, rightIndex) {
        // without this line, the right hand char is undefined in the final place
        var right = this.data[rightIndex] || '';
        return this.data[leftIndex].toLowerCase() > right.toLowerCase();
    };
    CharactersCollection.prototype.swap = function (leftIndex, rightIndex) {
        var arr = this.data.split('');
        var origLeftElem = arr[leftIndex];
        arr[leftIndex] = arr[rightIndex];
        arr[rightIndex] = origLeftElem;
        this.data = arr.join('');
    };
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;
