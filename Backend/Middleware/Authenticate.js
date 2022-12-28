const jwt = require('jsonwebtoken');
const nconf = require('nconf');

nconf.argv().env().file({ file: 'utils/config.json' });

module.exports = function (req, res, next) {
  // get token from the header
  const token = req.cookies.jwt //req.header('token');

  console.log(token)

  if (!token) {
    return res.status(401).json({ message: 'No token, authorozition denied' });
  }
  
  try {
    const decode = jwt.verify(token,"Somesecretcode" );
    console.log("this is decode "+decode)

    next();
  } catch (err) {
    console.log("invalid")
    res.status(401).json({ message: 'Token is not valid' });
  }
};