import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import Header from './header'
import Footer from './footer'
import LeftPanel from './leftpanel'
import TreeChart from './tree'
import { Route} from 'react-router-dom'
import NetworkChart3D from './network3d'
import NetworkChart2D from './network2d'
import api from "./api.js";

export default class AppLayout extends Component {
  state = {
    data: "",
    uri: "/network",
  }
  async componentDidMount() {
    var resp = await api.get(this.state.uri);
    this.setState({ data: resp.data });
  }
  render () {
    return (
      <div>
        <Row>
          <Col md={{ span:12, offset: 0 }}>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 2, offset: 0 }}>
            <LeftPanel />
          </Col>
          <Col md={{ span: 10, offset: 0 }}>
            <Route exact path="/tree">
              <TreeChart />
            </Route>
            <Route path="/network3d">
              <NetworkChart3D data={this.state.data}/>
            </Route>
            <Route path="/network2d">
              <NetworkChart2D data={this.state.data}/>
            </Route>
          </Col>
        </Row>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </div>
    )
  }
}