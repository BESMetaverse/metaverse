import { render } from 'test-utils'
import { MainLayout } from './main-layout'
import { Provider } from 'react-redux'
import { createStore } from '@store'

const props = {
  children: <></>
}

const setup = (): void => {
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
