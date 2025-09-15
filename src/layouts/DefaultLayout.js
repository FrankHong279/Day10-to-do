import {NavLink, Outlet} from "react-router";
import {Flex, Layout, Menu} from 'antd';
import {useState} from "react";

const { Header, Footer, Sider, Content } = Layout;

export function DefaultLayout() {
    const [current, setCurrent] = useState('home');

    const onClick = (e) => {
        setCurrent(e.key);
    };
    const items = [
        {
            key: 'home',
            label: <NavLink to={"/"}>Home</NavLink>
        },
        {
            key: 'done-list',
            label: <NavLink to={"/doneList"}>DoneList</NavLink>
        },
        {
            key: 'about-us',
            label: <NavLink to={"/aboutUs"}>AboutUs</NavLink>
        }
    ]

    return <Layout>
        <Header>
            <Menu onClick={onClick}
                  selectedKeys={[current]}
                  theme="dark"
                  mode="horizontal" items={items}/>
        </Header>
        <Content>
            <Outlet/>
        </Content>
        <Footer>
            @Copyright Frank
        </Footer>
    </Layout>
}