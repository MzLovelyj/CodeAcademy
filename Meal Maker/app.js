 const menu = {
     _courses: {
         _appetizers: [],
         _mains: [],
         _desserts: [],

         get appetizers() {
             return this._appetizers
         },
         set appetizers(appetizerIn) {
             this._appetizers.push(appetizerIn);
         },

         get mains() {
             return this._mains
         },
         set mains(mainIn) {
             this._mains.push(mainIn);
         },

         get desserts() {
             return this._desserts
         },
         set desserts(dessertIn) {
             this._desserts.push(dessertIn);
         },
     },

     get courses() { //how is this getting "course" and not "_courses"?? There is no variable or object called "courses".  So is the get function creatting this variable automatically from the return statement? 
         return {
             appetizers: this._courses.appetizers,
             mains: this._courses.mains,
             desserts: this._courses.desserts
         };
     },

     addDishToCourse(courseName, dishName, dishPrice) {
         const dish = {
             name: dishName,
             price: dishPrice
         };
         return this.courses[courseName].push(dish); //instructions ask for setter method instead of return?  //really not sure how to do this here is my attempt at trying to do it: .  
         // set _courses[courseName].push(dish);
     },

     getRandomDishFromCourse: function(courseName) {
         const dishes = this._courses[courseName];
         const randomDish = Math.floor(Math.random() * dishes.length);
         return dishes[randomDish];
     },

     generateRandomMeal: function() {
         const appetizer = this.getRandomDishFromCourse('appetizers');
         const mains = this.getRandomDishFromCourse('mains');
         const desserts = this.getRandomDishFromCourse('desserts');
         const totalPrice = appetizer.price + mains.price + desserts.price;
         return `Your meal is ${appetizer.name}, ${mains.name} and ${desserts.name}.  The total price for your meal is $${totalPrice}.`;
     }
 };


 // would there be a way for me to add 10 items at once to the different dish types?  so for example - push 'fries', 'soup', 'salad', 'onion rings' to the appetizers array?  I know you need to add the price for each as well, but I am wondering if the appetizers always stayed the same and the entrees/mains changed constantly how to fix this code to represent that. 

 menu.addDishToCourse('appetizers', 'salad', 5.50);
 menu.addDishToCourse('mains', 'fish', 6);
 menu.addDishToCourse('desserts', 'cake', 4);

 menu.addDishToCourse('appetizers', 'soup', 4.50);
 menu.addDishToCourse('mains', 'steak', 11);
 menu.addDishToCourse('desserts', 'ice cream', 3);


 let meal = menu.generateRandomMeal();
 console.log(meal);