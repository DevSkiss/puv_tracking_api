const jwt = require('jsonwebtoken');
const secret = 'puvtrackingsystem';

module.exports.createAccessToken = (user) => {
  const data = {
    id: user._id,
    username: user.username,
  };
  return jwt.sign(data, secret, {});
};

//verifying token
module.exports.verify = (req, res, next) => {
  let token = req.headers.authorization;
  if (typeof token !== 'undefined') {
    token = token.slice(7, token.length);
    return jwt.verify(token, secret, (err, data) => {
      return err ? res.send({ auth: 'failed' }) : next();
    });
  } else {
    return res.send({ auth: 'failed' });
  }
};

//decoding the token
module.exports.decode = (token) => {
  if (typeof token !== 'undefined') {
    token = token.slice(7, token.length);
    return jwt.verify(token, secret, (err, data) => {
      return err ? null : jwt.decode(token, { complete: true }).payload;
    });
  } else {
    return null;
  }
};
