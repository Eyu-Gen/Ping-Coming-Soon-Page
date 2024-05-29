let email = document.getElementById("email");
let enter = document.getElementById("enter");
let reEnter = document.getElementById("reEnter");
let button = document.getElementById("submitBtn");

button.addEventListener("click", function() {
let emailValue = email.value;
let emailChecker = emailValue.slice(emailValue.length - 10, emailValue.length);

if (emailValue.length == 0) {
    enter.style.display = "block";
    email.style.borderColor = "var(--secondaryColor2)";
}
else if(emailChecker != '@email.com') {
    reEnter.style.display = "block";
    email.style.borderColor = "var(--secondaryColor2)";
}
else {
    alert("Done!!");
}
});

email.addEventListener("click", function() {
    enter.style.display = "none";
    reEnter.style.display = "none";
    email.style.borderColor = "var(--naturalColor1)";
});