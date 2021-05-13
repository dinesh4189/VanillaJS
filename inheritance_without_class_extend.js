{
/* extending */
function extend(ChildClass, ParentClass) {	
    ChildClass.prototype = new ParentClass();	
    ChildClass.prototype.constructor = ChildClass;
}

/* base class */
var BaseClass = function() {	
    this.name = "I'm BaseClass";
};

BaseClass.prototype = {	
    getName: function() {		
        return this.name;	
    },	
    setName: function(str) {		
        this.name = str;	
    }
};

/* sub class 1 */
var SubClass1 = function() {	
    this.setName("I'm SubClass1");
}
/* sub class 2 */
var SubClass2 = function() {	
    this.setName("I'm SubClass2");
}

var SubClass3 = function() {
    this.setName("I'm SubClass3");
};

SubClass3.prototype = new BaseClass();
// SubClass3.prototype.constructor = function() {
//     this.setName("I'm SubClass3");
// }

extend(SubClass1, BaseClass);
extend(SubClass2, BaseClass);			
var base = new BaseClass();
var sub1 = new SubClass1();
var sub2 = new SubClass2();
var sub3 = new SubClass3();
console.log(base.getName());
console.log(sub1.getName());
console.log(sub2.getName());
console.log(sub3.getName());

}inheritance without class extend
