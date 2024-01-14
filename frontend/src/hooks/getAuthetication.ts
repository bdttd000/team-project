const getAuthentication = (): boolean => {
  return false;
  return localStorage.getItem("access_token") !== null;
};

export default getAuthentication;
