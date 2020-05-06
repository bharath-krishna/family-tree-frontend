import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap';

export default class LeftPanel extends Component {
  state = {
    showNames: false
  }
  handleShowNamesChange = () => {
    this.state.showNames = true
  }
  render() {
    return (
      <ListGroup className="m-2">
        <ListGroup.Item action href="/network2d">
            <h5>Network 2D</h5>
        </ListGroup.Item>
        <ListGroup.Item action href="/network3d">
            <h5>Network 3D</h5>
        </ListGroup.Item>
        <ListGroup.Item action href="/tree">
            <h5>Tree</h5>
        </ListGroup.Item>
      </ListGroup>
    )
  }
}