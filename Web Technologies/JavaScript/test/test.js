let usr_id = document.querySelector('#username')
let pwd_id = document.querySelector('#pwd')
let card_tag = document.querySelector('#card-content')
let btn_tag = document.querySelector('#btn-login')
let admin_tag=document.querySelector('#emp-data')
let tables=document.querySelector('.table')
let filteremp=document.querySelector('#myDropdown')
let new_obj = [{
    id: 'JSX_78',
    name: 'James',
    username: 'jms',
    password: 'jms_234!',
    designation: 'Developer',
    salary: 23000,
    gender: 'Male',
    role: 'Admin'
}, {
    id: 'JSX_77',
    name: 'Rohit',
    username: 'rht',
    password: 'rht_134!',
    designation: 'Tester',
    salary: 20000,
    gender: 'Male',
    role: 'Developer'
}, {
    id: 'JSX_76',
    name: 'Vikas',
    username: 'vks',
    password: 'vks_113!',
    designation: 'Developer',
    salary: 45000,
    gender: 'Male',
    role: 'Developer'
}, {
    id: 'JSX_75',   
    name: 'Nina',
    username: 'nin',
    password: 'nin_500!',
    designation: 'Developer',
    salary: 20000,
    gender: 'Female',
    role: 'Developer'
},
{
    id: 'JSX_74',
    name: 'Tulsi',
    username: 'tls',
    password: 'tls_900!',
    designation: 'Tester',
    salary: 50000,
    gender: 'Female',
    role: 'Developer'
}]
console.log(new_obj[0].username);

btn_tag.addEventListener('click', (e) => {
    e.preventDefault();
    let ip_val = usr_id.value
    let pwd_val=pwd_id.value
    for (const ele in new_obj) {
        if(ip_val===new_obj[0].username && pwd_val===new_obj[0].password){
            document.querySelector('.table').style.display='block'
            document.querySelector('.dropdown').style.display='block'
            displayTable(admin_filter)
        }
        else if(ip_val===new_obj[ele].username && pwd_val===new_obj[ele].password){
            displayCard(ip_val)
        }   


    }
    
    }
)
let admin_filter = new_obj.filter((ele) => {
    return ele.role === 'Admin'
})

console.log(admin_filter);
function displayCard(username) {
    let str = ``

    for (let i = 0; i < new_obj.length; i++) {
        if (username === new_obj[i].username) {
            str += `
            <div class="card" style="width: 45%; margin-left: 400px;">
                <div class="card-header bg-dark" >
                <h2 class="text-white" align="center">Employee Details</h2>
                </div>
                <div class="row">
                            <div class="col-md-13">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                <div class="col-md-5">
                                    <h2>Name</h2>${new_obj[i].name}
                                    <h2>Designation</h2> ${new_obj[i].designation}
                                    <h2>
                                        Role
                                        </h2>    
                                        ${new_obj[i].role}
                                </div>
                                    </div>
                                    </div>    
                            </div>
                            </div>
                            </div>
                   </div>
                       `;
        }
        card_tag.innerHTML = str;
    }
}

    function displayTable(new1)
    {
    {
        console.log(new1);
        let eachemp =``;
        for (let i = 0; i < new_obj.length; i++) {        
            eachemp+=`<tr>
                                    <td>${new_obj[i].name}</td>
                                    <td>${new_obj[i].username}</td>
                                    <td>${new_obj[i].salary}</td>
                                    <td>${new_obj[i].role}</td>
                                    <td>${new_obj[i].gender}</td>
                                    <td>${new_obj[i].designation}</td>
                                </tr>`
        }
        admin_tag.innerHTML=eachemp;
    }
}



    function displayEmployees(emps)
{
if (emps.length>0)
{
    let eachemp =``;
    for (let emp of emps)
    {
        eachemp+=`<tr>
                      
                                <td>${emp.name}</td>
                                <td>${emp.username}</td>
                                <td>${emp.salary}</td>
                                <td>${emp.designation}</td>
                                <td>${emp.gender}</td>
                                <td>${emp.role}</td>

                            </tr>`
    }
    document.querySelector('#emp-data').innerHTML=eachemp;
}
}

let maleEmps=new_obj.filter(function(emp){
return emp.gender==="Male";
})
console.log(maleEmps);
let femaleEmps=new_obj.filter(function(emp){
return emp.gender==="Female";
})

let developerEmps=new_obj.filter(function(emp){
return emp.designation==="Developer"
})

let testerEmps=new_obj.filter(function(emp){
return emp.designation==="Tester"
})

filteremp.addEventListener("change",function(){
    // displayEmployees(employee)
    if(filteremp.value==="Developer"){
        displayEmployees(developerEmps)
    }
    if(filteremp.value==="Tester"){
        displayEmployees(testerEmps)
    }
    if(filteremp.value==="Male"){
        displayEmployees(maleEmps)
    }
    if(filteremp.value==="Female"){
        displayEmployees(femaleEmps)
    }
})