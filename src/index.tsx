import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {StoreContext} from 'storeon/react'
import {store} from './store'
import {App} from './App'

render(
  <>
    <StoreContext.Provider value={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreContext.Provider>
  </>,
  document.getElementById('root')
)
