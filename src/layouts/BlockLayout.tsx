import * as React from 'react'
import * as styles from './BlockLayout.scss'

@log
class BlockLayout extends React.PureComponent {
    public render() {
        return (
            <div className={styles.wrapper}>
                内容1111111111111111111111111
                <div className={styles.title}>标题</div>
            </div>
        )
    }
}

function log(target: any) {
    console.log(target)
}

export default BlockLayout
