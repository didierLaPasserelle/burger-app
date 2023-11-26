export function checkIsInputEmpty(isClicked, username) {
  const isDemoInputEmpty = isClicked && username.businessName === "";
  const isInputEmpty =
    !isClicked && (username.businessName === "" || username.password === "");
  return isDemoInputEmpty || isInputEmpty;
}

export function findDemoPasswordMessage(linksTab) {
  return linksTab.find((link) => link.text === "J'accède à la démo");
}
