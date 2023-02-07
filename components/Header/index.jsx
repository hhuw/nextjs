import styles from './index.module.css'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import Table from './Table'
import { NavShow, NavHidden, MenuShow, MenuHidden } from '../../store/action'
export default function Header() {
    const Nav_show = useSelector(state => state.Nav_show)
    const Menu_show = useSelector(state => state.Menu_show)
    const dispatch = useDispatch()
    const data = [
        {
            path: '/',
            label: '首页',
            // tablead: '0111'
        },
        {
            path: '/pins',
            label: '沸点',
            // tablead: '0111'

        },
        {
            path: '/course',
            label: '课程',
            // tablead: '0111'

        },
        {
            path: '/',
            label: '直播',
            // tablead: '0111'

        },
        {
            path: '/events',
            label: '活动',
            // tablead: '0111'
        },
        {
            path: '/challenge',
            label: '竞赛',
            tablead: '0111'
        },
        {
            path: '/',
            label: '首页',
            tablead: '0111'
        },
    ]
    let lastScrollTop = 0;
    const phone_ul = useRef(null)
    const clickHandle = e => {
        e.target.nextElementSibling.click()
    }
    const show = () => {
        if (phone_ul.current.classList.length > 1)
            phone_ul.current.classList.remove(styles.show)
        else
            phone_ul.current.classList.add(styles.show)
    }
    const nav = useRef(null)
    const handleScroll = () => {
        let scrollTop = document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            dispatch(NavHidden())
        } else {
            dispatch(NavShow())
        }
        lastScrollTop = document.documentElement.scrollTop
    }
    const handleResize = () => {
        data.length * 65 > nav.current.parentNode.clientWidth - 107 ? dispatch(MenuHidden()) : dispatch(MenuShow())
    }
    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <div className={styles.main_header_box}>
            <header className={Nav_show ? styles.main_header : styles.visible}>
                <div className={styles.container}>
                    <Link className={styles.logo} href='/' >
                        <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg" alt="稀土掘金" className={styles.logo_img} />
                    </Link>
                    <nav className={styles.main_nav} ref={nav}>
                        <ul className={styles.nav_list}>
                            <li className={styles.main_nav_list}>

                                <div className={Menu_show ? styles.hidden : styles.phone_menu} onClick={show}>
                                    <span>首页</span>
                                </div>
                                <ul className={Menu_show ? styles.hidden : styles.phone_hide} ref={phone_ul}>
                                    {
                                        data.map((i, _) => (
                                            <li className={styles.phone_nav_item}>
                                                <input type="radio" name='radio_pc' className={styles.nav_radio} onClick={clickHandle} defaultChecked={!_ ? true : false} />
                                                <Link href={i.path}>{i.label}</Link>
                                                {i.tablead ? <Table tablead={i.tablead} /> : null}
                                            </li>
                                        ))
                                    }
                                </ul>
                                <ul className={Menu_show ? styles.phone_wuhu : styles.hidden}>
                                    {
                                        data.map((i, _) => (
                                            <li className={styles.nav_item} key={_}>
                                                <input type="radio" name='radio_pc' className={styles.nav_radio} onClick={clickHandle} defaultChecked={!_ ? true : false} />
                                                <Link href={i.path} className={styles.link}>
                                                    <span className={styles.text}>
                                                        {i.label}
                                                    </span>
                                                </Link>
                                                {i.tablead ? <Table tablead={i.tablead} /> : null}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </li>

                        </ul>
                    </nav>
                </div>
            </header>
        </div >
    )
}