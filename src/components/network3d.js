import React, { Component } from 'react'
import ForceGraph3D from 'react-force-graph-3d'
import SpriteText from 'three-spritetext';

export default class NetworkChart3D extends Component {
  getColor = n => '#' + ((n * 1234567) % Math.pow(2, 24)).toString(16).padStart(6, '0');

  genRandomTrees(N = 300, reverse = false) {
    return {
      nodes: [...Array(N).keys()].map(i => ({ id: i, name: i })),
      links: [...Array(N).keys()]
      .filter(id => id)
      .map(id => ({
        [reverse ? 'target' : 'source']: id,
        [reverse ? 'source' : 'target']: Math.round(Math.random() * (id-1))
      }))
    };
  }

  render() {
    return (
      <div>
        <ForceGraph3D
          width={900}
          height={600}
          graphData={this.props.data["data"]}
          onNodeDragEnd={node => {
            node.fx = node.x;
            node.fy = node.y;
            node.fz = node.z;
          }}
          // nodeDesc={node => node.name}
          // linkThreeObjectExtend={true}
          // linkThreeObject={link => {
          //   // extend link with text sprite
          //   const sprite = new SpriteText(`${link.source} > ${link.target}`);
          //   sprite.color = 'lightgrey';
          //   sprite.textHeight = 1.5;
          //   return sprite;
          // }}
          // nodeThreeObject={node => {
          //   const sprite = new SpriteText(node.name);
          //   sprite.color = "white";
          //   sprite.textHeight = 8;
          //   return sprite;
          // }}
          linkDirectionalArrowLength={5.5}
          linkDirectionalArrowRelPos={1}
          linkLabel={d => d.label}
          // nodeAutoColorBy={d => d.id}
          // linkAutoColorBy={d => this.state.gData.nodes[d.source].id%this.state.GROUPS}
          linkColor={d => "white"}
          linkWidth={2}
        />,
      </div>
    )
  }
}