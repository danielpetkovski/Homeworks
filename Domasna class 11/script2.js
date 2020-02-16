function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = () => console.log(`${this.firstName} ${this.lastName}`);
}

function Student(firstName, lastName, age, academyName, studentId) {
    Object.setPrototypeOf(this, new Person(firstName, lastName, age))
    this.academyName = academyName;
    this.studentId = studentId;
    this.study = () => console.log(`The student ${this.firstName} is studying in the ${this.academyName}`);
}


let student1 = new Student('Daniel', 'Petkovski', 26, 'SEDC', 02567);

console.log(student1);

let student2 = new Student('Petko', 'Trajkovski', 33, 'LOP', 35669);

// Exercise 2 starts here


Person.prototype.checkAcademy = (student) => student.academyName;


console.log(student2.checkAcademy(student2));




function DesignStudent(firstName, lastName, age, academyName, studentId, isStudentOfTheMonth) {
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, academyName, studentId))
    this.isStudentOfTheMonth = isStudentOfTheMonth;
    this.academyName = "Design";
    this.attendAdobeExam = () => console.log(`The student ${this.firstName} is doing an adobe exam`);
}

function CodeStudent(firstName, lastName, age, academyName, studentId) {
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, academyName, studentId))
    this.hasIndividualProject = false;
    this.academyName = "Code";
    this.hasGroupProject = false;
    this.doProjectType = (type) => {
        if (type === "individual") this.hasIndividualProject = true;

        else this.hasGroupProject = true;

        return;
    }
}

function NetworkStudent(firstName, lastName, age, academyName, studentId) {
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, academyName, studentId));
    this.academyPart = Math.floor(Math.random() * 10);
    this.academyName = "Network";
    this.attendCiscoExam = () => console.log(`The student ${this.firstName} is doing an cisco exam`);
}

let student4 = new DesignStudent('Daniel', 'Petkovski', 26, 'asd', 5665, true);

let student5 = new CodeStudent('Darko', 'Petkovski', 28, '', 2556)
console.log(student4)

function Teacher(firstName, lastName, age, academyName, studentId,subject) {
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, academyName, studentId));
    
    this.subject = subject;
    this.teach = () => console.log(`The teacher ${this.firstName} ${this.lastName} is teaching ${this.subject}`);
}

let teacher = new Teacher('Petre','Petrovski',33,'Design',55969,'Adobe');

console.log(teacher);