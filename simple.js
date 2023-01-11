array_with_lines = ["TEST", "foo", "bar", "baz"];

// async loop
for (const line of array_with_lines) {
  let obj = document.querySelector('div[data-tid="ckeditor"]').children[0];
  obj.innerText = line;

  await new Promise((r) => setTimeout(r, 100));
  document
    .querySelector("button > button > div > span > svg")
    .parentElement.click();
  await new Promise((r) => setTimeout(r, 100));
}
