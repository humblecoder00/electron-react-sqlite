import React from 'react'
import PropTypes from 'prop-types'

import getStyles from './Modal.style'
const styles = getStyles()

const Modal = ({
    isVisible,
    onDismiss,
    height,
    width,
    children,
}) => {
    if (!isVisible) return null

    return (
        <div>
            <div style={styles.wrapper} onClick={onDismiss} />
            <div
                style={{
                    ...styles.innerWrapper,
                    height: height,
                    maxHeight: height,
                    width: width,
                }}
            >
                {children}
            </div>
        </div>
    )
}

Modal.propTypes = {
    isVisible: PropTypes.bool,
    onDismiss: PropTypes.func.isRequired,
    children: PropTypes.any.isRequired, // eslint-disable-line
    height: PropTypes.number,
    width: PropTypes.number,
}

Modal.defaultProps = {
    isVisible: false,
    height: 250,
    width: 250,
}

export default Modal
