import styles from '../styles/ColorButton.module.scss';
import { BsSunFill } from 'react-icons/bs';
import { BsMoonFill } from 'react-icons/bs';

const Counter = ({ theme, setTheme }) => {
  const colorChanger = () => {
    setTheme(prev => prev == 'dark-theme' ? 'light-theme' : 'dark-theme')
  }

  return (
    <div className={ styles.button } onClick={ colorChanger }>
      { theme == 'dark-theme'
        ? <BsSunFill color={ "white" } />
        : <BsMoonFill color={ "black" } />
      }
    </div>
  );
}

export default Counter;