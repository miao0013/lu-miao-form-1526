
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

let fname = document.getElementById('fname');
let em = document.getElementById('email');
let msg = document.getElementById('message');


let b = document.getElementById('submit-button'); 


function formValidator(d) {
d.preventDefault();


    let data = {};
    let errors = [];
    var errMsg = null;

	if (fname.value) {
		data.fullname = fname.value;
	} else {
		errors.push('Full name is missing');
	}
	

    if (em.value) {
        if (em.value.match(mailformat)) {  
		   data.email = em.value;
	    } 
        else {
        errors.push('Invalid email!');
        }
    }
    else {
		errors.push('Email is missing');
	}
	

	if (msg.value) {
		data.message = msg.value;
	} else {
		errors.push('Message name is missing');
	}
    
    
    if (errors.length === 0)
	{
        console.log(data);
        document.getElementById("htmlform").reset();
    }
    else {
        console.log(errors); 
    } 

}


b.addEventListener('click', formValidator);