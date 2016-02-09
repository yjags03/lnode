//'use strict';
//var requirejs = require("requirejs");
//requirejs.config({
//    baseUrl: '.',
//    nodeRequire: require
//});

var fs = require('fs');

//describe('Top Level Tested Suite', function () {
//	describe('Nested Test Suite', function () {
//		it('Test1', function () { 
//            expect(1).toEqual(1);
//		});

//		it('Test 2', function () { 
//			//throw new Error();
//            expect(1).toEqual(1);
//		});

//	});

//    it('Test3', function () {
//        expect(1).toEqual(1);
//    });

//    it('Test4', function () { 
//        expect(1).toEqual(1);
//    });
//});

//describe('Skip and Only Tests', function () { 

//    it('Test8', function () { 
//        expect(1).toEqual(1);
//    });

//    it.only('Test9', function () {
//        expect(1).toEqual(1);
//    });
//    it.skip('Test10', function () {
//        expect(1).toEqual(1);
//    });
        
//});

describe('Test Hooks', function () { 

    before(function () { 
        console.log('Before');
    });

    beforeEach(function () { 
        console.log('Before Each');
    });

    after(function () { 
        console.log('after');
    });

    afterEach(function () { 
        console.log('after each');
    });

    it('Hook Test1', function () { 
        console.log('Test1');
    });

    it('Hook Test2', function () {
        console.log('Test2');
    });
});
