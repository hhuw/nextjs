import styles from './index.module.css'
export default function Table({ tablead }: any) {
    return (
        <span className={styles.tablead}>
            {tablead}
        </span>
    )
}