import React from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'
import Input from '../Input'

import getStyles from './UpdateTodo.style'
const styles = getStyles()

class UpdateTodo extends React.PureComponent {
    state = {
        value: '',
        // errorMsg: null,
    }

    // handleInput = (e) => {
    //     this.setState({ value: e.target.value, errorMsg: null })
    // }

    handleUpdateTodo = (e) => {
        e.preventDefault()
        e.stopPropagation()
        this.props.onUpdate(this.props.inputValue)
    }

    render () {
        const { errorMsg, onInputChange, inputValue } = this.props
        return (
            <div style={styles.wrapper}>
                <form action="#" onSubmit={this.handleUpdateTodo}>
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
                            children={'Update'}
                            onClick={this.handleUpdateTodo}
                            style={{ width: 150, fontSize: 16 }}
                        />
                        {/* <Button
                            children={'Cancel'}
                            onClick={this.onCancel}
                            style={{ width: 150, fontSize: 16 }}
                        /> */}
                    </div>
                </form>
            </div>
        )
    }
}

UpdateTodo.propTypes = {
    title: PropTypes.string,
}

UpdateTodo.defaultProps = {
    title: 'Hello world!',
}

export default UpdateTodo
