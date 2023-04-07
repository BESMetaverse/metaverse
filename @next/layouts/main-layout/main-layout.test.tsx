import React from 'react'
import { screen, render, fireEvent } from 'test-utils'
import { MainLayout } from './main-layout'
import { Provider } from 'react-redux'
import { createStore } from '@store'

const props = {
  children: <></>
}

const setup = () => {
  render(
    <Provider store={{ ...createStore }}>
      <MainLayout {...props} />
    </Provider>
  )
}

describe('<MainLayout />', () => {
  it('Should Render MainLayout', () => {
    setup()
  })
})
