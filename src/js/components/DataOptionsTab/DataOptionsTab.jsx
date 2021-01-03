import React from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'

import getStyles from './DataOptionsTab.style'
const styles = getStyles()

const DataOptionsTab = ({ onImport, onExport }) => (
    <div style={styles.wrapper}>
        <Button children={'Export data'} style={styles.optionButton} onClick={onExport} />
        <Button children={'Import data'} style={styles.optionButton} onClick={onImport} />
    </div>
)

DataOptionsTab.propTypes = {
    title: PropTypes.string,
}

DataOptionsTab.defaultProps = {
    title: '',
}

export default DataOptionsTab
