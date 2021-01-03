import React from 'react'
import PropTypes from 'prop-types'

import getStyles from './Example.style'
const styles = getStyles()

const Example = ({ title }) => (
    <div style={styles.wrapper}>
        <p>{title}</p>
    </div>
)

Example.propTypes = {
    title: PropTypes.string,
}

Example.defaultProps = {
    title: 'Hello world!',
}

export default Example
