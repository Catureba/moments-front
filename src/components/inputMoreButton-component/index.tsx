import styles from './InputMoreButton.module.css'
function InputMoreButton() {
    return (
        <form action="" className={styles.InputMoreButtonComponent}>
            <input type="text" name="findByName" id="findByName" placeholder='Search a moment' />
            <button type="submit">Find!</button>
        </form>
    );
}
export default InputMoreButton;