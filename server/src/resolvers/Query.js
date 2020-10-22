const hello = async(parent, args, context, info) => {
  return "world";
}

const ranks = async(parent, args, context, info) => {
  return await context.prisma.rank.findMany()
}

module.exports = {
  hello,
  ranks,
}
