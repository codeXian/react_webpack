import * as React from 'react'
import Test from './Test';

const ListItem: React.SFC<any> = () => (
  <>
    <dt>我是dt1</dt>
    <dd>我是dd</dd>
  </>
)

class Home extends React.Component {
  private myRef = React.createRef<HTMLDivElement>();
  private myRefTest = React.createRef<Test>();
  componentDidMount() {
    console.log(this.myRefTest.current.test)
  }
  public render() {
    return (
      <div>
        <ListItem />
        <div ref={this.myRef} id="123" >132</div>
        <Test ref={this.myRefTest} />
      </div>
    )
  }
}

export default Home
