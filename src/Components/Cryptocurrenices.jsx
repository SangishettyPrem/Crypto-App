import React, { useEffect, useState } from 'react'
import millify from 'millify'
import { Row, Col, Card, Input } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/CryptoAPI'
import Loader from './Loader'

const Cryptocurrenices = ({ simplified }) => {
    const count = simplified ? 10 : 100
    const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
    const [cryptos, setcryptos] = useState([]);
    const [searchTerm, setsearchTerm] = useState('')

    useEffect(() => {
        const filteredCryptos = cryptoList?.data?.coins?.filter(crypto => crypto.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setcryptos(filteredCryptos);
    }, [cryptoList, searchTerm])

    if (isFetching) return <Loader />;
    return (
        <>
            {!simplified && <div div className='search-crypto'>
                <Input value={searchTerm} onChange={(e) => setsearchTerm(e.target.value)} placeholder='Search Crypto' />
            </div >
            }

            <Row gutter={[32, 32]} className='crypto-card-container'>
                {cryptos?.map((currency, i) => (
                    <Col key={i} xs={24} sm={12} lg={6} className='crypto-card'>
                        <Link to={`/crypto/${currency.uuid}`}>
                            <Card
                                title={`${currency.rank}. ${currency.name}`}
                                extra={<img src={currency.iconUrl} className='crypto-image' />}
                                hoverable
                            >
                                <p>Price: {millify(currency.price)}</p>
                                <p>Market Cap: {millify(currency.marketCap)}</p>
                                <p>Daily Change: {millify(currency.change)}%</p>
                            </Card>
                        </Link>
                    </Col>
                ))

                }
            </Row>
        </>
    )
}

export default Cryptocurrenices