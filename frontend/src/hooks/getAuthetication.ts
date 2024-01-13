const getAuthentication = (): boolean => {
  return true;
  return localStorage.getItem("access_token") !== null;
};

export default getAuthentication;
