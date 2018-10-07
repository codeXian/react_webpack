import * as React from 'react'
import _ from 'lodash'

export default class LodashStudy extends React.Component {
  componentDidMount() {
    console.log(_.chunk(['a', 'b', 'c', 'd'], 1))
  }
  render() {
    return <div>lodashStudy</div>
  }
}
