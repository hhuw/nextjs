import styles from './index.module.css'
import { useEffect, useRef } from 'react'
import { MenuOutlined } from '@ant-design/icons'
import Table_phone from './Table_phone'
import Link from 'next/link'

export default function Menu_phone({ data }: any) {
    const main_box = useRef(null)
    const check_box: any = useRef(null)
    const ul = useRef(null)
    useEffect(() => {
        window.addEventListener('click', (e: any) => {
            if (check_box.current.checked) {
                document.body.style.overflow = 'hidden';
                if (!(e.target.tagName === 'UL' || e.target.tagName === 'INPUT')) {
                    check_box.current.click()
                    document.body.style.overflow = 'auto';
                }
            }
        })

    })
    const clickHandle = e => {
        e.target.nextElementSibling.click()
    }

    return (
        <div className={styles.menu_box} ref={main_box}>
            <label htmlFor="check_box" className={styles.check_button}>
                <MenuOutlined />
            </label>
            <input type="checkbox" className={styles.check_box} id='check_box' ref={check_box} />
            <ul className={styles.menu} ref={ul}>
                {
                    data.map((e: any, _: number) => (
                        <li>
                            <input type="radio" name='radio_phone' id={`nav_${_}`} className={styles.nav_radio} defaultChecked={!_ ? true : false} onClick={clickHandle} />
                            <Link href={e.path} key={_} >
                                {e.label}
                            </Link>
                            {e.tablead ? <Table_phone tablead={e.tablead} /> : null}

                        </li>
                    ))
                }


            </ul>
        </div>
    )
}