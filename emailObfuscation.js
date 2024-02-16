function displayEmail() {
  const user = "bobbythomaslewis";
  const domain = "gmail.com";
  const element = document.getElementById("emailLink");
  element.href = `mailto:${user}@${domain}`;
  element.innerText = `${user}@${domain}`;

}
