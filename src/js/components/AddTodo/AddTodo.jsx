import React from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'
import Input from '../Input'

import getStyles from './AddTodo.style'
const styles = getStyles()

class AddTodo extends React.PureComponent {
    state = {
        value: '',
        // errorMsg: null,
    }

    // handleInput = (e) => {
    //     this.setState({ value: e.target.value, errorMsg: null })
    // }

    handleAddTodo = (e) => {
        e.preventDefault()
        e.stopPropagation()
        this.props.onAdd(this.props.inputValue)
    }

    render () {
        const { errorMsg, onInputChange, inputValue } = this.props
        return (
            <div style={styles.wrapper}>
                <form action="#" onSubmit={this.handleAddTodo}>
                    <div>
                        <Input
                            value={inputValue}
                            onChange={onInputChange}
                        />
                    </div>
                    <div style={{ marginTop: 20, display: 'flex', justifyContent: 'flex-end' }}>
                        <p style={{ margin: 0, marginRight: 'auto', fontWeight: 500, color: 'red' }}>
                            {errorMsg ? errorMsg : ''}
                        </p>
                        <Button
                            children={'Add'}
                            onClick={this.handleAddTodo}
                            style={{ width: 150, fontSize: 16 }}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

AddTodo.propTypes = {
    title: PropTypes.string,
}

AddTodo.defaultProps = {
    title: 'Hello world!',
}

export default AddTodo
