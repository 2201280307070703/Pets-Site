import styles from './PostCreate.module.css';

export default function PostCreate() {
    return(
        <div className={styles.container}>
        <section className={styles.createPage}>
        <form id="create">
            <div className="container">
                <h1 className={styles.header}>Add Post</h1>
                <input type="text"  name="name" placeholder="Enter pet name..." />
                <br/>

                <input type="text"  name="category" placeholder="Enter pet category..." />
                <br/>

                <input type="text"  name="age" placeholder="Enter pet age..." />
                <br/>

                <input type="text"  name="imageUrl" placeholder="Upload a photo..." />
                <br/>

                <textarea name="description" placeholder="Enter some description..."></textarea>
                <input className={styles.submitBtn} type="submit" value="Add Post" />
            </div>
        </form>
    </section>
    </div>
    );
};