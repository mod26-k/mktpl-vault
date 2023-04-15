const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


module.exports = {
  create,
  logIn,
  createJWT
}

async function create(req, res){
  try {
    const user = await User.create(req.body)
    const token = createJWT(user)
    res.json(token)
  } catch (error) {
    res.status(400).json(error)
  }
}

async function logIn(req, res){
  try {
    const user = await User.findOne({email: req.body.email})
      if (!user) {
        throw new Error()
      }
    const pass = await bcrypt.compare(req.body.password, user.password);
      if (!pass) {throw new Error()
      }
      res.json(createJWT(user))
  }
    catch (error) {
    res.status(400).json('Incorrect email or password')
  }
}

function createJWT(user){
  return jwt.sign(
    {user},
    process.env.SECRET,
    { expiresIn: '24hr'}
  )
}