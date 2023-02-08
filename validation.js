let userName = document.getElementById('name');//if I set it to "name", is appears to be deprecated

let lastName = document.getElementById('lastName');

let email = document.getElementById('email');

let password = document.getElementById('password');

let password_confirmation = document.getElementById('password_confirmation');

let phone = document.getElementById('phone');

let age = document.getElementById('age');

let url = document.getElementById('url');

let experience = document.getElementById('experience')

let salary = document.getElementById('salary');

let desktop = document.getElementById('desktop');

let laptop = document.getElementById('laptop');

let tablet = document.getElementById('tablet');

let smartphone = document.getElementById('smartphone');

let form =document.getElementById('form');





function validate(e){
    let errors=[];

    e.preventDefault();
 
    /*-----------------------------USERNAME--------------------------------------------*/
    if(userName.value===''){
        errors.push("Name can't be empty");
    }else if(!(/^[a-zA-Z]+$/.test(userName.value))){
        errors.push("Name can only contain alphabet characters")
    }
    /*-------------------------------LASTNAME------------------------------------------*/
    if(lastName.value===''){
        errors.push("Last name can't be empty");
    }else if(!(/^[a-zA-Z]+$/.test(lastName.value))){
        errors.push("Last name can only contain alphabet characters")
    }
    /*--------------------------------EMAIL-----------------------------------------*/
    if(email.value===''){
        errors.push("Email can't be empty");
    }else if(!(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email.value))){
        errors.push("Email must have a valid format")
    }
    /*-----------------------------------PASSWORD --------------------------------------*/
    
    if(password.value===''){
        errors.push("password can't be empty");
        /*one upper, one lower, one selected special character,1 digit,8 character minimun*/
    }else if(!(/^(?=.*\d)(?=.*[@#$%^&+=_])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password.value))){
        errors.push("password must include a lowercase, an uppercase,a digit, a special character(@#$%^&+=_) and a minumun of 8 characters");
    }
    /*-----------------------------------PASSWORD_confirmation --------------------------------------*/
    
    if(password_confirmation.value!=password.value){
        errors.push("password confirmation doesn't match");
    }
    /*-----------------------------------PHONE--------------------------------------*/
    
    if(phone.value===''){
        errors.push("phone can't be empty");
        /*one upper, one lower, one selected special character,1 digit,8 character minimun*/
    }else if(!(/^\d\d\d\d\d\d\d\d$/.test(phone.value))){
            errors.push("phone must have exactly 8 digits");
    }
    /*-----------------------------------AGE --------------------------------------*/
    
    if(age.value===''){
        errors.push("age can't be empty");
        /*one upper, one lower, one selected special character,1 digit,8 character minimun*/
    }else if(!(parseInt(age.value)<120)){
        
        errors.push("age must be numerical and smaller than 120 years");
    }
     /*-----------------------------------URL-pendiente-------------------------------------*/
    if(url.value===''){
        errors.push("URL can't be empty")
    }else if(!(/^http(s)?:\/\/www\.[a-zA-Z]+\.[a-z]+(\.[a-z]+)?$/.test(url.value))){
        errors.push("URL should follow a valid format like http://www.someting.online.dev https://www.douglascoding.online http://www.douglascoding.com http://www.douglas-coding.com http://www.douglascoding123.com ");

    }

    if (errors.length===0){
        console.log('mostrando todos los campos válidos enviados')
    }
    /*--------------------------Error list---------------------------- */

    errors_display(errors);

    
 


}

    
form.addEventListener('submit', validate);