import InputMoreButton from '../inputMoreButton-component/inputMoreButton';
import styles from './header.module.css'
import logo from '../../assets/logo.png'
function Header() {

    function colapseMenuMobile() {
        document.getElementById("menuMobileColapse")?.classList.add("colapseOn")
    }
    const classNameVar = "colapseOn"
    return (
        <nav className={styles.headerConteiner}>
            <div className={styles.box}>
                <div className={styles.logo}>
                    <a href="http://localhost:3000/">
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                <div className={styles.menu}>
                    <ul>
                        <li>
                            <a href="http://localhost:3000/">Home</a>
                        </li>
                        <li>
                            <a href="http://localhost:3000/">List</a>
                        </li>
                        <li>
                            <a href="http://localhost:3000/">Post</a>
                        </li>
                    </ul>
                    <InputMoreButton />
                </div>
                <div className={styles.menuMobile}>
                    <button onClick={() => { colapseMenuMobile() }}>
                        |||
                    </button>
                    <ul 
                    id='menuMobileColapse'
                    className={styles.colapseOn}>
                        <li>
                            <a href="http://localhost:3000/">Home</a>
                        </li>
                        <li>
                            <a href="http://localhost:3000/">List</a>
                        </li>
                        <li>
                            <a href="http://localhost:3000/">Post</a>
                        </li>
                    </ul>
                    <InputMoreButton />
                </div>
            </div>
        </nav>
    );
}
export default Header;