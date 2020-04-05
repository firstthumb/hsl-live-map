import React from 'react'
import {Home} from '~/pages/home'
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps'
import {LiveMapComponent} from '~/components'

const PopularA = withScriptjs(
  withGoogleMap((props: any) => (
    <GoogleMap defaultZoom={8} defaultCenter={{lat: -34.397, lng: 150.644}}>
      {props.isMarkerShown && <Marker position={{lat: -34.397, lng: 150.644}} />}
    </GoogleMap>
  ))
)

export const Popular = () => (
  <PopularA
    isMarkerShown
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDU3gJYG_cnJ3XKkT2j1QsCP4GU1NFn8fY&v=3.exp&libraries=geometry,drawing,places"
    loadingElement={<div style={{height: `100%`}} />}
    containerElement={<div style={{height: `500px`}} />}
    mapElement={<div style={{height: `100%`}} />}
  />
)

export const Live = () => (
  <div style={{height: '100vh', width: '100%'}}>
    <LiveMapComponent />
  </div>
)
