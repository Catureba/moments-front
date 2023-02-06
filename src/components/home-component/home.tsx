import Card from '../assets/card-component/card';
import styles from './home.module.css'

function Home() {
    return (
        <div className={styles.homeConteiner}>
            <div className={styles.box}>
                <div className={styles.boxLeft}>
                    <h2>Hello Vanessa</h2>
                    <h3>This web app is for register my moments with you</h3>
                    <h3>I love <span>you</span><span> most ardently</span></h3>
                </div>

                <div className={styles.boxRight}>
                    <h2>This is a example</h2>
                    <Card/>
                </div>
            </div>
        </div>
    );
}
export default Home;
