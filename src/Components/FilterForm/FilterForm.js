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
      />
      <Button variant="outlined" onClick={() => dispatch({ type: 'select', payload: sliderValue })}>
        Выбрать
      </Button>
    </div>
  );
}

export default FilterForm;
