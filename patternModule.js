var someModule = (function () {
    // private attributes
var privateVar = 5;
// private methods
var privateMethod =
function () {
return 'Private Test';
};
return {
// public attributes
publicVar: 10,
// public methods
publicMethod:
function () {
return ' Followed By Public Test ';
},
// let's access the private members
getData:
function () {
return privateMethod() + this.publicMethod() + privateVar;
}
}
})();


var VehiclePrototype=  {
    init:function(mymdel)
    {
        this.model = mymdel;
    },
    getModel:function()
    {
        return this.model;
    }
};

function Vehicle (model)
{
    function f() { };
    f.prototype = VehiclePrototype;
    var f = new f();
    f.init(model);
    return f;
}