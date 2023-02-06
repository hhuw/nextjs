import styles from './index.module.css'
import Layout from '../../components/Layout'
import { Row, Col } from 'antd'
import Sider from '../../components/Sider'

export default function Post({ data }) {

    return (
        <Layout>
            <Row className={styles.container}>
                <Col className={styles.article_main} xs={24} sm={24} md={24} lg={17} xl={17}>
                    info
                </Col>
                <Col className={styles.sider} xs={0} sm={0} md={0} lg={6} xl={6} offset={1}>
                    <Sider>

                    </Sider>
                </Col>
            </Row>
        </Layout>
    )
}

export const getServerSideProps = async context => {
    const { articleId } = context.query;
    return {
        props: { data: 1 },
    };
};