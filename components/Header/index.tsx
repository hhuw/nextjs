import styles from './index.module.css'
import { useState, useEffect, useRef } from 'react'
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons'
import Link from 'next/link'
import Table from './Table'
import { Col, Row } from 'antd'
import Menu_phone from './Menu_phone'
import { useSelector, useDispatch } from 'react-redux'
import { NavShow, NavHidden } from '../../store/action'
export default function Header() {
    const data: Array<object> = [
        {
            path: '/',
            label: '首页',
            tablead: '0111'
        },
        {
            path: '/',
            label: '沸点',
            tablead: '0111'

        },
        {
            path: '/',
            label: '课程',
            tablead: '0111'

        },
        {
            path: '/',
            label: '直播',
            tablead: '0111'

        },
        {
            path: '/',
            label: '活动',
            tablead: '0111'
        },
        {
            path: '/',
            label: '活动对对对',
            tablead: '0111'
        },
        {
            path: '/',
            label: '首页',
            tablead: '0111'
        },
        {
            path: '/',
            label: '沸点',
            tablead: false
        },
        {
            path: '/',
            label: '沸点',
            tablead: false
        }, {
            path: '/',
            label: '沸点',
            tablead: false
        }, {
            path: '/',
            label: '沸点',
            tablead: false
        }, {
            path: '/',
            label: '沸点',
            tablead: false
        },
    ]

    const Nav_show = useSelector((state: any) => state.Nav_show)
    const dispatch = useDispatch()
    // const clientWidth = window.innerWidth
    const ul: any = useRef(null)
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
        console.log(ul.current.offsetWidth > document.body.clientWidth)
        window.addEventListener('resize', () => console.log(ul.current.offsetWidth, document.body.clientWidth))
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    const clickHandle = (e: any): void => {
        e.target.nextElementSibling.click()
    }
    return (
        <div className={styles.main_header_box}>
            <header className={Nav_show ? styles.main_header : styles.visible}>
                <Row className={styles.container}>
                    <Col xs={10} sm={6} md={5} lg={4} xl={3}>
                        <Link className={styles.logo} href='/' >
                            <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg" alt="稀土掘金" className={styles.logo_img} />
                        </Link>
                    </Col>
                    <Col xs={0} sm={18} md={19} lg={20} xl={21}>
                        <nav className={styles.main_nav}>
                            <ul className={styles.nav_list}>
                                <li className={styles.main_nav_list}>
                                    <ul className={styles.phone_hide} ref={ul}>
                                        {
                                            // data.length * 30 >= clientWidth ?
                                            data.map((i: any, _) => (
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
                                            // :
                                            // <div className='styles.menu_auto'>
                                            //     <span>首页</span>
                                            //     <CaretDownOutlined />
                                            // </div>
                                        }
                                    </ul>
                                </li>

                            </ul>
                        </nav>
                    </Col>
                    <Col xs={14} sm={0} md={0} lg={0} xl={0} className={styles.phone_nav}>
                        <Menu_phone data={data} />
                    </Col>
                </Row>
            </header>
        </div >
    )
}