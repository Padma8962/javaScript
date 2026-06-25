// In window environment, this refers to the window object
// and in node environment, this refers to the global object 

function setUserName(username){
    this.username = username;
}

function createUser(username, email, password){
    // setUserName(username); // this will not work as expected because 'this' here refers to the global object, not the instance of createUser
    setUserName.call(this, username); //calling setUserName function with 'this' referring to the current instance of createUser
    this.email = email;
    this.password = password;
}

const user1 = new createUser("Padmaja", "padmaja.sharma0073@gmail.com", "12345");
console.log(user1.username);