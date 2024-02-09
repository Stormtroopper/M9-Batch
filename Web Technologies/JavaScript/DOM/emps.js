let emp_details = [
    {
        empid: 'aw23',
        empname: 'Alisha',
        gender: 'Female',
        salary: 45000,
        role: 'Junior CopyWriter',
        company: 'Web Chutney'
    },
    {
        empid: 'aw33',
        empname: 'Justin',
        gender: 'Male',
        salary: 40000,
        role: 'Paralegal',
        company: 'Samsung'
    },
    {
        empid: 'aw78',
        empname: 'Neetu',
        gender: 'Female',
        salary: 80000,
        role: 'Associate Lawyer',
        company: 'Pearson and Hardman'
    },
    {
        empid: 'aw10',
        empname: 'Rishab',
        gender: 'Male',
        salary: 93200,
        role: 'Senior Partner',
        company: 'Pearson Hardman'
    },
    {
        empid: 'aw78',
        empname: 'Junaid',
        gender: 'Male',
        salary: 10000,
        role: 'Devops Intern',
        company: 'Zetwork'
    },
    {
        empid: 'aw100',
        empname: 'Licha',
        gender: 'Female',
        salary: 34000,
        role: 'Devops Intern',
        company: 'Zetwork'

    }];
//             let styling=()=>{

//                 document.getElementById('male-id').style.color="red";
//             }
//             let restyling=()=>{

// document.getElementById('male-id').style.color="white";

// }
let second_divTag = document.getElementById('second-div');
second_divTag.innerHTML = `
<button class="btn btn-primary btn-sm">All Emps</button>
<button class="btn btn-primary btn-sm" id="male-id" onclick="display_prod1(${emp_details})" >Male Emps</button>
<button class="btn btn-primary btn-sm" id="female-id" >Female Emps</button>`;
console.log(emp_details.length);
let display_prod1 = function (emp) {
    if (emp.length > 0 && emp_details.gender == 'Male') {
        let row = ``;
        for (let i in emp) {
            row += `<table class="table table-hover" id="table">
                        <thead>
                            <tr>
                        <th scope="col">Employee Name</th>
                        <th scope="col">EmpId</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Designation</th>
                        <th scope="col">Company</th>    
                    </tr>
                    </thead>
                    <tbody width="100%">
                        <tr>
                            <tdid="eid">${i.empid}</td>
                            <td id="ename">${i.empname}</td>
                            <td id="gender">${i.gender}</td>
                            <td id="salary">${i.salary}</td>
                            <td id="role">${i.role}</td>
                            <td id="company">${i.company}</td>
                            
                            </tr>              
                    </tbody>
                </table>`
        }
        document.getElementById('row').innerHTML = row;
    }
}
// display_prod1(emp_details);
document.getElementById('male-id').addEventListener(
    'click',
    display_prod1(emp_details)
);

// display_products_2(emp_details)
let display_prod2 = function (emp_1) {
    if (emp_1.length > 0 && emp_details.gender == 'Female') {
        let row_1 = ``;
        for (let j in emp_1) {
            row_1 += `<table class="table table-hover" id="table">
        <thead>
            <tr>
                <th scope="col">Employee Name</th>
                <th scope="col">EmpId</th>
                <th scope="col">Gender</th>
                <th scope="col">Salary</th>
                <th scope="col">Designation</th>
                <th scope="col">Company</th>
                
                </tr>
                </thead>
                <tbody width="100%">
                    <tr>
                        <td >${j.empid}</td>
                        <td>${j.empname}</td>
                        <td id="price">${j.gender}</td>
                        <td id="quantity">${j.salary}</td>
                        <td id="quantity">${j.role}</td>
                        <td id="quantity">${j.company}</td>
                        
                        </tr>
                        
                        
                        </tbody>
                        </table>`;
        }
        document.getElementById('row').innerHTML = row_1;
    }
}

document.getElementById('female-id').addEventListener('click', display_prod2(emp_details));