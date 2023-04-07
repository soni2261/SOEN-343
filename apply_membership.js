let form = document.getElementById('form');
const submit = document.getElementById('submitButton');
let firstName,lastName,age,address,postalCode;

const urlParams = new URLSearchParams(window.location.search);
const message = urlParams.get('msg');

if ( message != null ){
    const input = document.createElement("h6");
    input.innerHTML = message;
    document.body.insertBefore(input,document.getElementById("form"));
}

submit.addEventListener("click", () => {
    firstName = document.getElementById('firstName')
    lastName = document.getElementById('lastName')
    age = document.getElementById('age')
    address = document.getElementById('address')
    postalCode = document.getElementById('postalCode')

    if (firstName.value == '') {
        alert("Please add a first name")
    } else if (lastName.value == '') {
        alert("Please add a last name")
    } else if (age.value == '') {
        alert("Please add an age")
    } else if (address.value == ''){
        alert("Please add an address")
    } else if (postalCode.value == ''){
        alert("Please add a postal code")
    } else {
        form.submit();
        document.location = 'success.html'
    }

});