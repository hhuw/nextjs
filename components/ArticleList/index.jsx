import styles from './index.module.css'
import Nav from './Nav'
export default function ArticleList() {
    return (
        <div className={styles.home_main}>
            <Nav />
            文章模块
        </div>
    )
}