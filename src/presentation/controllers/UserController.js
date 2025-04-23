module.exports = (createUser, getUserById) => ({
  create: async (req, res) => {
    try {
      const user = await createUser(req.body);
      res.status(200).json(user);
    } catch (errorObj) {
      res.status(500).json({ error: errorObj.message });
    }
  },

  getById: async (req, res) => {
    try {
      const user = await getUserById(req.params.id);
      if (!user) return res.status(400).json({ error: "User not Found." });
      res.status(200).json(user);
    } catch (errorObj) {
      res.status(500).json({ error: errorObj.message });
    }
  },
});
