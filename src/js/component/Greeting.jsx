import React from 'react'
import PropTypes from 'prop-types'


const Greeting = (props) => {
    //destructuración
    const {
        myClass,
        deimian
    } = props

    // console.log(props)
    return (
        <>
            <h1 className={myClass}>
                {deimian}
            </h1>
        </>
    )
}

export default Greeting;

Greeting.propTypes = {
    deimian: PropTypes.string.isRequired,
    myClass: PropTypes.string
}