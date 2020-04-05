import {StoreonModule} from 'storeon'
import {useStoreon} from 'storeon/react'
import {Vehicle} from '~/common'
import {Map} from 'immutable'

export interface LiveState {
  live: {
    vehicles: Map<string, Vehicle>
  }
}

export interface LiveEvents {
  'live_map/add': Vehicle
}

const initialState: LiveState = {
  live: {
    vehicles: Map(),
  },
}

export const liveMap: StoreonModule<LiveState, LiveEvents> = (store) => {
  store.on('@init', () => initialState)
  store.on('live_map/add', (state, vehicle) => {
    return {
      ...state,
      live: {
        vehicles: state.live.vehicles.set(vehicle.uid, vehicle),
      },
    }
  })
}

export const useLiveMap = () => useStoreon<LiveState, LiveEvents>('live')
