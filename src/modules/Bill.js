const React = require('react')
const dataStore = require('./dataStore')
const {getBillRequest} = require('./getBillActions')

const Loading = require('./Loading')
const Summary = require('./Summary')
const SubBill = require('./SubBill')
const Table = require('./Table')

module.exports = React.createClass({
  componentDidMount () {
    const {id} = this.props.query
    const action = getBillRequest({id})

    dataStore.dispatch(action)
  },
  render () {
    const {dataStore, language} = this.props
    const {bill} = dataStore

    if (bill.isLoading || !bill.data) {
      return <Loading />
    }

    return (
      <article className='bill'>
        <Summary language={language.summary} statement={bill.data.statement} total={bill.data.total} />
        <SubBill title={language.package.title} subTotal={bill.data.package.total}>
          <Table items={bill.data.package.subscriptions} />
        </SubBill>
        <SubBill title={language.callCharges.title} subTotal={bill.data.callCharges.total}>
          <Table items={bill.data.callCharges.calls} />
        </SubBill>
        <SubBill title={language.skyStore.title} subTotal={bill.data.skyStore.total}>
          <Table items={bill.data.skyStore.rentals} />
          <Table items={bill.data.skyStore.buyAndKeep} />
        </SubBill>
      </article>
    )
  }
})
