import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import { Navbar, Homepage, CryptoDetails, Cryptocurrenices, Exchanges, News } from './Components/'
import './App.css'

const App = () => {
  return (
    <div className='app'>
      <div className="navbar">
        <Navbar />
      </div>


      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path='/' Component={Homepage} />
              <Route exact path='/exchanges' Component={Exchanges} />
              <Route exact path='/cryptocurrenices' Component={Cryptocurrenices} />
              <Route exact path='/crypto/:coinId' Component={CryptoDetails} />
              <Route exact path='/news' Component={News} />
            </Routes>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title level={3} style={{ textAlign: "center", color: "white" }}>
            Cryptocurrency <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to={"/"}>Home</Link>
            <Link to={"/cryptocurrenices"}>Cryptocurrenices</Link>
            <Link to={"/news"}>News</Link>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default App