import styles from './index.module.css'
export default function Table({ tablead }) {
    return (
        <span className={styles.tablead}>
            {tablead}
        </span>
    )
}