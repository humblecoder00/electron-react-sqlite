import React from 'react'
import PropTypes from 'prop-types'

import './Input.style.css'

class Input extends React.PureComponent {
    constructor (props) {
        super(props)
        this.inputRef = React.createRef()
        this.timer = null
        this.state = {
            value: '',
        }
    }

    componentDidMount = () => {
        const { autofocustimer } = this.props
        if (autofocustimer) this.autoFocuser(autofocustimer)
    }

    componentWillUnmount = () => {
        clearTimeout(this.timer)
    }

    autoFocuser = (milliSeconds) => {
        this.timer = setTimeout(() => {
            try {
                this.inputRef.current.focus()
            } catch(err) {} // eslint-disable-line
        }, milliSeconds)
    }

    // onEnterHandler = (e) => {
    //     if (e.keyCode === 13) {
    //         this.props.onEnterPress(e)
    //     }
    // }

    render () {
        const { style, variant } = this.props
        return (
            <div style={{ display: 'flex' }}>
                <input
                    {...this.props}
                    ref={this.inputRef}
                    style={style}
                    className={`${variant}-input`}
                />
            </div>
        )
    }
}

Input.propTypes = {
    style: PropTypes.object,
    type: PropTypes.string,
    variant: PropTypes.string,
}

Input.defaultProps = {
    style: {},
    type: 'text',
    variant: 'white',
}

export default Input
