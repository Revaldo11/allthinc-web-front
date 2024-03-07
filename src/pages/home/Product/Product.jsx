import React, {useState} from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import iconArrowRight from '../../../assets/images/icon/i-arrow-right.svg';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { expolreNow } from "../../../common/data/DataProduct";

const Product = () => {

    const [ProductList, setProductList] = useState(expolreNow);
    const [visibleProducts, setVisibleProducts] = useState(8);

    const favouriteBtn = (ele) => {
        if (ele.closest("button").classList.contains("active")) {
            ele.closest("button").classList.remove("active");
        } else {
            ele.closest("button").classList.add("active");
        }
    };

    const loadMore = () => {
        setVisibleProducts(prev => prev + 8);
    };

  return (
    <React.Fragment>
            <div className='popular__creators__section mt-20'>
                <Container>
                    <div className="more mb-9">
                        <Row>
                            <Col className='d-flex justify-between align-items-center'>
                                <h2 className="popular__creators__title">Terbaru dari Kreator</h2>
                                <Link to='/' >
                                    <div className="more__text d-flex">
                                        <p className="">Selengkapnya</p>
                                        <div className="more__icon">
                                            <img src={iconArrowRight} alt="" />
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                        </Row>
                    </div>

                    <Row className="row-cols-xxl-4 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-2"
                        id="productcard-list">
                        {/* {ProductList.map((item, i) => (
                            <Col key={i} className="list__element">
                                <Card className="product__card">
                                    <Card.Img variant='top' className='card__img__top explore__img' src={item.img} />
                                    <div className="bookmark-icon position-absolute p-2">
                                        <button
                                        type="button"
                                        className="btn btn-icon active"
                                        data-bs-toggle="button"
                                        aria-pressed="true"
                                        onClick={(e) => favouriteBtn(e.target)}
                                        >
                                            <FavoriteIcon className='favorite__icon' />
                                        </button>
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="product__title">{item.title}</Card.Title>
                                        <Card.Subtitle className="product__creator">{item.owner}</Card.Subtitle>
                                        <Card.Text className="product__normal__price">IDR {item.price}</Card.Text>
                                        <Card.Text className="product__discount__price">
                                            <h3 className='product__discount__price__text'>IDR 200.000</h3>
                                            <div className='product__discount__tag'>
                                                <p className='product__discount__tag__text'>-50 %</p>
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))} */}

                        {ProductList.slice(0, visibleProducts).map((item, i) => (
                            <Col key={i} className="list__element">
                                <Card className="product__card">
                                    <Card.Img variant='top' className='card__img__top explore__img' src={item.img} />
                                    <div className="bookmark-icon position-absolute p-2">
                                        <button
                                            type="button"
                                            className="btn btn-icon active"
                                            data-bs-toggle="button"
                                            aria-pressed="true"
                                            onClick={(e) => favouriteBtn(e.target)}
                                        >
                                            <FavoriteIcon className='favorite__icon' />
                                        </button>
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="product__title">{item.title}</Card.Title>
                                        <Card.Subtitle className="product__creator">{item.owner}</Card.Subtitle>
                                        <Card.Text className="product__normal__price">IDR {item.price}</Card.Text>
                                        <Card.Text className="product__discount__price">
                                            <h3 className='product__discount__price__text'>IDR 200.000</h3>
                                            <div className='product__discount__tag'>
                                                <p className='product__discount__tag__text'>-50 %</p>
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}

                    </Row>
                </Container>
            </div>
        </React.Fragment>
  )
}

export default Product