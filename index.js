class Users {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    fullName = () => this.firstName + " " + this.lastName;
}

let user1 = new Users("Jafar", "Khan", 20);
console.log(user1.fullName());
