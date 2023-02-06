import styles from './card.module.css'
function Card() {
    return (
        <div className={styles.cardConteiner}>
            <div className={styles.boxImage}>
                <img src="./assets/first-image.jpg" alt="first image" />
            </div>
            <div className={styles.boxDescription}>
                <h2>Igreja da Matriz</h2>
                <h3>Date: <span>15 Oct. from 2022</span></h3>
                <h3><a target={'_blank'} href="https://www.google.com/maps/place/Igreja+da+Matriz+de+Nossa+Senhora+de+Madre+de+Deus/@-12.7423112,-38.6200202,15z/data=!4m2!3m1!1s0x0:0x6738ab2f237b0e1a?sa=X&ved=2ahUKEwjQtYKnqYH9AhW6F7kGHa7FBbkQ_BJ6BAhuEAg">Locale: <span>Madre de Deus</span></a></h3>
                <h3>Description: <span>We took a lot of pictures, had fun and visited Madre de Deus</span></h3>
            </div>
        </div>
    );
}
export default Card;