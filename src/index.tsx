import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {StoreContext} from 'storeon/react'
import {store} from './store'
import {App} from './App'
import {ThemeProvider, createMuiTheme} from '@material-ui/core'

const theme = createMuiTheme({})

render(
  <>
    <ThemeProvider theme={theme}>
      <StoreContext.Provider value={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StoreContext.Provider>
    </ThemeProvider>
  </>,
  document.getElementById('root')
)
