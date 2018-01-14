import PropTypes from 'prop-types'
import React, { Component } from 'react'

import styles from './index.css'

export default class DataPreview extends Component {
  render () {
    if (this.props.error) {
      return (
        <div className={styles.data}>
          <div className={styles.data__container}>
            <p>Error</p>
          </div>
        </div>
      )
    }

    return (
      <div className={styles.data}>
        <div className={styles.data__container}>
          <p>Data here</p>
          <p>id: {this.props.data.id}</p>
          <p>login: {this.props.data.login}</p>
        </div>
      </div>
    )
  }
}

DataPreview.propTypes = {
  data: PropTypes.object.isRequired,
  error: PropTypes.bool.isRequired
}

DataPreview.defaultProps = {
  data: undefined,
  error: false
}
