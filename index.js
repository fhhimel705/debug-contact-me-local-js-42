function getinputValue(id) {
  const inputId = document.getElementById(id);
  const inputValue = inputId.value;
  inputId.value = "";
  return inputValue;
}
function setItemToLocal(item, itemValue) {
  localStorage.setItem(item, itemValue);
}
function deleteItemLocal(item) {
  localStorage.removeItem(item);
}

const sendName = () => {
  const sendName = getinputValue("name-field");
  const stringifyName = JSON.stringify(sendName);
  setItemToLocal("name", stringifyName);
  //   console.log(sendName);
};

const deleteName = () => {
  deleteItemLocal("name");
};

const sendMail = () => {
  const sendMail = getinputValue("email-field");
  const stringifyMail = JSON.stringify(sendMail);
  setItemToLocal("email", stringifyMail);
};

const deleteMail = () => {
  deleteItemLocal("email");
};
const sendMssg = () => {
  const sendMssg = getinputValue("message-field");
  const stringifyMssg = JSON.stringify(sendMssg);
  setItemToLocal("message", stringifyMssg);
};

const deleteMssg = () => {
  deleteItemLocal("message");
};

const resetLocal = () => {
  localStorage.clear();
};

const sendAllData = () =>{
    sendName();
    sendMail();
    sendMssg();

}