import * as React from 'react';

export interface ITestProps {
  title: string;
}

export default class Test extends React.PureComponent<ITestProps, any> {
  render() {
    return (
      <div>
        {this.props.title}
        123
      </div>
    );
  }
}
