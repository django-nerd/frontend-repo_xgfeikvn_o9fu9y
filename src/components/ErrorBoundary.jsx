import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, info: null, showDetails: false }
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
      const params = new URLSearchParams(window.location.search)
      const debug = params.get('debug') === '1'
      // Ensure we surface something to console even if componentDidCatch didn't run for some reason
      if (debug) {
        console.log(`[ErrorBoundary Fallback Render${this.props.name ? ' - ' + this.props.name : ''}]`, this.state.error)
      }
      return (
        <div className="min-h-[200px] p-6 rounded-xl border border-red-200 bg-red-50 text-red-800">
          <h3 className="font-bold mb-2">Something went wrong{this.props.name ? ` in ${this.props.name}` : ''}.</h3>
          <p className="text-sm opacity-80">Check the browser console for details.</p>
          {(debug || this.state.showDetails) && (
            <div className="mt-3 text-xs whitespace-pre-wrap text-red-700/90">
              <div className="font-semibold mb-1">Error:</div>
              <div>{this.state.error?.message || String(this.state.error)}</div>
              {this.state.error?.stack && (
                <>
                  <div className="font-semibold mt-2 mb-1">Stack:</div>
                  <div className="opacity-90">{this.state.error.stack}</div>
                </>
              )}
            </div>
          )}
          {!debug && (
            <button
              type="button"
              className="mt-3 inline-flex items-center rounded-md bg-red-600 px-3 py-1.5 text-white text-xs font-medium hover:bg-red-700"
              onClick={() => this.setState({ showDetails: !this.state.showDetails })}
            >
              {this.state.showDetails ? 'Hide details' : 'Show details'}
            </button>
          )}
        </div>
      )
    }
    return this.props.children
  }
}
