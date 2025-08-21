import React from 'react'

const TwoColumns = ({title,description,button,image}) => {
  return (
    <section className='container flex justify-between items-center gap-12 py-12'>
        <img src={image} alt="" />
        <div>
            <h2 className='headline-2 text-neutral-d-grey mb-4'>{title}</h2>
            <p className='text-neutral-grey body-3-regular mb-8'>
               {description}
            </p>
            <a href={button.url}>{button.label}</a>
        </div>
    </section>
  )
}

export default TwoColumns;
