let newone=document.querySelector('input[type=radio]').value;
let checkedinput=document.querySelector(`input[type=checkbox]:checked`).name;
let namedinput=document.querySelector(`input[name=gender]:checked`).value;
let Name_element=document.getElementsByName('skills')
let skills=[];
for(let i=0;i<Name_element.length;i++){
    if(Name_element[i].checked===true){
        skills.push(Name_element[i].value)
    }
}
console.log(newone); 
console.log(checkedinput);
console.log(namedinput);
console.log(Name_element);
console.log(skills);