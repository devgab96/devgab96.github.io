const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { getAppSecret, getUserId } = require('../utils');

// TODO Research how to add validation and do that.
const signup = async(parent, args, context, info) => {
  const password = await bcrypt.hash(args.password, 10);
  
  const user = await context.prisma.user.create({ data: {
    ...args,
    rank: { connect: { id: args.rank } },
    // TODO Research if conversion can be automated:
    birthday: new Date(args.birthday),
    password,
  }});

  const token = jwt.sign({ userId: user.id }, getAppSecret());

  return {
    token,
    user,
  }
}

const login = async(parent, args, context, info) => {
  const user = await context.prisma.user.findOne({ where: { username: args.username } });
  if (!user) {
    throw new Error('No such user found');
  }

  const valid = await bcrypt.compare(args.password, user.password);
  if (!valid) {
    throw new Error('Invalid password');
  }

  const token = jwt.sign({ userId: user.id }, getAppSecret());

  return {
    token,
    user,
  }
}

module.exports = {
  signup,
  login,
}
