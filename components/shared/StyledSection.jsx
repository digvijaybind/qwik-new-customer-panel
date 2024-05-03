import React from 'react'

const StyledSection = ({ children, className = '' }) => {
    return (
        <section className='w-full'>
            <div className={`${className} xs:w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl 2xl:max-w-5xl max-w-6xl 2x mx-auto`}>
                {children}
            </div>
        </section>
    )
}

export default StyledSection