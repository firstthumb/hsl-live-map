import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import {useLiveMap} from './liveModule'
import {FilterChip} from '~/common/ui/FilterChip'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing(0.5),
  },
}))

export const LiveMapFilterComponent: React.FC = () => {
  const {dispatch, live} = useLiveMap()
  const classes = useStyles()

  const onToggle = (value: string, checked: boolean) => {
    if (checked) {
      dispatch('live_map/filter/remove', value)
    } else {
      dispatch('live_map/filter/add', value)
    }
  }

  return (
    <Paper className={classes.root}>
      {[...live.filter.entries()].map((item) => {
        return (
          <FilterChip
            key={item[0]}
            checked={item[1]}
            label={item[0]}
            onToggle={() => onToggle(item[0], item[1])}
          />
        )
      })}
    </Paper>
  )
}
