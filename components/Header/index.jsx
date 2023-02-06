import styles from './index.module.css'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavShow, NavHidden } from '../../store/action'
export default function Header() {
    const Nav_show = useSelector(state => state.Nav_show)
    const dispatch = useDispatch()
    let lastScrollTop = 0;
    const handleScroll = () => {
        let scrollTop = document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            dispatch(NavHidden())
        } else {
            dispatch(NavShow())
        }
        lastScrollTop = document.documentElement.scrollTop
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <div className={styles.main_header_box}>
            <header className={Nav_show ? styles.main_header : styles.visible}>
                <div className={styles.container}>

                </div>
            </header>
        </div >
    )
}