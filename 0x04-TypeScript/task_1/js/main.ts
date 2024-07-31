interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const teacher1: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: true
}

interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

function printTeacher(teacher: Teacher): string {
    return `${teacher.firstName[0].toUpperCase()}. ${teacher.lastName}`;
}

interface Student {
    firstName: string;
    lastName: string;
 }

class StudentClass implements Student {
    firstName: string;
    lastName: string;

    constructor({firstName, lastName}: Student) {
        this.firstName = firstName;
        this.lastName = lastName;
    };
    
    /**
     * workOnHomework
     * @return {string}
     * @description Returns the status of the student working on homework
     */
    public workOnHomework(): string {
        return 'Currently working';
    }
    
    /**
     * displayName
     * @return {string}
     * @description Returns the full name of the student
     * @example
     * const student = new StudentClass('John', 'Doe');
     * student.displayName(); // John
     * @returns {string}
     */
    public displayName(): string {
        return this.firstName;
    }
}

// Example usage
const student = new StudentClass({ firstName: "John", lastName: "Doe" });
console.log(student.displayName()); // Output: John 
console.log(student.workOnHomework()); // Output: Currently working