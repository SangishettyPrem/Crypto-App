import React from 'react'
import millify from 'millify'
import { Typography, Statistic, Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/CryptoAPI'
import { Cryptocurrenices, News } from "../Components"
import Loader from './Loader'

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return <Loader />;
  return (
    <>
      <Title level={2} className='heading'>Global Crypto Stats</Title>
      <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats?.total} /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats?.totalExchanges)} /></Col>
        <Col span={12}><Statistic title="Total Market Cap:" value={millify(globalStats?.totalMarketCap)} /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats?.total24hVolume)} /></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(globalStats?.totalMarkets)} /></Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className='home-title'>Top 10 Cryptocurrenices in the world.</Title>
        <Title level={3} className='show-more'><Link to={"/cryptocurrenices"}>Show more</Link></Title>
      </div>
      <Cryptocurrenices simplified />
      <div className="home-heading-container">
        <Title level={2} className='home-title'>Latest News about the Cryptocurrenices.</Title>
        <Title level={3} className='show-more'><Link to={"/news"}>Show more</Link></Title>
      </div>
      <News simplified />
    </>
  )
}

export default Homepage