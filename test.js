var arr = [1, 2, 3, 4, 5];
var arr2 = [4, 5, 6, 7, 8];
//Tuple кортеж
var arr3 = ['Hello', 12345];
var testAny = 42;
testAny = 'hghghghghgh';
//Function
function sayMyName(name) {
    console.log(name);
}
sayMyName('Vasiliy');
//never
function throwError(message) {
    throw new Error(message);
}
var login = 'admin';
var id = 12345;
var id2 = '123';
var rect1 = {
    id: '123',
    size: {
        width: 123,
        height: 225
    }
};
rect1.color = 'black';
var react3 = {}; // add type for react3
var react4 = {}; // other type of defined obj
var rect5 = {
    id: '111',
    size: {
        width: 333,
        height: 444
    },
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
var css = {
    borderRadius: '50px',
    marginTop: '10px'
};
//enum 
var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standard"] = 1] = "Standard";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
var membership = Membership.Standard;
var membershipReverse = Membership[2];
console.log(membership); // 1
console.log(membershipReverse);
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["VK"] = "VK";
    SocialMedia["FACEBOOK"] = "FACEBOOK";
    SocialMedia["INSTAGRAM"] = "INSTAGRAM";
})(SocialMedia || (SocialMedia = {}));
var getMedia = SocialMedia.INSTAGRAM;
console.log(getMedia);
