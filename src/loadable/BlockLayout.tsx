import * as React from 'react';
import * as Loadable from 'react-loadable';
import Loading from '../components/Loading';

const BlockLayoutComponent = Loadable({
  loader: () => import('../layouts/BlockLayout'),
  loading: Loading,
});

export default class LoadableBlockLayout extends React.PureComponent {
  public render() {
    return <BlockLayoutComponent />;
  }
}
