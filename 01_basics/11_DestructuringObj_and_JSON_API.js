// {} mtlb destructuring
const course = {
    coursename :"Java Script",
    price : "999",
    courseInstructor : 'Hitesh'
}

const {courseInstructor } =cousre //similar to course.courseInstructor
console.log(courseInstructor)

const {courseInstructor : instructor } =cousre //alias name : instructor
console.log(instructor)

const navbar = ({company}) =>{

}


navbar(company = "PnM")

// ++++++++++++++++++++API++++++++++++++++++++

// API k through phle valuses XML m aati thi pr ab JSON m aati hai
// below is the JSON format
// {
//     "name" : "Padmaja",
//     "coursename" : "js in hindi",
//     "price" : "free"
// }

// below is in array format
// [
//     {
        
//     },
//     {

//     },
//     {

//     }
// ]

// JSON formatter