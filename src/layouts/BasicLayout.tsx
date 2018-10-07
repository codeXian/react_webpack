import * as React from 'react'
import { hot } from 'react-hot-loader'
import './BasicLayout.css'
import boren from '../assets/boren.jpeg'
import Test from '../components/Test'
import { add, functest } from '../utils/math'
import TestAntdButton from '@components/TestAntdButton'
import Counter from '@views/Counter'

export interface IBasicLayout {}

@hot(module)
class BasicLayout extends React.PureComponent {
  public componentDidMount() {
    console.log(add(1, 2))
    console.log(functest('1', '44'))
  }
  public render() {
    return (
      <div className="basic-layout">
        Basic123777o999900001000
        <img src={boren} alt="博人" />
        <div className="flower" />
        <Test title="798" />
        <TestAntdButton />
        <Counter />
      </div>
    )
  }
}

export default BasicLayout
