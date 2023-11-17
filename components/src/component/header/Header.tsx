import style from "./Header.module.css"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className={style.header}>
      <div className={style.headerContainer}>
        <Link className={style.headerLogo} to="#">
          <img src="src/assets/Безымянный-www1 1.svg" alt="Logo" />
        </Link>
        <div className={style.headerMenu}>
          <div className={style.menuIcon}>
            <span></span>
          </div>
          <nav className={style.menuBody}>
            <ul className={style.menuList}>
              <li className={style.menuLink}>
                <Link to="#">Home</Link>
              </li>
              <li className={style.menuLink}>
                <Link to="#">About Us</Link>
              </li>
              <li className={style.menuLink}>
                <Link to="#">Our Services</Link>
              </li>
            </ul>
          </nav>
          <div className={style.headerAuth}>
            <nav className={style.menuBody}>
              <ul className={style.menuList}>
                <li className={style.menuLink}>
                  <Link to="#">+41 79 896 96 96</Link>
                </li>
                <li className={style.menuLink}>
                  <Link to="#">
                    <img src="src/assets/errow.svg" alt="arrow" />
                    ENG
                  </Link>
                  <ul className={style.menuSubList}>
                    <li className={style.menuSubLink}>
                      <Link to="#">RU</Link>
                    </li>
                  </ul>
                </li>
                <li className={style.menuButton}>
                  <button>Contact Us</button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
