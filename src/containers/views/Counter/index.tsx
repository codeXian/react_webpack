import * as React from 'react'
import { ComponentExt } from '@utils/reactExt'
import { inject, observer } from 'mobx-react'

interface IProps {
  globalStore?: IGlobalStore.GlobalStore
}

@inject('globalStore')
@observer
class Counter extends ComponentExt<IProps> {
  increase = () => {
    this.props.globalStore.increase(1)
  }
  decrease = () => {
    this.props.globalStore.decrease(1)
  }
  render() {
    const { num } = this.props.globalStore
    return (
      <div>
        <div>{num}</div>
        <button onClick={this.increase}>增加--</button>
        <button onClick={this.decrease}>减少</button>
      </div>
    )
  }
}

export default Counter
