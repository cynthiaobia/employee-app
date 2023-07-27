
function EmployeePage(){
    const employee = {
        name: 'Julie Taylor', 
        role: 'VP of Marketing',
        officeNum: '781-000-002',
        mobileNum: '617-000-0002',
        sms: '617-000-0002',
        email: 'jtaylor@fakemail.com'
    }

    return (
        <div>
            <h1>Employee</h1>
            <div class='employee-container'>
                <div className='pic'></div>
                <div className='info'>
                    <h2 className="info-items">{employee.name}</h2>
                    <p className="info-items">{employee.role}</p>
                </div>
            </div>
            {employee.officeNum}
            {employee.mobileNum}
            {employee.sms}
            {employee.email}
        </div>
    )
}

export default EmployeePage;