import PropTypes from 'prop-types'
import React, { Component } from 'react'

import styles from './index.css'

export default class App extends Component {
  constructor (props, context) {
    super(props, context)

    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit (e) {
    e.preventDefault()

    const formData = new FormData(e.target)
    const username = formData.get('username')

    if (username.length) {
      this.props.onSubmit(username)
    }
  }

  render () {
    return (
      <form
        onSubmit={this.onSubmit}
        className={styles.form}
      >
        <input
          type="text"
          name="username"
          className={styles.form__input}
          placeholder="Github username"
        />
        <button
          type="submit"
          className={styles.form__button}
        >
          Featch data from github
        </button>
      </form>
    )
  }
}

App.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

App.defaultProps = {
  onSubmit: (data) => console.log(data)
}
