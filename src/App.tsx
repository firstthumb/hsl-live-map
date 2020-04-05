import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {Live} from './pages'

export const App: React.FC = () => (
  <>
    <Switch>
      <Route path="/" component={Live} />
    </Switch>
  </>
)
