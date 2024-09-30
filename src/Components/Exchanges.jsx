import React, { useState } from 'react';
import { Typography, Row, Col, Collapse, Avatar } from 'antd';
import { useGetAllCryptosQuery, useGetCryptoDetailsQuery } from '../services/CryptoAPI';
import Loader from './Loader';
import millify from 'millify';

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const [selectedCoin, setSelectedCoin] = useState(null);
  const { data: cryptoList, isFetching } = useGetAllCryptosQuery();
  const { data: coinDetails, isFetching: isCoinDetailsFetching } = useGetCryptoDetailsQuery(selectedCoin, {
    skip: !selectedCoin,
  });
  console.log(coinDetails)
  const [key, setKey] = useState(null);

  const handlePanelChange = (coinId) => {
    setKey(key === coinId ? null : coinId);
    setSelectedCoin(coinId)
  };


  if (isFetching) return <Loader />;

  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Changes</Col>
      </Row>

      <Row>
        {cryptoList?.data?.coins?.map((coin, i) => (
          <Col span={24} key={i}>
            <Collapse activeKey={key}
              onChange={() => handlePanelChange(coin?.uuid)}
            >
              <Panel
                key={coin?.uuid}
                showArrow={false}
                header={(
                  <Row key={coin?.uuid}>
                    <Col span={6}>
                      <Text><strong>{coin.rank}.</strong></Text>
                      <Avatar className="exchange-image" src={coin?.iconUrl} />
                      <Text><strong>{coin.name}</strong></Text>
                    </Col>
                    <Col span={6}>${millify(coin['24hVolume'])}</Col>
                    <Col span={6}>{millify(coin?.marketCap)}</Col>
                    <Col span={6}>{millify(coin?.change)}%</Col>
                  </Row>
                )}
              >
                {isCoinDetailsFetching ? (
                  <Loader />
                ) : (
                  <Text><strong>{coinDetails?.data?.coin?.name}</strong>:- {coinDetails?.data?.coin?.description}</Text>
                )}
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchanges;
