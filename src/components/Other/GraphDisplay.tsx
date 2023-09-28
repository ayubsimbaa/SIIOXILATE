 'use client'

import { useState } from 'react';
import CytoscapeComponent from 'react-cytoscapejs';

export default function GraphDisplay() {
  const [width, setWidth] = useState('100%');  // Fixed typo: setWith -> setWidth
  const [height, setHeight] = useState('400px');


    const [graphData, setGraphData] = useState({
      nodes: [
        { data: { id: '1', label: 'Policy 1', type: 'Policy' } },
        { data: { id: '2', label: 'Coverage 1', type: 'Coverage' } },
        { data: { id: '3', label: 'Policy 2', type: 'Policy' } },
        { data: { id: '4', label: 'Coverage 2', type: 'Coverage' } },
        { data: { id: '5', label: 'Claimant 1', type: 'Claimant' } },
        { data: { id: '6', label: 'Policy 3', type: 'Policy' } },
        { data: { id: '7', label: 'Coverage 3', type: 'Coverage' } },
        { data: { id: '8', label: 'Claimant 2', type: 'Claimant' } },
        { data: { id: '9', label: 'Claimant 3', type: 'Claimant' } },
        { data: { id: '10', label: 'Coverage 4', type: 'Coverage' } },
        { data: { id: '11', label: 'Coverage 5', type: 'Coverage' } },
        { data: { id: '12', label: 'Policy 4', type: 'Policy' } },
        { data: { id: '13', label: 'Coverage 6', type: 'Coverage' } },
      ],
      edges: [
        { data: { source: '1', target: '2', label: 'Coverage for Policy 1' } },
        { data: { source: '3', target: '4', label: 'Coverage for Policy 2' } },
        { data: { source: '3', target: '5', label: 'Claimant on Policy 2' } },
        { data: { source: '6', target: '5', label: 'Claimant on Policy 3' } },
        { data: { source: '6', target: '7', label: 'Coverage for Policy 3' } },
        { data: { source: '6', target: '8', label: 'Claimant on Policy 3' } },
        { data: { source: '6', target: '9', label: 'Claimant on Policy 3' } },
        { data: { source: '3', target: '13', label: 'Coverage for Policy 2' } },
      ],

    
  })


  const layout = {
    name: 'cose',
    fit: true,
    directed: true,
    padding: 50,
    animate: true,
    animationDuration: 1000,
    avoidOverlap: true,
    nodeDimensionsIncludeLabels: false,
  };

  const styleSheet = [
    {
      selector: 'node',
      style: {
        backgroundColor: (node: { data: (arg0: string) => string; }) => node.data('type') === 'ip' ? '#4a56a6' : '#78aaff',
        shape: (node: { data: (arg0: string) => string; }) => node.data('type') === 'ip' ? 'ellipse' : 'rectangle',
        width: 30,
        height: 30,
        label: 'data(label)',
        'overlay-padding': '6px',
        'z-index': '10',
        'text-outline-color': (node: { data: (arg0: string) => string; }) => node.data('type') === 'ip' ? '#4a56a6' : '#78aaff',
        'text-outline-width': '2px',
        color: 'white',
        fontSize: 20,
      },
    },
    
  ];

  let myCyRef;

  return (
    <div className='h-72 w-full overflow-hidden bg-gray-dark'>
      <CytoscapeComponent
        elements={CytoscapeComponent.normalizeElements(graphData)}
        style={{ width: width, height: height }}
        zoomingEnabled={true}
        maxZoom={3}
        minZoom={0.1}
        autounselectify={false}
        boxSelectionEnabled={true}
        layout={layout}
        stylesheet={styleSheet}
        cy={(cy: { on: (arg0: string, arg1: string, arg2: (evt: any) => void) => void; }) => {
          myCyRef = cy;

          cy.on('tap', 'node', (evt: { target: any; }) => {
            var node = evt.target;
            console.log('Tapped node data: ', node.data());
          });
        }}
        abc={console.log('myCyRef', myCyRef)}
      />
    </div>
  );
}
