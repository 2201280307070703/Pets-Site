import styles from './CommentsItem.module.css';

export default function CommentsItem({
    owner,
    comment
}) {

    return(
        <div className={styles.container}>
            <div className={styles.comment}>
                <div className={styles.image}>
                    <img className={styles.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGL1UfdMdd6YU_HtOCxIIzY9PTLPxu-OJWtQ&usqp=CAU" alt="img8" />
                </div>
                <p className={styles.text}><b>{owner}</b> - {comment}</p>
            </div>
        </div>
    );
};