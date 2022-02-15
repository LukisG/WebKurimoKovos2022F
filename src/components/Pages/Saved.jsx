import React from 'react'
import { Layout } from 'antd';
import HeaderComp from './PageComp/HeaderComp';
import FooterComp from './PageComp/FooterComp';
const { Header, Footer, Sider, Content } = Layout;

const Saved = () => {
    return (
        <Layout>

            <Header><HeaderComp /></Header>
            <Content><h1>Saved Photos</h1></Content>
            <Footer><FooterComp/></Footer>
        </Layout>
    )
}

export default Saved
