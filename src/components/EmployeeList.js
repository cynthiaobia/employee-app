import EmployeeListItem from './EmployeeListItem';

const employees = [
    {name: 'James King', role: 'President and CEO'},
    {name: 'Julie Taylor', role: 'VP of Marketing'},
    {name: 'Eugene Lee', role: 'CFO'},
    {name: 'John Williams', role: 'VP of Engineering'},
    {name: 'Ray Moore', role: 'VP of Sales'},
    {name: 'Paul Jones', role: 'QA Manager'}
]

function EmployeeList(employees) {
    return (
        <div>
            <EmployeeListItem name='James King' role ='President and CEO'/>
            <EmployeeListItem name='Julie Taylor' role='VP of Marketing'/>
            <EmployeeListItem name='Eugene Lee' role='CFO'/>
            <EmployeeListItem name='John Williams' role='VP of Engineering'/>
            <EmployeeListItem name='Ray Moore' role='VP of Sales'/>
            <EmployeeListItem name='Paul Jones' role='QA Manager'/>
            <EmployeeListItem name = {employees.name} role = {employees.role} />
        </div>
    )
}

export default EmployeeList;



// employees.forEach(employee => )
// setAttribute('name', {employee.name})
// setAttribute('role', {employee.role})

/*
employees.forEach(employee => {
    <EmployeeListItem name = {employee.name} role = {employee.role} />
})*/