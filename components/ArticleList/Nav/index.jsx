import Link from 'next/link'
import styles from './index.module.css'
import { useSelector, useDispatch } from 'react-redux'
export default function Nav() {
    const Nav_show = useSelector(state => state.Nav_show)
    const navData = [
        {
            path: '/',
            label: '阅读'
        }, {
            path: '/',
            label: '阅读'
        }, {
            path: '/',
            label: '阅读'
        }, {
            path: '/',
            label: '阅读'
        },
    ]
    return (
        <nav className={Nav_show ? styles.nav_main : styles.visible}>
            <div className={styles.nav_list}>
                {
                    navData.map((i, _) => (
                        <div className={styles.nav_item} key={_}>
                            <input type="radio" name="main_nav_item" id="" className={styles.nav_radio} defaultChecked={!_ ? true : false} />
                            <Link href={i.path}>
                                {i.label}
                            </Link>
                        </div>
                    ))

                }

            </div>
        </nav>
    )
}