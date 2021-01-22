// const validateEmail = () => {
//   let emailID = document.form.email.value;
//   atpos = emailID.indexOf("@");
//   dotpos = emailID.lastIndexOf(".");

//   if (atpos < 1 || dotpos - atpos < 2) {
//     alert("Please enter correct email ID");
//     document.form.email.focus();
//     return false;
//   }
//   return true;
// };

const validateEmail = () => {
  let emailValue = document.form.email.value;
  let mailformat = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (emailValue.match(mailformat)) {
    mail.innerHTML = "Your email is Valid";
    mail.style.color = "green";
    return true;
  } else {
    mail.innerHTML = "Please enter a valid email!";
    mail.style.color = "red";
    // alert("You have entered an invalid email address!");
    document.form.email.focus();
    return false;
  }
};

const validate = () => {
  if (document.form.title.value == "") {
    alert("Please select a Title!");
    document.form.title.focus();
    return false;
  }
  if (document.form.fname.value == "") {
    alert("Please provide your name!");
    document.form.fname.focus();
    return false;
  }
  if (document.form.lname.value == "") {
    alert("Please provide your Last Name!");
    document.form.lname.focus();
    return false;
  }
  if (document.form.email.value == "") {
    alert("Please provide your Email!");
    document.form.email.focus();
    return false;
  }
  if (document.form.city.value == "") {
    alert("Please provide a City!");
    document.form.city.focus();
    return false;
  }
  if (document.form.preference.value == "") {
    alert("Please select a Preference!");
    document.form.preference.focus();
    return false;
  }
  if (document.form.call.value == "") {
    alert("Please select Best Time to Call!");
    document.form.call.focus();
    return false;
  }
  if (document.form.time.value == "") {
    alert("Please select your Time Zone!");
    document.form.time.focus();
    return false;
  }
  if (document.form.department.value == "") {
    alert("Please select a Department!");
    document.form.department.focus();
    return false;
  }
  if (document.form.subject.value == "") {
    alert("Please provide Subject!");
    document.form.subject.focus();
    return false;
  }
  if (document.form.message.value == "") {
    alert("Please provide a Message!");
    document.form.message.focus();
    return false;
  }
  if (document.form.wdate.value == "") {
    alert("Please select your Wedding Date!");
    document.form.wdate.focus();
    return false;
  }
};
