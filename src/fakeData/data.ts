export interface productType {
  title: string
  location: string
}
export const graphData = {
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
}

const competingProducts: productType[] = [
  {
    title: 'Axa Seguros',
    location: 'Madrid',
  },
  {
    title: 'Vidacaixa',
    location: 'Madrid',
  },
  {
    title: 'Allianz',
    location: 'Madrid',
  },
  {
    title: 'Catalana Occidente',
    location: 'Madrid',
  },
  {
    title: 'Generali',
    location: 'Madrid',
  },
  {
    title: 'Helvetia',
    location: 'Madrid',
  },
  {
    title: 'Santalucia',
    location: 'Madrid',
  },
  {
    title: 'Mapfre',
    location: 'Madrid',
  },
]

export { competingProducts }

