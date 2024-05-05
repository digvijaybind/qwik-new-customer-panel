import React from 'react'

const StyledSection = ({ children, containerClassName = '', className = '', styles = {}, containerStyles = {} }) => {
    return (
        <section className={`${containerClassName} w-full `} style={containerStyles}>
            <div
                style={styles}
                className={`${className} xs:w-full sm:px-4 lg:px-6 px-4 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl 2xl:max-w-5xl max-w-6xl mx-auto`}
            >
                {children}
            </div>
        </section >
    )
}

export default StyledSection