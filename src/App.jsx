import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from 'antd';
import Home from './pages/Home';
import AddEmployee from './pages/Employee/AddEmployee';
import EditEmployee from './pages/Employee/EditEmployee';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import PrintEmployee from './pages/Employee/PrintEmployee';
import './App.scss'
import Logout from './pages/Logout';
const { Header, Content, Footer } = Layout;

//------------------------------------------------------------------------------

function App() { 
  const [collapsed, setCollapsed] = useState(true);
 

  return (
    <Layout className='main'>
      <Layout className='conatiner'>
      <BrowserRouter>
      <Sidebar collapsed={collapsed}/>
        <Header
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent:'space-between'
          }}
        >
          <Navbar setCollapsed={setCollapsed}/>
        </Header>
        <Content
          style={{
            padding: '0 48px',
          }}
        >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add-employee" element={<AddEmployee />} />
              <Route path="/edit-employee" element={<EditEmployee/>} />
              <Route path="/print-employee" element={<PrintEmployee/>} />
              <Route path="/logout" element={<Logout/>} />
            </Routes>
        </Content>
        </BrowserRouter>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          ABC Org ©{new Date().getFullYear()} Created by ABC Org
        </Footer>
      </Layout>
    </Layout>
  )
}

export default App
