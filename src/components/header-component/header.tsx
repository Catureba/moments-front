import InputMoreButton from '../assets/inputMoreButton-component/inputMoreButton';
import styles from './header.module.css'
function Header() {
    return (
        <nav className={styles.headerConteiner}>
            <div className={styles.box}>
                <div className={styles.logo}>
                    <a href="http://localhost:3000/">
                        <img src="./assets/logo.png" alt="logo" />
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
                </div>
                <div className={styles.searchBox}>
                    <InputMoreButton />
                </div>
            </div>
        </nav>
    );
}
export default Header;