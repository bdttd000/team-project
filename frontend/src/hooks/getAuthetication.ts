const getAuthentication = (): boolean => {
  //return true;
  //return false;
  return localStorage.getItem("access_token") !== null;
};

export default getAuthentication;
