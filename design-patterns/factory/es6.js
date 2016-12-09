class FullTimeEmployee {
    constructor() {
        this.salary = 12;
    }
}

class Contractor {
    constructor() {
        this.salary = 15;
    }
}

class EmployeeFactory {

    static create(type) {
        switch (type) {
            case 'fulltime':
                return new FullTimeEmployee();
                break;
            case 'contractor':
                return new Contractor();
                break;
            default :
                throw new Error('Wrong employee type, only contractor and fulltime are supported')
        }
    }
}


const employee = EmployeeFactory.create('fulltime');
const contractor = EmployeeFactory.create('contractor');

console.log(employee.salary);
console.log(contractor.salary);