import 'normalize.css'
import axios from 'axios'
import { connect } from 'react-redux'
import React, { Component, Fragment } from 'react'

import './App.css'
import Form from '../components/Form'
import DataPreview from '../components/DataPreview'
import {
  getData,
  getDataSuccess,
  getDataFailure
} from '../store/actions/data-actions'

class App extends Component {
  constructor (props, context) {
    super(props, context)

    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onFormSubmit (username) {
    this.props.getData(username)

    axios
      .get(`https://api.github.com/users/${username}`)
      .then(response => {
        this.props.getDataSuccess(response.data)
      })
      .catch(error => {
        this.props.getDataFailure(error)
      })
  }

  render () {
    return (
      <Fragment>
        <Form
          onSubmit={this.onFormSubmit}
        />
        <DataPreview
          data={this.props.appData.data}
          error={this.props.appData.error}
        />
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  appData: state.appData
})

const mapDispatchToProps = (dispatch) => ({
  getData: (username) => dispatch(getData(username)),
  getDataSuccess: (data) => dispatch(getDataSuccess(data)),
  getDataFailure: (error) => dispatch(getDataFailure(error))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
