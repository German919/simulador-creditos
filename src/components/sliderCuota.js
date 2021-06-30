import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import {connect} from "react-redux"

const useStyles = makeStyles({
  root: {
    width: 400,
  },
});
const SliderCuota = ({newValue, handleChange}) => {

  const classes = useStyles();

  return (
    <div className="container">
      <div className="header-importes">
        <h3 className="sub-title">PLAZO</h3>
        <input value =  {newValue} />
      </div>
      <div className={classes.root} > 
        <Slider
          value={newValue}
          onChange={handleChange}
          valueLabelDisplay="auto"
          min={3}
          max={24}
        />
      </div>
      <div className="label-importes">
        <label>3</label>
        <label>24</label>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
    newValue : state.share
})
const mapDispatchToProps = dispatch =>({
    handleChange(event, newValue){
        dispatch({
            type: "CUOTA_ACTUALIZADA",
            newValue
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SliderCuota)