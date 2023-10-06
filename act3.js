let password = prompt( " Please enter your password ");

if ( password.length == 8){

   console.log ( " WELCOME ");
}
else if ( password.length <= 8 ) {

    console.log ( " password is too short ");
}
else if ( password.length >= 8 ) {

    console.log ( " password is too long. " + " " + " Password should be 8 characters")

}
else if ( password.length == " " ) {

    console.log ( " Please provide a password ");
}