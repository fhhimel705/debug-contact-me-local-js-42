function getinputValue(id) {
  const inputId = document.getElementById(id);
  const inputValue = inputId.value;
  inputId.value = "";
  return inputValue;
}
function setItemToLocal(item, itemValue) {
  localStorage.setItem(item, itemValue);
}

function keyValue(key, stringifyValue) {
  key = {};
  localStorage.getItem(`${key}`);
  if (key) {
    key = stringifyValue;
  }
  return key;
}

const sendName = () => {
    let name;
    const sendName = getinputValue("name-field");
    const stringifyName = JSON.stringify(sendName);
    name = keyValue(name, stringifyName);
  setItemToLocal("name", stringifyName);
  console.log(sendName);
};
const deleteName = () => {
  localStorage.removeItem("name");
};
