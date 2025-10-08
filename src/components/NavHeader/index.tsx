import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Breadcrumb, Switch, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import styles from './index.module.less';
import { useEffect } from 'react';
const NavHeader = () => {
  const breadList = [
    {
      title: '首页'
    },
    {
      title: '工作台'
    }
  ];
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: '邮箱amosyuqing@amos.com'
    },
    {
      key: '2',
      label: '退出登录'
    }
  ];
  return (
    <div className={styles.navHeader}>
      <div className={styles.left}>
        <MenuFoldOutlined />
        <Breadcrumb items={breadList} />
      </div>
      <div className='right'>
        <Switch checkedChildren='暗黑' unCheckedChildren='默认' />
        <Dropdown menu={{ items }} trigger={['click']}>
          <span className={styles.nickName}>Amos</span>
        </Dropdown>
      </div>
    </div>
  );
};

export default NavHeader;
