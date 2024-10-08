import React from 'react'


type Props = {
    children: React.ReactNode
}

 const SectionHeading = ({children} : Props) => {
  return (
    <h2 className='text-3xl font-medium capitalize mb-8 text-center'>{children}</h2>
  )
}

export default SectionHeading