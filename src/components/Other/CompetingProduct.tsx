import { Button } from '../ui/button'

interface Props {
  title: string
  location: string
}

export default function CompetingProduct(props: Props) {
  return (
    <div className='grid w-full grid-flow-col grid-cols-3 bg-gray-light px-4 py-2'>
      <p>{props.title}</p>
      <Button>{props.location}</Button>

      <Button variant={'open_link'}>Open link</Button>
    </div>
  )
}
