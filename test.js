const employees = [
    {
        id: 1,
        name: 'John',
        repartee: [2, 3]
    },
    {
        id: 2,
        name: 'Govinda',
        repartee: [4, 5, 6]
    },
    {
        id: 3,
        name: 'Ben',
        repartee: [7, 8, 9]
    },
    { id: 4, name: 'Kapil' },
    { id: 5, name: 'Ibha' },
    { id: 6, name: 'Vidya' },
    { id: 7, name: 'Mukund' },
    { id: 8, name: 'Doug' },
    { id: 9, name: 'Tadd' }
];

function printEmployees (employees, hierarchyCount=0, tracker={}, res=[]) {
    for (const employee of employees) {
        if (tracker[employee.id]) {
            continue;
        }

        printSingleEmployee(employee, hierarchyCount, tracker, res);
    }

    return res;
}

function printSingleEmployee(employee, hierarchyCount, tracker, res) {
    res.push(generateTabs(hierarchyCount) + employee.name);
    tracker[employee.id] =  true;
    if ((employee.repartee ?? []).length > 0) {
        const repartees = employee.repartee.map(id => employees.find(emp => emp.id === id));
        printEmployees(repartees, hierarchyCount + 1, tracker, res);
    }
}

function generateTabs(count) {
    let res = '';
    for (let i = 0; i < count; i++) {
        res += '   ';
    }

    return res;
}

console.log(printEmployees(employees));