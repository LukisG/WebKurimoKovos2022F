import React from 'react'
import { Layout } from 'antd';
import HeaderComp from './PageComp/HeaderComp';
const { Header, Footer, Sider, Content } = Layout;
const Errorpage = () => {
    return (
        <Layout>

            <Header><HeaderComp /></Header>
            <Content><h1>404 PAGE NOT FOUND!</h1></Content>
            <Footer>Footer</Footer>
        </Layout>
    )
}

export default Errorpage
