export const getIsLoggedIn = () => {
  const isLoggedIn = Boolean(localStorage.getItem("isLoggedIn")) === true;
  return isLoggedIn;
};

export const setIsLoggedIn = (isLoggedIn: boolean) => {
  if (isLoggedIn) {
    localStorage.setItem("isLoggedIn", String(isLoggedIn));
    return;
  }
  localStorage.removeItem("isLoggedIn");
};
