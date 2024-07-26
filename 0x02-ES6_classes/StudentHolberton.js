import { HolbertonClass } from './HolbertonClass';

export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.holbertonClass = holbertonClass;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get fullStudentDescription() {
    return `${this.firstName} ${this.lastName} - ${this.holbertonClass.year} - ${this.holbertonClass.location}`;
  }
}
