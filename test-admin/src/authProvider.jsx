export const authProvider = {
    login: ({ username }) => {
      localStorage.setItem("username", username);
      // accept all username/password combinations
      return Promise.resolve();
    },
    logout: () => {
      localStorage.removeItem("username");
  
      // Emit logout event
      const logoutEvent = new Event("logout");
      document.dispatchEvent(logoutEvent);
  
      return Promise.resolve();
    },
    checkError: ({ status }) => {
      if (status === 401 || status === 403) {
        localStorage.removeItem("username");
        return Promise.reject();
      }
      return Promise.resolve();
    },
    checkAuth: () => {
      return localStorage.getItem("username") ? Promise.resolve() : Promise.reject();
    },
    getPermissions: () => Promise.resolve(),
  };
  