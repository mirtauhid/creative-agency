import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import '../../Style/Style.css';
import Logo from '../../../images/logos/logo.png';
import Review from "../Review/Review";
import ServiceList from "../ServiceList/ServiceList";
import Order from "../Order/Order";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faCommentAlt, faBars } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from "../../../App";

const Customer = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    return (
        <Router>
            <Container className="customer-dashboard" fluid >
                <Row className="dashboard-top">
                    <Col md={3} className="logo-container">
                        <img src={Logo} className="logo main-logo" alt="" />
                    </Col>
                    <Col md={9} className="d-flex justify-content-between">
                        <Switch>
                            <Route exact path="/customer/order">
                                <h3>Order</h3>
                            </Route>
                            <Route path="/customer/service-list">
                                <h3>Service List</h3>
                            </Route>
                            <Route path="/customer/review">
                                <h3>Review</h3>
                            </Route>
                        </Switch>
                        <div className="d-flex">
                            <img style={{ height: '40px', width: '40px', borderRadius: '50%',marginRight: '10px'}} src={loggedInUser.photo} alt="" />
                            <p style={{fontWeight: '500' }}><small>{loggedInUser.name}</small></p>
                        </div>
                    </Col>

                </Row>
                <Row>
                    <Col md={3} className="list-container">
                        <ul style={{ listStyle: 'none' }}>
                            <li>
                                <Link className="list-group-item none-style" to="/customer/order"><FontAwesomeIcon style={{ marginRight: '10px' }} icon={faShoppingCart} />Order</Link>
                            </li>
                            <li>
                                <Link className="list-group-item none-style" to="/customer/service-list"><FontAwesomeIcon style={{ marginRight: '10px' }} icon={faBars} />Service List</Link>
                            </li>
                            <li>
                                <Link className="list-group-item none-style" to="/customer/review"><FontAwesomeIcon style={{ marginRight: '10px' }} icon={faCommentAlt} />Review</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col md={9} className="main-container">
                        <div style={{ padding: '20px 20px 40px 0px' }}>
                            <Switch>
                                <Route exact path="/customer/order/:id">
                                    <Order></Order>
                                </Route>
                                <Route exact path="/customer/order">
                                    <Order></Order>
                                </Route>
                                <Route path="/customer/service-list">
                                    <ServiceList></ServiceList>
                                </Route>
                                <Route path="/customer/review">
                                    <Review></Review>
                                </Route>
                            </Switch>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Router>
    );
};

export default Customer;