import React from 'react'
import {Badge, Tooltip} from '@material-ui/core'
import styled from 'styled-components'
import TramIcon from '@material-ui/icons/Tram'

export interface TramMarkerProps {
  headline: string
  sign: number
  lat: number
  lng: number
  color: string
}

const BadgeMarker = styled(({...props}) => <Badge {...props} />)``

export const TramMarker: React.FC<TramMarkerProps> = ({headline, sign, lat, lng, color}) => (
  <BadgeMarker badgeContent={sign} color={color} lat={lat} lng={lng}>
    <Tooltip title={headline} arrow>
      <TramIcon fontSize="small">{headline}</TramIcon>
    </Tooltip>
  </BadgeMarker>
)
