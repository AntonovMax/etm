import { Slider, Button } from '@mui/material'
import { useState } from 'react';
import style from './FilterForm.module.css'

function FilterForm({ dispatch }) {

  const [sliderValue, setSliderValue] = useState(5000)

  return (
    <div className={style.wrapper}>
      Цена до: {sliderValue}
      <Slider
        aria-label="Temperature"
        defaultValue={5000}
        getAriaValueText={(value) => setSliderValue(value)}
        valueLabelDisplay="auto"
        step={100}
        marks={true}
        min={0}
        max={10000}
        sx={{ fontWeight: 900, color: '#0097a7' }}
      />
      <Button
        variant="outlined"
        onClick={() => dispatch({ type: 'select', payload: sliderValue })}
        sx={{ fontWeight: 400, color: '#0097a7' }}
      >
        Выбрать
      </Button>
    </div>
  );
}

export default FilterForm;
