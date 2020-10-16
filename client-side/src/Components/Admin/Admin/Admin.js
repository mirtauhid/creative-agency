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
import ServiceList from "../ServiceList/ServiceList";
import AddService from "../AddService/AddService";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import '../../Style/Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUserPlus, faBars } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from "../../../App";

const Admin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    return (
        <Router>
            <Container className="admin-dashboard" fluid >
                <Row className="dashboard-top">
                    <Col md={3} className="logo-container">
                        <img src={Logo} className="logo main-logo" alt="" />
                    </Col>
                    <Col md={9} className="d-flex justify-content-between">
                        <Switch>
                            <Route exact path="/admin/service-list">
                                <h3>Services List</h3>
                            </Route>
                            <Route path="/admin/add-service">
                                <h3>Add Services</h3>
                            </Route>
                            <Route path="/admin/make-admin">
                                <h3>Make Admin</h3>
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
                                <Link className="list-group-item none-style" to="/admin/service-list"><FontAwesomeIcon style={{ marginRight: '10px' }} icon={faBars} />Service List</Link>
                            </li>
                            <li>
                                <Link className="list-group-item none-style" to="/admin/add-service"><FontAwesomeIcon style={{ marginRight: '10px' }} icon={faPlus} />Add Service</Link>
                            </li>
                            <li>
                                <Link className="list-group-item none-style" to="/admin/make-admin"><FontAwesomeIcon style={{ marginRight: '10px' }} icon={faUserPlus} />Make Admin</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col md={9} className="main-container">
                        <div style={{ padding: '20px 20px 40px 0px' }}>
                            <Switch>
                                <Route exact path="/admin/service-list">
                                    <ServiceList></ServiceList>
                                </Route>
                                <Route path="/admin/add-service">
                                    <AddService></AddService>
                                </Route>
                                <Route path="/admin/make-admin">
                                    <MakeAdmin></MakeAdmin>
                                </Route>
                            </Switch>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Router>
    );

};

export default Admin;