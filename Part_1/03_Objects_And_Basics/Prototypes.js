// In javascript prototype property allows you to add new methods to obj constructor..


function Person(first, last, age, eyeColor) {
    this.firstName = first;
    this.LastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
personalbar.prototype.nationality = "English";

Person.prototype.name = function() {
    return this.firstName + " " + this.LastName;
};

