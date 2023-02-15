import InputMoreButton from '../inputMoreButton-component/inputMoreButton';
import styles from './header.module.css'
import logo from '../../assets/logo.png'
function Header() {

    function colapseMenuMobile() {
        document.getElementById("menuMobileColapse")?.classList.toggle("displayNone")
        document.getElementById("buttonShow")?.classList.toggle("displayNone")
        document.getElementById("buttonHide")?.classList.toggle("displayNone")
    }
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
                    <div className={styles.inputBox}>
                    <InputMoreButton />
                    </div>
                </div>
                <div className={styles.menuMobile}>
                    <button 
                    onClick={colapseMenuMobile}
                    id="buttonShow"
                    >
                        |  |  |
                    </button>
                    <button 
                    onClick={colapseMenuMobile}
                    id="buttonHide"
                    className='displayNone'
                    >
                        X
                    </button>
                    

                    <ul 
                    id='menuMobileColapse'
                    className="displayNone">
                        <li>
                            <a href="http://localhost:3000/">Home</a>
                        </li>
                        <li>
                            <a href="http://localhost:3000/">List</a>
                        </li>
                        <li>
                            <a href="http://localhost:3000/">Post</a>
                        </li>
                        <InputMoreButton />
                    </ul>
                    
                </div>
            </div>
        </nav>
        
    );
}
export default Header;