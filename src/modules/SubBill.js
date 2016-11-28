const React = require('react')
const Currency = require('./Currency')

module.exports = React.createClass({
  getInitialState () {
    return {
      hidden: false
    }
  },
  handleVisibility (event) {
    this.setState({
      hidden: !this.state.hidden
    })
  },
  render () {
    const {title, subTotal, children} = this.props

    return (
      <section
        className={`sub-bill ${this.state.hidden ? 'hidden' : 'visible'}`}
        onClick={this.handleVisibility}
      >
        <h1 className='sub-bill__title'>{title}</h1>
        <div className='sub-bill__content'>{children}</div>
        <p className='sub-bill__total'>
          {title} sub-total: <Currency value={subTotal} />
        </p>
      </section>
    )
  }
})
