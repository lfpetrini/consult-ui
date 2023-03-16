import { Outlet } from 'react-router-dom';
import useLocalisation from '../../hooks/use-localisation';
import styles from './RouterRoot.module.css';

const RouterRoot = () => {
  const [strings, setLanguage] = useLocalisation();
  return (
    <>
      <header className={styles.header}>
        <h1>{strings.title}</h1>
      </header>
      <Outlet />
    </>
  );
};

export default RouterRoot;
