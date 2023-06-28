const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6}/;

const validation = (userData)=>{
    const errors = {};

    if(!regexEmail.test(userData.email)) errors.email = "The email entered is not valid"
    if(userData.email.length === 0  ) errors.email = "The email entered is not valid"
    if(userData.email.length > 35) errors.email = "The email entered is not valid"
    if(!regexPassword.test(userData.password)) errors.password = "Your password is incorrect"

    return errors
}

export default validation;
