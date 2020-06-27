"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersCollection_1 = require("./../CharactersCollection");
var Sorter_1 = require("./../Sorter");
var NumbersCollection_1 = require("./../NumbersCollection");
var LinkedList_1 = require("../LinkedList");
describe('Sorter', function () {
    it('should properly sort an array of numbers', function () {
        var collection = new NumbersCollection_1.NumbersCollection([9, 23, 3, -56, 2]);
        var sorter = new Sorter_1.Sorter(collection);
        sorter.sort();
        expect(collection.data).toEqual([-56, 2, 3, 9, 23]);
    });
    it('should properly sort an array of strings', function () {
        var collection = new CharactersCollection_1.CharactersCollection('eUaowwG');
        var sorter = new Sorter_1.Sorter(collection);
        sorter.sort();
        expect(collection.data).toEqual('aeGoUww');
    });
    it('should properly sort a linked list', function () {
        var linkedList = new LinkedList_1.LinkedList();
        // [2, 34, -78, 455, 12, 3876].forEach((node) => {
        //   linkedList.add(node);
        // })
        //
        // expect(linkedList.print()).toBe([-78, 2, 12, 34, 455, 3876]);
    });
});
