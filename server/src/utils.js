const jwt = require('jsonwebtoken');

const getAppSecret = () => process.env.APP_SECRET || 'default-app-secret';

const getUserId = context => {
  const Authorization = context.request.get('Authorization');

  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    
    const { userId } = jwt.verify(token, APP_SECRET);

    return userId;
  }

  throw new Error('Not authenticated');
}

module.exports = {
  getAppSecret,
  getUserId,
}
