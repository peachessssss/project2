import React, { useState } from 'react';
import {Menu} from 'antd';
import { Layout, Breadcrumb } from 'antd';
import Bisection from './Bisection';
import Conjugate from './Conjugate';
import False from './False';
import Onepoint from './Onepoint';
import Gausseliminate from './Geli';
import Cramer from './Cramer'
import Jordan from './Jordan'
import Jacobi from './Jacobi'
import LU from './LU'
import Raphson from './Raphson'
import Secant from './Secant'
import Seidel from './Seidel'
import Spline from './Spline'
import Newtondivide from './Newtondivide'
import Lagrange from './Lagrange';
import MLR from './MultiRegression'
import LR from './LinearRegression'
import PR from './PolyRegression'
import CSR from './Simpson';
import CTR from './Trapezoidal'
import Forward from './Forward'
import Backward from './Backward'
import Central from './Central'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function App() {
const [page,setpage]=useState()
const Bisectionpage = () => setpage(<Bisection/>)
const Conjugatepage = () => setpage(<Conjugate/>)
const Falsepage = () => setpage(<False/>)
const Onepointpage = () => setpage(<Onepoint/>)
const Gausseliminatepage = () => setpage(<Gausseliminate/>)
const Cramerpage = () => setpage(<Cramer/>)
const Jordanpage = () => setpage(<Jordan/>)
const Jacobipage = () => setpage(<Jacobi/>)
const LUpage = () => setpage(<LU/>)
const Raphsonpage = () => setpage(<Raphson/>)
const Secantpage = () => setpage(<Secant/>)
const Seidelpage = () => setpage(<Seidel/>)
const Splinepage = () => setpage(<Spline/>)
const Newtondividepage = () => setpage(<Newtondivide/>)
const Lagrangepage = () => setpage(<Lagrange/>)
const MLRpage = () => setpage(<MLR/>)
const LRpage = () => setpage(<LR/>)
const PRpage = () => setpage(<PR/>)
const CSRpage = () => setpage(<CSR/>)
const CTRpage =() => setpage(<CTR/>)
const Forwardpage =() => setpage(<Forward/>)
const Backwardpage =() => setpage(<Backward/>)
const Centralpage =() => setpage(<Central/>)
  return (
    <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                Root of equation
              </span>
            }
          >
            <Menu.Item onClick={Bisectionpage} 
            key="1">Bisection</Menu.Item>
            <Menu.Item onClick={Falsepage}
              key="2">False Position</Menu.Item>
            <Menu.Item onClick={Onepointpage} 
            key="3">One-Point Iteration</Menu.Item>
            <Menu.Item onClick={Raphsonpage} 
            key="4">Newton Raphson</Menu.Item>
            <Menu.Item onClick={Secantpage}
            key="5">Secant Method</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                Linear Algebra
              </span>
            }
          >
            <Menu.Item onClick={Cramerpage} 
            key="6">Cramer's Rule</Menu.Item>
            <Menu.Item onClick={Gausseliminatepage}
            key="7">Gauss's Elimination</Menu.Item>
            <Menu.Item onClick={Jordanpage} 
            key="88">Gauss Jordon</Menu.Item>
            <Menu.Item onClick={LUpage} 
            key="8">LU Decomposition</Menu.Item>
            <Menu.Item onClick={Jacobipage}
             key="9">Jacobi Iteration Method</Menu.Item>
            <Menu.Item onClick={Seidelpage} 
            key="10">Gauss Seidel Iteration</Menu.Item>
            <Menu.Item onClick={Conjugatepage} 
            key="11">Conjugate Gradient Method</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                Interpolation
              </span>
            }
          >
            <Menu.Item onClick={Newtondividepage}
             key="12">Newton Divide Difference</Menu.Item>
            <Menu.Item onClick={Lagrangepage} 
            key="13">Lagrange</Menu.Item>
            <Menu.Item onClick={Splinepage} 
            key="14">Spline</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                Least Square Error
              </span>
            }
          >
            <Menu.Item onClick={LRpage} 
            key="15">Linear Regression</Menu.Item>
            <Menu.Item onClick={PRpage}
             key="16">Polynomial Regression</Menu.Item>
            <Menu.Item onClick={MLRpage} 
            key="17">Multiple Linear Regression</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub5"
            title={
              <span>
                Integration
              </span>
            }
          >
            <Menu.Item onClick={CTRpage} 
            key="18">Composite Trapezoidal Rule</Menu.Item>
            <Menu.Item onClick={CSRpage} 
            key="19">Composite Simpson's Rule</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub6"
            title={
              <span>
                Difference
              </span>
            }
          >
            <Menu.Item onClick={Forwardpage} 
            key="18">Forward</Menu.Item>
            <Menu.Item onClick={Backwardpage} 
            key="19">Backward</Menu.Item>
             <Menu.Item onClick={Centralpage} 
            key="19">Central</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
        </Breadcrumb>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {page}
        </Content>
      </Layout>
    </Layout>
  </Layout>
);
 }
export default App;
