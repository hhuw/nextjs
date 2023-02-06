export const handleScroll = (set,lastScrollTop,setLastScrollTop) => {
    let scrollTop = document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        set(true)
        console.log('上')
    } else {
        set(false)
        console.log('下')
    }
    setLastScrollTop(document.documentElement.scrollTop)

}