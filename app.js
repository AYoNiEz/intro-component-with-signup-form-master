const form = document.getElementById('form');

form.addEventListener('submit', e=>{
    e.preventDefault();

    const firstName = form['firstname'].value
    const lastName = form['lastname'].value
    const email = form['email'].value
    const password = form['password'].value

    if(firstName === ''){
        addErrorTo('firstname','Firstname is cannot empty');
    } else{
        removeError('firstname');
    }

    if(lastName === ''){
        addErrorTo('lastname','Lastname is cannot empty');
    } else{
        removeError('lastname');
    }

    if(email === ''){
        addErrorTo('email','Email is not valid');
    } else if(!isValid(email)){
        addErrorTo('email','Email is not valid')
    }
    else{
        removeError('email');
    }

    if(password === ''){
        addErrorTo('password','Password is cannot empty');
    } else{
        removeError('password');
    }
});
function addErrorTo(field, massage) {
        const formControl = form[field].parentNode;
        formControl.classList.add('error');

        const small = form[field].parentNode.querySelector('small');
        small.innerText = massage;
        small.style.opacity= '1';
}

function removeError(field) {
        const formControl = form[field].parentNode;
        formControl.classList.remove('error');

        const small = formControl.querySelector('small');
        small.style.opacity= '0';
}

const isValid = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};