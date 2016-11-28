const React = require('react')
const FormatedDate = require('./FormatedDate')
const Currency = require('./Currency')
const isRequired = require('./isRequired')

const required = prop => isRequired({ category: 'Statement', prop })

module.exports = ({
  language = required('language'),
  statement = required('statement'),
  total = required('total')
} = {}) => {
  const {generated, due, period} = statement
  const {from, to} = period

  return (
    <section className='summary'>
      <h1 className={'summary__title'}>{language.title}</h1>
      <p className='summary__text'>
        {language.total}: <Currency value={total} />
      </p>
      <p className='summary__text'>
        {language.generated}: <FormatedDate date={generated} />
      </p>
      <p className='summary__text'>
        {language.due}: <FormatedDate date={due} />
      </p>
      <p className='summary__text'>
        {language.period}: <FormatedDate date={from} /> - <FormatedDate date={to} />
      </p>
    </section>
  )
}
