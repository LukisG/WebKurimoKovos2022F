import React from 'react'
import { Layout } from 'antd';
import MainPageRovers from '../MainPage.Rovers';
import HeaderComp from './PageComp/HeaderComp';
import FooterComp from './PageComp/FooterComp';
const { Header, Footer, Sider, Content } = Layout;

const Main = () => {
    return (
        <Layout>
            <Header><HeaderComp/></Header>
            <Content><MainPageRovers/></Content>
            <Footer><FooterComp/></Footer>
        </Layout>
    )
}

export default Main
