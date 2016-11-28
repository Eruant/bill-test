const React = require('react')
const isRequired = require('./isRequired')
const Currency = require('./Currency')

module.exports = ({
  items = isRequired({category: 'table', prop: 'items'})
}) => {
  const headers = Object.keys(items[0])
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => <th key={index}>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr>
            {headers.map(header => (
              <td data-type={header}>
                {header === 'cost' ? <Currency value={item[header]} /> : item[header]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
