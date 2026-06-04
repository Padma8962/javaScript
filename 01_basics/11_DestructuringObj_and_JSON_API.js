const course = {
    coursename :"Java Script",
    price : "999",
    courseInstructor : 'Hitesh'
}

const {courseInstructor } =cousre //similar to course.courseInstructor
console.log(courseInstructor)

const {courseInstructor : instructor } =cousre //alias name : instructor
console.log(instructor)
