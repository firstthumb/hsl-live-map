import React from 'react'
import {LiveMapComponent, LiveMapFilterComponent} from '~/components'

export const Live = () => (
  <div style={{height: '100vh', width: '100%'}}>
    <LiveMapFilterComponent />
    <LiveMapComponent />
  </div>
)
