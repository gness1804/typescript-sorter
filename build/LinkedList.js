"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var Node_1 = require("./Node");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    LinkedList.prototype.add = function (num) {
        var node = new Node_1.Node(num);
        if (!this.head) {
            this.head = node;
            return;
        }
        var tail = this.head;
        while (tail.next)
            tail = tail.next;
        tail.next = node;
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            if (!this.head)
                return 0;
            var total = 1;
            var node = this.head;
            while (node.next) {
                total++;
                node = node.next;
            }
            return total;
        },
        enumerable: false,
        configurable: true
    });
    LinkedList.prototype.at = function (index) {
        if (!this.head)
            throw new Error('Index out of bounds!');
        var counter = 0; // start at index 0
        var targetNode = this.head;
        while (targetNode) {
            if (counter === index)
                return targetNode;
            counter++;
            targetNode = targetNode.next;
        }
        throw new Error('Index out of bounds!');
    };
    LinkedList.prototype.compare = function (leftIndex, rightIndex) {
        if (!this.head)
            throw new Error('List is empty!');
        var leftNode = this.at(leftIndex);
        var rightNode = this.at(rightIndex);
        return leftNode.data > rightNode.data;
    };
    LinkedList.prototype.swap = function (leftIndex, rightIndex) {
        // this isn't a deep swap; just swaps the values, not the entire nodes
        var leftNode = this.at(leftIndex);
        var rightNode = this.at(rightIndex);
        var origLeftElemVal = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = origLeftElemVal;
    };
    LinkedList.prototype.print = function () {
        return [2];
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
