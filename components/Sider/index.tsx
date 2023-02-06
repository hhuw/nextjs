import styles from './index.module.css'
import { useDispatch } from 'react-redux'
import { useRef, useEffect } from 'react';
import { AdShow, AdHidden } from '../../store/action';

export default function Sider({ children }: any) {
    const main: any = useRef(null)
    const dispatch = useDispatch()
    const handleScroll = () => {
        let scrollTop = document.documentElement.scrollTop;
        if (scrollTop > main.current.offsetHeight) {
            dispatch(AdShow())

        } else {
            dispatch(AdHidden())
        }
    }
    useEffect(() => {
        console.log(main.current.offsetHeight)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <div ref={main}>
            <main>{children}</main>
        </div>
    )
}