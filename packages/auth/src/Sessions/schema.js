export default {
  _id: {
    type: 'ID'
  },
  publicKey: {
    type: 'ID'
  },
  secretKey: {
    type: 'ID'
  },
  createdAt: {
    type: Date
  },
  nonce: {
    type: 'blackbox'
  },
  lastCall: {
    type: Date,
    optional: true
  },
  userId: {
    type: 'ID'
  },
  locale: {
    type: String,
    optional: true
  },
  roles: {
    type: [String],
    optional: true
  },
  emailVerified: {
    type: Boolean,
    optional: true
  }
}
