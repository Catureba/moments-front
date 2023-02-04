import styles from './header.module.css'
function Header() {
    return (
        <div className={styles.headerConteiner}>
            <div className="box">
                <a href="/#"><h1><img src="./assets/logo.png" alt="logo" /></h1></a>
                <ul>
                    <li>Home</li>
                    <li>Post</li>
                    <li>List</li>
                </ul>
            </div>
        </div>
    );
}
export default Header;