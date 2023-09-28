import { graphData } from '@/src/fakeData/data'
import CytoscapeComponent from 'react-cytoscapejs'

export default function GraphDisplay() {
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

  const style = [
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
        style={{ width: '100%', height: '400px' }}
        zoomingEnabled={true}
        maxZoom={3}
        minZoom={0.1}
        autounselectify={false}
        boxSelectionEnabled={true}
        layout={layout}
        stylesheet={style}
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
      />
    </div>
  )
}
