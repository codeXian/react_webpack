import * as React from 'react';
import { hot } from 'react-hot-loader';
import './BasicLayout.css';
import boren from '../assets/boren.jpeg';
import Test from '../components/Test';

export interface IBasicLayout {}

class BasicLayout extends React.PureComponent {
  public componentDidMount() {
    console.log(this.props);
  }
  public render() {
    return (
      <div className="basic-layout">
        BasicLayout123
        <img src={boren} alt="博人" />
        <div className="flower" />
        <Test title="798" />
      </div>
    );
  }
}

export default hot(module)(BasicLayout);
