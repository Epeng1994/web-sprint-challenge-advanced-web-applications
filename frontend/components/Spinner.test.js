// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import Spinner from './Spinner.js'
import {render, rerender, screen} from '@testing-library/react'
import React from 'react'


test('Spinner Component Renders', () => {
  render(<Spinner/>)
})
