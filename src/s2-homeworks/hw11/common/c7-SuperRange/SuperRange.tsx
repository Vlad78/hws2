import React from 'react';

import { SliderProps, styled } from '@mui/material';
import Slider, { SliderThumb, SliderValueLabelProps } from '@mui/material/Slider';


const CustomSlider = styled(Slider)(({ theme }) => ({
  color: "#00CC22",
  "& .MuiSlider-thumb": {
    height: 18,
    width: 18,
    backgroundColor: "#fff",
    border: "1px solid #00CC22",
    "& .slider-circle": {
      height: 6,
      width: 6,
      backgroundColor: "#00CC22",
      borderRadius: "50%",
    },
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&::before": {
      display: "none",
    },
  },
  "& .MuiSlider-track": {
    border: "none",
    height: 4,
  },
  "& .MuiSlider-rail": {
    backgroundColor: "#8B8B8B",
  },
}));

interface CustomThumbComponent extends React.HTMLAttributes<unknown> {}
const CustomThumbComponent = (props: CustomThumbComponent) => {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="slider-circle" />
    </SliderThumb>
  );
};

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <CustomSlider
      slots={{ thumb: CustomThumbComponent }}
      sx={{
        // стили для слайдера // пишет студент
        width: "147px",
      }}
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  );
};

export default SuperRange;

//& {onChange: ()=>void}
