function rank(parent, args, context) {
  return context.prisma.user.findOne({ where: { id: parent.id } }).rank()
}

module.exports = {
  rank,
}
