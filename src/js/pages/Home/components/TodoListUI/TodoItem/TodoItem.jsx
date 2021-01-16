import React from 'react'
import PropTypes from 'prop-types'

import editIcon from 'resources/editIcon.svg'

import getStyles from './TodoItem.style'
const styles = getStyles()

const TodoItem = ({ todoId, description, onOpen, onDelete, onEdit }) => {
    return (
        <div style={styles.todoItem}>
            <p style={styles.todoText} onClick={() => onOpen(todoId)}>{description}</p>
            <div style={{ display: 'flex', height: 25 }}>
                <span style={styles.editBtn} onClick={() => onEdit(todoId)}><img src={editIcon} alt={'edit-icon'} style={{ width: '100%' }} /></span>
                <span style={styles.deleteBtn} onClick={() => onDelete(todoId)}>X</span>
            </div>
        </div>
    )
}

TodoItem.propTypes = {
    data: PropTypes.array,
    onOpen: PropTypes.func.isRequired,
}

TodoItem.defaultProps = {
    data: [],
}

export default TodoItem
