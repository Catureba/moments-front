import InputMoreButton from '../inputMoreButton-component';
import styles from './Header.module.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {

    const [state, setState] = useState("")

    function menuToggle() {
        document.getElementById("menu")?.classList.toggle("colapse")
    }

    return (
        <div className={styles.headerConteiner}>
            <header>
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
                <nav>
                    <button onClick={menuToggle} >| | |</button>
                    <ul className={styles.menu} id='menu'>
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/list">
                                List
                            </Link>
                        </li>
                        <li>
                            <Link to="/post">
                                Post
                            </Link>
                        </li>
                        <div>
                            <InputMoreButton />
                        </div>
                    </ul>

                </nav>
            </header>
        </div>
    );
}
