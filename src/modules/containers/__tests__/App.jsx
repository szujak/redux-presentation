import React from 'react'
import renderer from 'react-test-renderer'
import App from '../App'

it('Renders correctly', () => {
  expect(
    renderer
      .create(<App />)
      .toJSON()
  )
    .toMatchSnapshot()
})
