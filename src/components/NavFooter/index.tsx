import styles from './index.module.less';
const NavFooter = () => {
  return (
    <div className={styles.footer}>
      <div>
        <a href='https://123' target='_blank' rel='noreferrer'>
          AMOS主页
        </a>
        <span className='gutter'>|</span>
        <a href='https://123' target='_blank' rel='noreferrer'>
          React18+TS开发通用后台
        </a>
        <span className='gutter'>|</span>
        <a href='https://123' target='_blank' rel='noreferrer'>
          HelloWorld
        </a>
        <span className='gutter'>|</span>
        <a href='https://123' target='_blank' rel='noreferrer'>
          AMOS welcome to earth online!
        </a>
      </div>
      <div>Copyright ©2077 React18</div>
    </div>
  );
};

export default NavFooter;
