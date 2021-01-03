import React from 'react'
import PropTypes from 'prop-types'

import getStyles from './Input.style'
const styles = getStyles()

const Input = ({ title }) => (
    <div style={styles.wrapper}>
        <p>{title}</p>
    </div>
)

Input.propTypes = {
    title: PropTypes.string,
}

Input.defaultProps = {
    title: 'Hello world!',
}

export default Input
