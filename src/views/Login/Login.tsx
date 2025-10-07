import { Button, Form, Input } from 'antd';
import type { Login } from '@/types/api';
import storage from '@/utils/storage';
import styles from './index.module.less';
import api from '@/api';
export default function LoginFC() {
  const onFinish = async (values: Login.params) => {
    const data = await api.login(values);
    storage.set('token', data);
    console.log('req:', values);
    console.log('res:', data);
  };
  return (
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <div className={styles.title}>系统登录</div>
        <Form<Login.params> name='basic' initialValues={{ remember: true }} onFinish={onFinish} autoComplete='off'>
          <Form.Item name='username' rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input />
          </Form.Item>

          <Form.Item name='password' rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password />
          </Form.Item>

          <Form.Item label={null}>
            <Button type='primary' block htmlType='submit'>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
