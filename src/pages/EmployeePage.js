
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
        <div className='page-item'>
            <h1>Employee</h1>
            <div class='employee-container'>
                <div className='pic'></div>
                <div className='info'>
                    <h2 className="info-items">{employee.name}</h2>
                    <p className="info-items">{employee.role}</p>
                </div>
            </div>
            <div className='border'>
                <h3>Call Office</h3>
                <p className="info-items">{employee.officeNum}</p>
            </div>
            <div className='border'>
                <h3>Call Mobile</h3>
                <p className="info-items">{employee.mobileNum}</p>
            </div>
            <div className='border'>
                <h3>SMS</h3>
                <p className="info-items">{employee.sms}</p>
            </div>
            <div className='border'>
                <h3>Email</h3>
                <p className="info-items">{employee.email}</p>
            </div>
        </div>
    )
}

export default EmployeePage;