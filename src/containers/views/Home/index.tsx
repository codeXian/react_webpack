import * as React from 'react'
import { ComponentExt } from '@utils/reactExt'
import { Button } from 'antd'
import $ from 'jquery'
import LodashStudy from '@components/LodashStudy'

class Home extends ComponentExt {
  componentDidMount() {
    console.log($('#button').width())
  }
  render() {
    return (
      <div>
        <Button id="button">123</Button>
        <div>
          <LodashStudy />
        </div>
      </div>
    )
  }
}

export default Home
