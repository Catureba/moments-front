import styles from './Card.module.css'
function Card(props?: any) {


    return (
        <div className={styles.cardConteiner}>
            <div className={styles.boxImage}>
                <img src={props.image} alt="first image" />
            </div>
            <div className={styles.boxDescription}>
                <h2>{props.name}</h2>
                <h3>Date: <span>{props.date}</span></h3>
                <h3>Locale: <span>{props.locale}</span></h3>
                <h3>Description: <span>{props.description}</span></h3>
            </div>
        </div>
    );
}
export default Card;