import React, { Component } from 'react'
import ForceGraph2D from 'react-force-graph-2d'
import SpriteText from 'three-spritetext';

export default class NetworkChart2D extends Component {
  getColor = n => '#' + ((n * 1234567) % Math.pow(2, 24)).toString(16).padStart(6, '0');

  render() {
    return (
      <div>
        <ForceGraph2D
          width={900}
          height={600}
          graphData={this.props.data["data"]}
          onNodeDragEnd={node => {
            node.fx = node.x;
            node.fy = node.y;
            node.fz = node.z;
          }}
        nodeDesc={node => node.name}
          linkThreeObjectExtend={true}
        //   linkThreeObject={link => {
        //     // extend link with text sprite
        //     const sprite = new SpriteText(`${link.source} > ${link.target}`);
        //     sprite.color = 'lightgrey';
        //     sprite.textHeight = 1.5;
        //     return sprite;
        //   }}
        linkThreeObject="dfsdf"
          linkDirectionalArrowLength={5.5}
          linkDirectionalArrowRelPos={1}
          //   linkLabel={d => d.label}
          // nodeAutoColorBy={d => d.id}
          // linkAutoColorBy={d => this.state.gData.nodes[d.source].id%this.state.GROUPS}
          linkColor={d => "red"}
          linkWidth={2}
        />,
      </div>
    )
  }
}