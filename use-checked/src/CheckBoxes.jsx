import React from 'react'
import { CheckBox } from './CheckBox'
import { useChecked } from './hooks/useChecked';

export const CheckBoxes = () => {

  const checkedInitial = {
    'dia': false,
    'hora': false,
    'semana': true,
    'mes': false,
  }

  const [ checked, handleClickCheckBox ] = useChecked(checkedInitial);

  console.log(checked);

  return (
    <div>
        <CheckBox name={'dia'}    checked={checked.dia}    setChecked={handleClickCheckBox} />
        <CheckBox name={'hora'}   checked={checked.hora}   setChecked={handleClickCheckBox} />
        <CheckBox name={'semana'} checked={checked.semana} setChecked={handleClickCheckBox} />
        <CheckBox name={'mes'}    checked={checked.mes}    setChecked={handleClickCheckBox} />
    </div>
  )
}
