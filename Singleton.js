// DESIGN ENUM SERVICE
// Should return a promise with data
// API should be called for the first time
// Rest should be served from cache

const EnumService = (function service() {
  let data = null;

  return {
    getEnums: (key = null) => {
      if (data !== null) {
        return Promise.resolve(data);
      }
      return axios.get(`http://myservice/enums`)
        .then((res) => {
          data = res;
          return res;
        });
    }
  };
}());

export default EnumService;
