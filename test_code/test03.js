function Circle(radius){
    this._radius = radius;
    let defaultLocation = {x : 10, y : 50};

    this.getDefaultLocation = function(){
        console.log('some validation...');
        return defaultLocation;
    };

    let computeOptimumLocation = function(factor){
      console.log('compute location...');
    };

    this.draw = function(){
        computeOptimumLocation(1.1);
        console.log('draw');
    };

    // setter and getter
    Object.defineProperty(this, 'defaultLocation', {
        get : function(){
           // validation....
            if(this._radius > 5)
                defaultLocation.x = 5;

            return defaultLocation;
        },
        set : function(value){
           //validation
            if(!value.x || !value.y){
                throw new Error('Location in invalid.');
            }
            defaultLocation = value;
        }
    });
}

// setter and getter
Circle.prototype = {
    set radius(value){this._radius = value;},
    get radius(){return this._radius + 10;}
};

const circle = new Circle(10);

// circle.name = "aaa";
//
// for(let key in circle){
//     if(typeof circle[key] !== 'function')
//         console.log(key, circle[key]);
// }
//
// console.log(Object.keys(circle));
//
// if('draw' in circle){
//     console.log('circle has a draw.');
// }

// circle.getDefaultLocation();

// circle.defaultLocation = 5;
// console.log(circle);
// console.log(circle.defaultLocation);

circle.radius = 5;
console.log(circle.radius);

