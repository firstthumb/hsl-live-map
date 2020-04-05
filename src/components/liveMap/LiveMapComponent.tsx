import React, {useEffect} from 'react'
import {useLiveMap} from './liveModule'
import {client} from '~/services'
import {TramMarker} from '~/common'
import GoogleMapReact from 'google-map-react'
import {MAPS_API_KEY} from '~/const'

const topicMatcher = new RegExp(
  '/([^/]*)/([^/]*)/([^/]*)/([^/]*)/([^/]*)/([^/]*)/([^/]*)/([^/]*)/([^/]*)/([^/]*)/([^/]*)/([^/]*)/([^/]*)/([^/]*)/([^/]*)/([^/]*)/'
)

export const LiveMapComponent: React.FC = () => {
  const {dispatch, live} = useLiveMap()

  useEffect(() => {
    client.on('message', (topic, message) => {
      const msg = JSON.parse(message.toString())
      const vp = msg.VP

      const matchedTopic = topicMatcher.exec(topic)

      if (matchedTopic) {
        const transportMode = matchedTopic[6]
        const headline = matchedTopic[11]
        const uid = vp.oper + '-' + vp.veh

        if (vp.lat && vp.long && vp.veh) {
          const vehicle = {
            uid: uid,
            headline: headline,
            desi: vp.desi,
            mode: transportMode,
            route: vp.route,
            heading: vp.hdg,
            lat: vp.lat,
            lon: vp.long,
            speed: vp.spd,
            direction: vp.dir,
            lastUpdate: Math.round(new Date().getTime() / 1000),
          }
          dispatch('live_map/add', vehicle)
        }
      }
    })
  }, [dispatch])

  return (
    <GoogleMapReact
      bootstrapURLKeys={{key: MAPS_API_KEY || ''}}
      defaultCenter={{lat: 60.161, lng: 24.909}}
      defaultZoom={12}
    >
      {live &&
        live.vehicles &&
        [...live.vehicles.values()].map((v) => (
          <TramMarker
            key={v.uid}
            sign={v.desi}
            headline={v.headline}
            lat={v.lat}
            lng={v.lon}
            color={v.direction == 1 ? 'primary' : 'secondary'}
          />
        ))}
    </GoogleMapReact>
  )
}
