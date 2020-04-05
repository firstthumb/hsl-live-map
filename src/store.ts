import {createStoreon} from 'storeon'
import {liveMap, LiveState, LiveEvents} from '~/components'
import {storeonDevtools} from 'storeon/devtools'

type StoreState = LiveState

type StoreEvents = LiveEvents

export const store = createStoreon<StoreState, StoreEvents>([
  liveMap,
  process.env.NODE_ENV !== 'production' && storeonDevtools,
])
