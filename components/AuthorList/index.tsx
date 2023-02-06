import styles from './index.module.css'
import Link from 'next/link'
export default function AuthorList() {
    interface Data {
        path: string,
        imgPath: string,
        name: string,
        level: number | string,
        position: string
    }
    const authorData: Array<object> = [
        {
            path: 'https://juejin.cn/user/2634854380340008',
            imgPath: 'https://p3-passport.byteimg.com/img/user-avatar/b9a366997037d998063135bd56302b85~100x100.awebp',
            name: '京东云开发者',
            level: '//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-5.d08789d.png',
            position: '技术运营 @ 京东科技信息技术有限公司'
        },
        {
            path: 'https://juejin.cn/user/2634854380340008',
            imgPath: 'https://p3-passport.byteimg.com/img/user-avatar/b9a366997037d998063135bd56302b85~100x100.awebp',
            name: '京东云开发者',
            level: '//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-5.d08789d.png',
            position: '技术运营 @ 京东科技信息技术有限公司'
        },
        {
            path: 'https://juejin.cn/user/2634854380340008',
            imgPath: 'https://p3-passport.byteimg.com/img/user-avatar/b9a366997037d998063135bd56302b85~100x100.awebp',
            name: '京东云开发者',
            level: '//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-5.d08789d.png',
            position: '技术运营 @ 京东科技信息技术有限公司'
        },
        {
            path: 'https://juejin.cn/user/2634854380340008',
            imgPath: 'https://p3-passport.byteimg.com/img/user-avatar/b9a366997037d998063135bd56302b85~100x100.awebp',
            name: '京东云开发者',
            level: '//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-5.d08789d.png',
            position: '技术运营 @ 京东科技信息技术有限公司'
        },
    ]
    return (
        <div className={styles.main}>
            <div className={styles.author_block}>
                <header className={styles.user_block_header}>
                    🎖️作者榜
                </header>
                <div className={styles.user_list}>
                    {
                        authorData.map((i: any, _) => (
                            <div className={styles.user_item}>
                                <Link href={i.path} className={styles.link}>
                                    <img src={i.imgPath} alt={`${i.name}的头像`} className={styles.avatar} loading="lazy" />
                                    <div className={styles.user_info}>
                                        <div className={styles.username}>
                                            <span className={styles.name}>{i.name}
                                            </span>
                                            <span className={styles.rank}>
                                                <img src={i.level} alt="lv-5" title="创作等级" />
                                            </span>
                                        </div>
                                        <div className={styles.position}>
                                            {i.position}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}