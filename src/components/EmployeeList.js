import EmployeeListItem from './EmployeeListItem';

function EmployeeList() {

    return (
        <div>
            <EmployeeListItem name='James King' role ='President and CEO'/>
            <EmployeeListItem name='Julie Taylor' role='VP of Marketing'/>
            <EmployeeListItem name='Eugene Lee' role='CFO'/>
            <EmployeeListItem name='John Williams' role='VP of Engineering'/>
            <EmployeeListItem name='Ray Moore' role='VP of Sales'/>
            <EmployeeListItem name='Paul Jones' role='QA Manager'/>
        </div>
    )
}

export default EmployeeList;