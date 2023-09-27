'use client'

import { useState } from 'react'
import CytoscapeComponent from 'react-cytoscapejs'

export default function GraphDisplay() {
  const data = {
    data: {
      actors: [
        {
          __typename: 'Actor',
          ID: 1,
          name: 'François Lallement',
          acted_in: [
            {
              __typename: 'Movie',
              ID: 3,
              title: 'Trip to the Moon, A (Voyage dans la lune, Le)',
              genres: [
                {
                  __typename: 'Genre',
                  ID: 5,
                  name: 'Action',
                },
                {
                  __typename: 'Genre',
                  ID: 6,
                  name: 'Adventure',
                },
              ],
            },
          ],
        },
        {
          __typename: 'Actor',
          ID: 2,
          name: 'Jules-Eugène Legris',
          acted_in: [
            {
              __typename: 'Movie',
              ID: 3,
              title: 'Trip to the Moon, A (Voyage dans la lune, Le)',
              genres: [
                {
                  __typename: 'Genre',
                  ID: 7,
                  name: 'Sci-Fi',
                },
              ],
            },
          ],
        },
      ],
    },
  }
  const [width, setWith] = useState('100%')
  const [height, setHeight] = useState('400px')
  const elements = [
    { data: { id: 'one', label: 'Node 1' }, position: { x: 0, y: 0 } },
    { data: { id: 'two', label: 'Node 2' }, position: { x: 100, y: 0 } },
    {
      data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' },
    },
  ]
  const [graphData, setGraphData] = useState({
    nodes: [
      { data: { id: '1', label: 'IP 1', type: 'ip' } },
      { data: { id: '2', label: 'Device 1', type: 'device' } },
      { data: { id: '3', label: 'IP 2', type: 'ip' } },
      { data: { id: '4', label: 'Device 2', type: 'device' } },
      { data: { id: '5', label: 'Device 3', type: 'device' } },
      { data: { id: '6', label: 'IP 3', type: 'ip' } },
      { data: { id: '7', label: 'Device 5', type: 'device' } },
      { data: { id: '8', label: 'Device 6', type: 'device' } },
      { data: { id: '9', label: 'Device 7', type: 'device' } },
      { data: { id: '10', label: 'Device 8', type: 'device' } },
      { data: { id: '11', label: 'Device 9', type: 'device' } },
      { data: { id: '12', label: 'IP 3', type: 'ip' } },
      { data: { id: '13', label: 'Device 10', type: 'device' } },
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
      selector: "node[type='device']",
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
    <div className='h-72 w-full bg-gray-dark overflow-hidden'>
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
