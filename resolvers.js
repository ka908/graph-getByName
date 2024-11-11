const db = require("../database.js");
const resolvers = {
  Query: {
    users: async (p, ar) => {
      const { name } = ar;
      const result = await db("facility").select("*").where("name", name);
      return result;
    },
  },
};

module.exports = resolvers;
