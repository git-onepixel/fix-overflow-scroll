
var isIosPlatform = false;

if (typeof window === 'object' && window.navigator) {
    var ua = navigator.userAgent || '';
    isIosPlatform = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}

var fixOverflowScroll = function (selector) {
    if (!isIosPlatform) 
        return false;

    var lastScrollTop = 0;

    var verticalScroll = function (e) {
        lastScrollTop = this.scrollTop;
        if (lastScrollTop <= 0) {
            this.scrollTop = 1;
        }
        if (lastScrollTop + this.offsetHeight >= this.scrollHeight) {
            this.scrollTop = lastScrollTop - 1;
        }
    }

    var lastScrollLeft = 0;

    var horizontalScroll = function (e) {
        lastScrollLeft = this.scrollLeft;
        if (lastScrollLeft <= 0) {
            this.scrollLeft = 1;
        }
        if (lastScrollLeft + this.offsetWidth >= this.scrollWidth) {
            this.scrollLeft = lastScrollLeft - 1;
        }
    }

    document.addEventListener('DOMContentLoaded', function (e) {
        var target = document.querySelector(selector);
        if (target) {
            target.addEventListener('touchstart', function (e) {
                verticalScroll.call(this, e);
                horizontalScroll.call(this, e);
            }, false);
        } else {
            throw new Error('Do not found an element with selector `' + selector + '`. ');
        }
    }, false);
};

(function (root, factory) {
    if(typeof exports === 'object' && typeof module === 'object') {
        module.exports = factory();
    } else if(typeof define === 'function' && define.amd) {
        define([], factory);
    } else if(typeof exports === 'object') {
        exports['fixOverflowScroll'] = factory();
    } else {
        root['fixOverflowScroll'] = factory();
    }
})(this, function () {
    return fixOverflowScroll;
});