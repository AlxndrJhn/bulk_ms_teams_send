// Author: Alex360
// Pre-requisites: Logged into MS teams via browser, open a chat
// How to use: update the `text_to_send`, copy everything, open browser console with F12 and paste it in the console of the browser

text_to_send = `

Monday, 6th February, 10:30-11:30
Monday, 6th February, 13:00-14:00
Monday, 6th February, 13:30-14:30

`;

// no need to change anything below this line
array_with_lines = text_to_send.split("\n").filter((x) => x != "");
// console.log(array_with_lines);

for (const line of array_with_lines) {
  let obj = document.querySelector('div[data-tid="ckeditor"]').children[0];
  obj.innerText = line;

  await new Promise((r) => setTimeout(r, 300));
  document
    .querySelector("button > button > div > span > svg")
    .parentElement.click();
  await new Promise((r) => setTimeout(r, 300));
}
