'use client'

import { useState } from 'react'
import CytoscapeComponent from 'react-cytoscapejs'

export default function GraphDisplay() {
  const [width, setWith] = useState('100%')
  const [height, setHeight] = useState('400px')

  const [graphData, setGraphData] = useState({
    nodes: [
      { data: { id: '1', label: 'IP 1', type: 'ip' } },
      { data: { id: '2', label: 'Coverage 1', type: 'Coverage' } },
      { data: { id: '3', label: 'IP 2', type: 'ip' } },
      { data: { id: '4', label: 'Coverage 2', type: 'Coverage' } },
      { data: { id: '5', label: 'Coverage 3', type: 'Coverage' } },
      { data: { id: '6', label: 'IP 3', type: 'ip' } },
      { data: { id: '7', label: 'Coverage 5', type: 'Coverage' } },
      { data: { id: '8', label: 'Coverage 6', type: 'Coverage' } },
      { data: { id: '9', label: 'Coverage 7', type: 'Coverage' } },
      { data: { id: '10', label: 'Coverage 8', type: 'Coverage' } },
      { data: { id: '11', label: 'Coverage 9', type: 'Coverage' } },
      { data: { id: '12', label: 'IP 3', type: 'ip' } },
      { data: { id: '13', label: 'Coverage 10', type: 'Coverage' } },
    ],
    edges: [
      {
        data: { source: '1', target: '2', label: 'Node2' },
      },
      {
        data: { source: '3', target: '4', label: 'Node4' },
      },
      {
        data: { source: '3', target: '5', label: 'Node5' },
      },
      {
        data: { source: '6', target: '5', label: ' 6 -> 5' },
      },
      {
        data: { source: '6', target: '7', label: ' 6 -> 7' },
      },
      {
        data: { source: '6', target: '8', label: ' 6 -> 8' },
      },
      {
        data: { source: '6', target: '9', label: ' 6 -> 9' },
      },
      {
        data: { source: '3', target: '13', label: ' 3 -> 13' },
      },
    ],
  })

  const layout = {
    name: 'breadthfirst',
    fit: true,
    // circle: true,
    directed: true,
    padding: 50,
    // spacingFactor: 1.5,
    animate: true,
    animationDuration: 1000,
    avoidOverlap: true,
    nodeDimensionsIncludeLabels: false,
  }

  const styleSheet = [
    {
      selector: 'node',
      style: {
        backgroundColor: '#4a56a6',
        width: 30,
        height: 30,
        label: 'data(label)',
        'overlay-padding': '6px',
        'z-index': '10',
        //text props
        'text-outline-color': '#4a56a6',
        'text-outline-width': '2px',
        color: 'white',
        fontSize: 20,
      },
    },
    {
      selector: 'node:selected',
      style: {
        'border-width': '6px',
        'border-color': '#AAD8FF',
        'border-opacity': '0.5',
        'background-color': '#77828C',
        width: 50,
        height: 50,
        //text props
        'text-outline-color': '#77828C',
        'text-outline-width': 8,
      },
    },
    {
      selector: "node[type='Coverage']",
      style: {
        shape: 'rectangle',
      },
    },
    {
      selector: 'edge',
      style: {
        width: 3,
        // "line-color": "#6774cb",
        'line-color': '#fff',
        'target-arrow-color': '#6774cb',
        'target-arrow-shape': 'triangle',
        'curve-style': 'bezier',
      },
    },
  ]

  let myCyRef

  return (
    <div className='h-72 w-full overflow-hidden bg-gray-dark'>
      <CytoscapeComponent
        elements={CytoscapeComponent.normalizeElements(graphData)}
        // pan={{ x: 200, y: 200 }}
        style={{ width: width, height: height }}
        zoomingEnabled={true}
        maxZoom={3}
        minZoom={0.1}
        autounselectify={false}
        boxSelectionEnabled={true}
        layout={layout}
        stylesheet={styleSheet}
        // cy={cy => {
        //   myCyRef = cy;

        //   console.log("EVT", cy);

        //   cy.on("tap", "node", evt => {
        //     var node = evt.target;
        //     console.log("EVT", evt);
        //     console.log("TARGET", node.data());
        //     console.log("TARGET TYPE", typeof node[0]);
        //   });
        // }}
        abc={console.log('myCyRef', myCyRef)}
      />
    </div>
  )
}
