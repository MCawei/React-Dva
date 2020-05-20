import { useState } from 'react';
import styles from './index.css';
import SlideBar from '@/components/slideBar'


function BasicLayout(props) {

  const [cont, setCont] = useState(256)

  // 遇到问题 useState，改变数据，setCont 未找到 {} => []
  // 改变 右侧内容宽
  const getMenu = (key) => {
    setCont(key)
  }

  return (
    <div className={styles.normal}>
     <div className={styles.slideBar}>
     <SlideBar
      getMenu={getMenu}
      ></SlideBar>
     </div>
      <div className={styles.container}>
        <div className={styles.mainHeader}>用户已登录 {cont}</div>
        <div className={styles.mainContent}>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default BasicLayout;
