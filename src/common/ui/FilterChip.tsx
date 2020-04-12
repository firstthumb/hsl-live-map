import React, {useState} from 'react'
import {Chip, styled} from '@material-ui/core'

export interface FilterChipProps {
  onToggle: (label: string, checked: boolean) => void
  label: string
  checked?: boolean
}

const StyledChip = styled(Chip)({
  margin: 5,
})

export const FilterChip: React.FC<FilterChipProps> = ({onToggle, label, checked = false}) => {
  const [isChecked, setChecked] = useState(checked)

  const handleClick = () => {
    setChecked((isChecked) => !isChecked)
    onToggle(label, isChecked)
  }

  return (
    <StyledChip
      label={label}
      onClick={() => handleClick()}
      color={isChecked ? 'secondary' : 'primary'}
    />
  )
}
