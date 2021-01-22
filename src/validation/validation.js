const validateEmail = () => {
  let emailValue = document.getElementById("email").value;
  let mailformat = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (emailValue.match(mailformat)) {
    mail.innerHTML = "Your email is Valid";
    mail.style.color = "green";
    return true;
  } else {
    mail.innerHTML = "Please enter a valid email!";
    mail.style.color = "red";
    document.getElementById("email").focus();
    return false;
  }
};

const validateEntry = (elementId, message) => {
  const element = document.getElementById(elementId);
  if (element.value == "") {
    alert(message);
    element.focus();
    return false;
  }
  return true;
};

const loopElements = (element) => {
  let res = true;
  for (let a = 0; a < element.length; a++) {
    let msg = "";
    if (element[a].name !== "input") {
      msg = "Please provide a " + element[a].id + "!";
    } else if (element[a].id === "wdate") {
      msg = "Please provide a Date";
    } else if (element[a].id === "email" || validateEmail() === false) {
      msg = "Please provide a valid Email!";
    } else {
      msg = "Please provide a " + element[a].placeholder + "!";
    }
    res = validateEntry(element[a].id, msg);
    if (!res) break;
  }
  return res;
};

const validate = () => {
  const inputs = document.getElementsByName("input");
  const selects = document.getElementsByName("select");
  const textareas = document.getElementsByName("textarea");

  const selectsArr = [...selects];
  const inputsArr = [...inputs];
  const textAreasArr = [...textareas];

  const ordered = [];
  ordered.push(selectsArr.find((el) => el.id === "title"));
  ordered.push(inputsArr.find((el) => el.id === "fname"));
  ordered.push(inputsArr.find((el) => el.id === "lname"));
  ordered.push(inputsArr.find((el) => el.id === "email"));
  ordered.push(inputsArr.find((el) => el.id === "city"));
  ordered.push(selectsArr.find((el) => el.id === "preference"));
  ordered.push(selectsArr.find((el) => el.id === "call"));
  ordered.push(selectsArr.find((el) => el.id === "time"));
  ordered.push(selectsArr.find((el) => el.id === "department"));
  ordered.push(textAreasArr.find((el) => el.id === "subject"));
  ordered.push(textAreasArr.find((el) => el.id === "message"));
  ordered.push(inputsArr.find((el) => el.id === "wdate"));

  if (!loopElements(ordered)) return false;
};
