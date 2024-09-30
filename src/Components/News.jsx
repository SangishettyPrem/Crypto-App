import React, { useState } from 'react'
import { Card, Row, Col, Avatar, Typography, Select } from 'antd'
import moment from 'moment'
import { useGetCryptosNewsQuery } from '../services/CryptoNews'
import Loader from './Loader';

const { Title, Text } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const { data: cryptoNewsData, isFetching } = useGetCryptosNewsQuery();
  if (isFetching) return <Loader />
  return (
    <div>
      <Row gutter={[24, 24]}>
        {simplified ? cryptoNewsData?.data?.slice(0, 6).map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className='news-card'>
              <a href={news?.url} target='_blank' rel='noreferrer'>
                <div className='news-image-container'>
                  <Title className='news-title' level={5}>{news?.title}</Title>
                  <div>
                    <img src={news?.thumbnail || "https://th.bing.com/th/id/OIP.-22BoK-eq92r680-dZY4HgHaEc?rs=1&pid=ImgDetMain"} alt="News" sizes='100 100' className='img' />
                  </div>
                </div>
                <p>
                  {news?.description > 100 ? news?.description.substring(0, 100) : news?.description}
                </p>
                <div className='provider-container'>
                  <Text>{moment(news?.createdAt).startOf('ss').fromNow()}</Text>
                </div>
              </a>

            </Card>
          </Col>
        )) : cryptoNewsData?.data?.slice(0, 18).map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className='news-card'>
              <a href={news?.url} target='_blank' rel='noreferrer'>
                <div className='news-image-container'>
                  <Title className='news-title' level={5}>{news?.title}</Title>
                  <div>
                    <img src={news?.thumbnail || "https://th.bing.com/th/id/OIP.-22BoK-eq92r680-dZY4HgHaEc?rs=1&pid=ImgDetMain"} alt="News" sizes='100 100' className='img' />
                  </div>
                </div>
                <p>
                  {news?.description > 100 ? news?.description.substring(0, 100) : news?.description}
                </p>
                <div className='provider-container'>
                  <Text>{moment(news?.createdAt).startOf('ss').fromNow()}</Text>
                </div>
              </a>

            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default News


// createdAt
// :
// "Sun, 29 Sep 2024 14:39:29 +0100"
// description
// :
// "The current market conditions are unpredictable. However, two meme coins - Shiba Inu and Cutoshi - are growing rapidly, while defying bearish conditions. Shiba Inu’s trade volume is increasing. Meanwhile, Cutoshi, a new project, has stolen the limelight. It is a meme coin that has convinced investors and experts with its real-world utility."
// thumbnail
// :
// "https://cryptodaily.blob.core.windows.net/space/Screenshot%202024-09-29%20at%2014.38.43.png"
// title
// :
// "Analysts Excited As DeFi Coin Cutoshi Predicted To Replicate The Success Of Shiba Inu"
// url
// :
// "https://cryptodaily.co.uk/2024/09/analysts-exci