interface Student {
    firstname: string;
    lastname: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstname: 'John',
    lastname: 'Doe',
    age: 25,
    location: 'USA'
}

const student2: Student = {
    firstname: 'Jane',
    lastname: 'Doe',
    age: 22,
    location: 'USA'
}

const studentList: Student[] = [student1, student2];

const table = document.createElement('table');
document.body.appendChild(table);

const thead = document.createElement('thead');
table.appendChild(thead);

const tbody = document.createElement('tbody');
table.appendChild(tbody);

const tr = document.createElement('tr');
thead.appendChild(tr);

const th1 = document.createElement('th');
th1.textContent = 'First Name';
tr.appendChild(th1);

const th2 = document.createElement('th');
th2.textContent = 'Location';
tr.appendChild(th2);

studentList.forEach(student => {
    const tr = document.createElement('tr');
    tbody.appendChild(tr);

    const td1 = document.createElement('td');
    td1.textContent = student.firstname;
    tr.appendChild(td1);

    const td2 = document.createElement('td');
    td2.textContent = student.location;
    tr.appendChild(td2);
});