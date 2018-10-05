import * as React from 'react';
import * as Loadable from 'react-loadable';
import Loading from '@components/Loading';

const BasicLayoutComponent = Loadable({
  loader: () => import('../layouts/BasicLayout'),
  loading: Loading,
});

export default class LoadableBasicLayout extends React.PureComponent {
  public render() {
    return <BasicLayoutComponent />;
  }
}
