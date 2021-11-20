import style from './Header.module.css'

import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <div className={style.wrapper}>
      <Link to='/' className={style.link}>
        <div className={style.logo}>ETM</div>
      </Link>
    </div>
  );
}

export default Header;
