import {StoreonModule} from 'storeon'
import {useStoreon} from 'storeon/react'
import {Vehicle} from '~/common'
import {Map} from 'immutable'

export interface LiveState {
  live: {
    vehicles: Map<string, Vehicle>
    filter: Map<string, boolean>
  }
}

export interface LiveEvents {
  'live_map/add': Vehicle
  'live_map/filter/add': string
  'live_map/filter/remove': string
}

const initialState: LiveState = {
  live: {
    vehicles: Map(),
    filter: Map(),
  },
}

export const liveMap: StoreonModule<LiveState, LiveEvents> = (store) => {
  store.on('@init', () => initialState)
  store.on('live_map/add', (state, vehicle) => {
    const tramNo = String(vehicle.desi)
    const hasTram = state.live.filter.has(tramNo)

    return {
      ...state,
      live: {
        vehicles: state.live.vehicles.set(vehicle.uid, vehicle),
        filter: hasTram ? state.live.filter : state.live.filter.set(tramNo, true),
      },
    }
  })
  store.on('live_map/filter/add', (state, filter) => {
    return {
      ...state,
      live: {
        vehicles: state.live.vehicles,
        filter: state.live.filter.set(filter, true),
      },
    }
  })
  store.on('live_map/filter/remove', (state, filter) => {
    return {
      ...state,
      live: {
        vehicles: state.live.vehicles,
        filter: state.live.filter.set(filter, false),
      },
    }
  })
}

export const useLiveMap = () => useStoreon<LiveState, LiveEvents>('live')
