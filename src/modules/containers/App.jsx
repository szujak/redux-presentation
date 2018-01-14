import 'normalize.css'
import { connect } from 'react-redux'
import React, { Component, Fragment } from 'react'

import './App.css'
import Form from '../components/Form'
import DataPreview from '../components/DataPreview'
import { getData } from '../store/actions/data-actions'

class App extends Component {
  constructor (props, context) {
    super(props, context)

    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onFormSubmit (username) {
    this.props.getData(username)
  }

  render () {
    return (
      <Fragment>
        <Form onSubmit={this.onFormSubmit} />
        <DataPreview data={this.props.appData.data} />
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  appData: state.appData
})

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(getData())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
