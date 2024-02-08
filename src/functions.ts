export function sayHello({
    firstName,
    lastName,
    age,
}:{
    firstName:String;
    lastName?:String;
    age?:Number;
}) {
    console.log("Hello");
    console.log(`Your firstname is ${firstName}`);

    if (lastName) {
        console.log(`Your lastname is ${lastName}`);
    }

    if (age) {
        console.log(`Your age is ${age}`);
    }
    
}