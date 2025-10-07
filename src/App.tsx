import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { ConfigProvider, App as AntdApp, theme } from 'antd';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#ed6c00'
        }
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
