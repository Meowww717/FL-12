// Your code goes here
'use strict';

let userEmail = prompt('Please write your email:', '');
let password = '';
let needChangePass = '';
let minLength1 = 5;
let minLength2 = 6;

if( userEmail === '' || userEmail === null ) {
    alert('Canceled.'); 
} else if ( userEmail.length < minLength1 ) {
    alert(`I don't know any emails having name length less than 5 symbols`);
} else if ( userEmail === 'user@gmail.com' || userEmail === 'admin@gmail.com' ) {
    password = prompt('Enter the password:', '');
} else {
    alert(`I don't know you`);
}

if ( password === '' || password === null ) {
    alert('Canceled.');     
} else if ( !(userEmail === 'user@gmail.com' && password === 'UserPass') 
&& !(userEmail === 'admin@gmail.com' && password === 'AdminPass')) {
    alert('Wrong password');    
}

if ( userEmail === 'user@gmail.com' && password === 'UserPass' 
|| userEmail === 'admin@gmail.com' && password === 'AdminPass' ) {
    let needChangePass = confirm('Do you want to change your password?');    
    if ( needChangePass ) {
        let password = prompt('Please write the old password', '');

        if ( password === '' || password === null ) {
            alert('Canceled.');     
        } else if ( userEmail === 'user@gmail.com' && password === 'UserPass' 
        || userEmail === 'admin@gmail.com' && password === 'AdminPass' ) {
            let newPassword = prompt('Please write a new password:', '');       

            if ( newPassword === '' || newPassword === null ) {
                alert('Canceled.');     
            } else if ( userEmail.length < minLength2 ) {
                alert(`It's too short password. Sorry.`);
            } else {
                let newPassword2 = prompt('Please write new password again:', '');

                if ( newPassword2 !== newPassword ) {
                    alert('You wrote the wrong password.');
                } else {
                    alert('You have successfully changed your password.');
                }
            }
        } else {
            alert('Wrong password'); 
        }
    } else {
        alert('You have failed the change.');
    }    
}
