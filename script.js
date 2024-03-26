//complete this code
class Person {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	get name(){
		return this.name;
	}
	set age(vaule){
		if (typeof vaule === 'number'){
			this.age=(vaule);
		}
	}
	
}

class Student extends Person {
	constructor(name, age) {
        super(name, age);
    }
	study(){
		console.log (this.name + " is studing")
	}
}

class Teacher extends Person {
	constructor(name, age) {
        super(name, age);
    }
     teach(){
		console.log (this.name + " is teaching")
	}
}
const student = new Student("Alice", 22);
student.study();
const teacher = new Teacher("Bob", 40);
teacher.teach(); 

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
