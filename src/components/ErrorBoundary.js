import React from 'react'
import { Component } from 'react/cjs/react.production.min'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch ( erroe, info ) {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return <h1>Oooooppss. That is not good</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary