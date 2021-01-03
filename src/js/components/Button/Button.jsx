import React from 'react'
import PropTypes from 'prop-types'

import './Button.style.css'

const Button = ({ children, onClick, style, type, variant, ...props }) => (
    <button
        {...props}
        type={type}
        className={`${type}-btn`}
        style={style}
        onClick={onClick}
    >
        {children}
    </button>
)

Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.any.isRequired, // eslint-disable-line
    style: PropTypes.object,
    type: PropTypes.string,
    variant: PropTypes.string,
}

Button.defaultProps = {
    style: {},
    type: 'primary',
    variant: 'button',
    onClick: null,
}


export default Button