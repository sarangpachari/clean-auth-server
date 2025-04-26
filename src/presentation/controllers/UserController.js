module.exports = (createUser, getUserById, loginUser) => ({
  create: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const user = await createUser(name, email, password);
      res.status(200).json(user);
    } catch (errorObj) {
      res.status(500).json({ error: errorObj.message });
    }
  },

  getById: async (req, res) => {
    try {
      const user = await getUserById(req.params.id);
      if (!user) return res.status(400).json({ error: "User not Found!" });
      res.status(200).json(user);
    } catch (errorObj) {
      res.status(500).json({ error: errorObj.message });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await loginUser(email, password);
      if (!user) return res.status(400).json({ error: "User not Found!" });
      res.status(200).json(user);
    } catch (errorObj) {
      res.status(500).json({ error: errorObj.message });
    }
  },
});
