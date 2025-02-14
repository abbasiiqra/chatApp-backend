"use strict";

module.exports = {
  lifecycles: {
    async beforeCreate(data) {
      console.log("Creating a new entry:", data);
    },
  },
};
