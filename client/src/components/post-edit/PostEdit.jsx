import styles from './PostEdit.module.css';

export default function PostEdit() {
    return(
        <div className={styles.container}>
        <section className={styles.createPage}>
        <form id="create">
            <div className="container">
                <h1 className={styles.header}>Edit Your Post</h1>
                <input type="text"  name="name" />
                <br/>

                <input type="text"  name="category" />
                <br/>

                <input type="text"  name="age" />
                <br/>

                <input type="text"  name="imageUrl" />
                <br/>

                <textarea name="description"></textarea>
                <input className={styles.submitBtn} type="submit" value="Edit" />
            </div>
        </form>
    </section>
    </div>
    );
};