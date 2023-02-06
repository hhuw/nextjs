import styles from './index.module.css'
import Layout from '../components/Layout'
import ArticleList from '../components/ArticleList';
import { Row, Col } from 'antd'
import Sider from '../components/Sider'
import AuthorList from '../components/AuthorList'
import Ad from '../components/Ad';
import { useSelector } from 'react-redux'

export default function App() {
    const Ad_show = useSelector(state => state.Ad_show)
    const Nav_show = useSelector(state => state.Nav_show)

    return (
        <Layout>
            <Row className={styles.container}>
                <Col className={styles.article_main} xs={24} sm={24} md={24} lg={17} xl={17}>
                    <ArticleList />
                </Col>
                <Col className={styles.sider} xs={0} sm={0} md={0} lg={6} xl={6} offset={1}>
                    <Sider>
                        <Ad />
                        <div className={Ad_show ? Nav_show ? styles.move : styles.strick : styles.block} >
                            <Ad />
                        </div>
                        <AuthorList />
                    </Sider>
                </Col>
            </Row>
        </Layout>
    )
}