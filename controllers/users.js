const { User } = require('../db/models')

async function getAllUsers() {
  return await User.findAll()
}

async function getUserById(id) {
  return await User.findOne({
    where: {
      id: id,
    },
  })
}

async function createUser(name, email) {
  const user = await User.create({
    name,
    email,
    // profile
  })
  return user
}

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
}
