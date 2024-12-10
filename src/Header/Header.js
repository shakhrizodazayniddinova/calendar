import React, { useContext } from 'react';
import './Header.scss';
import { ThemeContext } from '../ThemeContext/Theme';
import classNames from 'classnames';

export default function Header() {
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <div className={classNames('headerContainer', {'dark' : theme === 'dark', 'light' : theme === 'light'})}>
        <span className='themeIcon' onClick={toggleTheme}>
            {theme === 'light' ? <i className="bi bi-moon-fill"></i> : <i className="bi bi-brightness-high-fill"></i>}
        </span>
    </div>
  );
};