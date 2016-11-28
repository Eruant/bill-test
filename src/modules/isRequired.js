module.exports = ({ category = null, prop = null } = {}) => {
  const prefix = category ? `[${category}] ` : ''
  const message = prop ? `The prop '${prop}' is required` : 'Missing required field'

  throw new Error(prefix + message)
}
