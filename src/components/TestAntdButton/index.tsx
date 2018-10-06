import * as React from 'react'
import { Button } from 'antd'
import * as styles from './index.scss'
import { ComponentExt } from '@utils/reactExt'
import We from '@assets/we.svg'

class TestAntdButton extends ComponentExt {
  showMsg = () => {
    this.$message.success('这是一个通知')
  }
  public render() {
    return (
      <div className={styles.test}>
        <Button onClick={this.showMsg} type="primary">
          1234444
        </Button>
        <We width={50} height={50} color="red" />
      </div>
    )
  }
}

export default TestAntdButton
