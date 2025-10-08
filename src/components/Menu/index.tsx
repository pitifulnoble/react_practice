import React, { Children } from 'react';
import { Menu } from 'antd';
import { DesktopOutlined, SettingOutlined, TeamOutlined } from '@ant-design/icons';
import styles from './index.module.less';
import { useLocation, useNavigate, useRouteLoaderData } from 'react-router-dom';
import type { MenuProps, MenuTheme } from 'antd/es/menu';
import { useEffect, useState } from 'react';
import * as Icons from '@ant-design/icons';

const SideMenu = () => {
  const navigate = useNavigate();
  const items = [
    {
      label: '工作台',
      key: '1',
      icon: <DesktopOutlined />
    },
    {
      label: '系统管理',
      key: '2',
      icon: <SettingOutlined />,
      children: [
        {
          label: '工作台',
          key: '3',
          icon: <TeamOutlined />
        }
      ]
    }
  ];
  // Logo点击
  const handleClickLogo = () => {
    navigate('/welcome');
  };
  return (
    <div className={styles.navSide}>
      <div className={styles.logo} onClick={handleClickLogo}>
        <img src='/imgs/logo.png' className={styles.img} />
        <span>AMOS-Hello</span>
      </div>
      <Menu defaultSelectedKeys={['1']} mode='inline' theme='dark' items={items} />
    </div>
  );
};

export default SideMenu;
