"use strict";
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        for (var i = 0; i < this.collection.length; i++) {
            for (var j = 0; j < this.collection.length; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    var origLeftElem = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = origLeftElem;
                }
            }
        }
    };
    return Sorter;
}());
var sorter = new Sorter([9, 23, 3, -56, 2]);
sorter.sort();
