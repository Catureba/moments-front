
import Card from '../../components/card-component';
import styles from './Home.module.css'

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
                    <Card
                        name="Igreja da Matriz"
                        image="https://cdn.discordapp.com/attachments/930965797097070613/1075122792149811210/first-image.jpg"
                        date="15 Oct. from 2022"
                        locale="Madre de Deus"
                        description="We took a lot of pictures, had fun and visited Madre de Deus"
                    />
                </div>
            </div>
        </div>
    );
}
export default Home;
