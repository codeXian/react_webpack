import * as React from 'react'
import _ from 'lodash'

export default class LodashStudy extends React.Component {
  componentDidMount() {
    // console.log(_.chunk(['a', 'b', 'c', 'd'], 1))
    // console.log(_.compact([0, 1, false, 2, '', 3]))
    // console.log(_.difference([2, 1, { a: 1, b: 2 }], [2, 3, { a: 1, b: 2 }]))
    // console.log(_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor))
    console.log(_.differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], 'x'))
  }
  render() {
    return <div>lodashStudy</div>
  }
}
