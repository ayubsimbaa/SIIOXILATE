import React, { useState } from 'react'

export default function MainContent() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div className='space-y-3 pl-20 pt-20'>
      <Content color='blue' size='xl' />
      <div className='flex space-x-3'>
        <Content color='gray' size='lg' />
        <Content color='gray' size='xs' />
        <Content color='orange' size='md' />
        <Content color='gray' size='xs' />
      </div>
      <div className='flex gap-3'>
        <Content color='purple' size='md' />
        <Content color='gray' size='xs' />
        <Content color='gray' size='md' />
        <Content color='gray' size='xl' />
      </div>
      <div className='flex gap-3'>
        <Content color='gray' size='lg' />
        <Content color='gray' size='xs' />
        <Content color='gray' size='md' />
        <Content color='gray' size='xl' />
      </div>
      <div className='flex gap-3'>
        <Content color='gray' size='md' />
        <Content color='gray' size='xs' />
        <Content color='gray' size='sm' />
        <Content color='lightPurple' size='xl' />
      </div>
    </div>
  )
}

interface ContentProps {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  color: 'orange' | 'purple' | 'blue' | 'gray' | 'lightPurple'
  Icon?: React.ReactNode
}

function Content(props: ContentProps) {
  return (
    <div
      className={`h-6 rounded-md
  ${props.size === 'xs' ? 'w-16' : ''}
  ${props.size === 'sm' ? 'w-32' : ''}
  ${props.size === 'md' ? 'w-60' : ''}
  ${props.size === 'lg' ? 'w-80' : ''}
  ${props.size === 'xl' ? 'w-96' : ''}
  ${props.color === 'orange' ? 'bg-orange-500' : ''}
  ${props.color === 'purple' ? 'bg-purple-500' : ''}
  ${props.color === 'blue' ? 'bg-blue-400' : ''}
  ${props.color === 'gray' ? 'bg-gray-400' : ''}
  ${props.color === 'lightPurple' ? 'bg-blue-300' : ''}
  `}
    ></div>
  )
}
