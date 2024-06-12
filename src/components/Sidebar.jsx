/* eslint-disable react/prop-types */
import { Layout } from 'antd';
const {  Sider } = Layout;
import { Link } from "react-router-dom";

const Sidebar = ({collapsed}) => {

  return (
    <Layout className='sidebar'>
    <Sider trigger={null} collapsible collapsed={collapsed} hidden={collapsed}>
      <div className="demo-logo-vertical" />
      <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/'>Profile</Link></li>
                <li><Link to='/'>Logout</Link></li>
            </ul>
    </Sider>
    </Layout>
  )
}

export default Sidebar