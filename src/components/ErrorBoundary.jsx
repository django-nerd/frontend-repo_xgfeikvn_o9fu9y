import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, info: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    // Log to console for debugging
    console.error(`[ErrorBoundary${this.props.name ? ' - ' + this.props.name : ''}]`, error, info)
    this.setState({ info })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[200px] p-6 rounded-xl border border-red-200 bg-red-50 text-red-800">
          <h3 className="font-bold mb-2">Something went wrong{this.props.name ? ` in ${this.props.name}` : ''}.</h3>
          <p className="text-sm opacity-80">Check the browser console for details.</p>
        </div>
      )
    }
    return this.props.children
  }
}
