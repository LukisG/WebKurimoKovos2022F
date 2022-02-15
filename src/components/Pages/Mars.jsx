import React from 'react'
import GetData from '../GetData'
import { Layout } from 'antd';
import HeaderComp from './PageComp/HeaderComp';
import FooterComp from './PageComp/FooterComp';
const { Header, Footer, Sider, Content } = Layout;
const Mars = () => {
    return (
        <Layout>
            
            <Header><HeaderComp /></Header>
            <Content><GetData/></Content>
            <Footer><FooterComp/></Footer>
        </Layout>
    )
}

export default Mars
