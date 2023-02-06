import Link from 'next/link'
import { AdShow, AdHidden } from '../../store/action';
import styles from './index.module.css'
import { CloseOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { AdDisplay } from '../../store/action'
import { useEffect, useRef } from 'react'
export default function Ad() {
    const dispatch = useDispatch()
    const Ad_display = useSelector(state => state.Ad_display)
    const main = useRef(null)
    const closeHandler = () => {
        dispatch(AdDisplay())
    }
    const handleScroll = () => {
        let scrollTop = document.documentElement.scrollTop;
        if (scrollTop > main.current.parentNode.parentNode.offsetHeight) {
            dispatch(AdShow())

        } else {
            dispatch(AdHidden())
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <>
            <div className={Ad_display ? styles.hidden : styles.main} ref={main}>
                <div className={styles.banner}>
                    <Link href='https://juejin.cn/post/7185104994801025061?utm_source=web1&utm_medium=banner&utm_campaign=tlgt2023'>
                        <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3183037b25b74c12a3843a00c7e2c09e~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?" width="240" height="200" className={styles.banner_img} />
                    </Link>
                    <div className={styles.ctrl_btn}>
                        <i className={styles.close_btn} onClick={closeHandler}>
                            <CloseOutlined />
                        </i>
                        <Link href='https://bd.juejin.cn/?utm_campaign=bd&utm_source=web&utm_medium=banner/' className={styles.label}>
                            <span className={styles.inco}>投放</span>
                            <span>广告</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.sidebar_block}>
                <div className={styles.block_body}>
                    <Link href='https://juejin.cn/app'>
                        <div className={styles.app_link}>
                            <img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/home.59780ae.png" className={styles.qr_img} />
                            <div className={styles.content_box}>
                                <div className={styles.headline}>
                                    下载稀土掘金APP
                                </div>
                                <div className={styles.desc}>
                                    一个帮助开发者成长的社区
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>

    )
}