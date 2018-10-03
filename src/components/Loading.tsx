import * as React from 'react';
import * as Loadable from 'react-loadable';

export default class Loading extends React.PureComponent<
  Loadable.LoadingComponentProps
> {
  public render() {
    return <div>Loading....</div>;
  }
}
