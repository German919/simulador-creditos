import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import {connect} from "react-redux"

const useStyles = makeStyles({
  root: {
    width: 400,
  },
});

const SliderAmount = ({newValue, handleChange}) => {

  const classes = useStyles();

  const valor = "$"

  return (
    <div className="container">
      <div className="header-importes">
        <h3 className="sub-title">MONTO TOTAL</h3>
        <input value =  {valor + newValue} />
      </div>
      <div className={classes.root} > 
        <Slider
          value={newValue}
          onChange={handleChange}
          valueLabelDisplay="auto"
          min={5000}
          max={50000}
        />
      </div>
      <div className="label-importes">
        <label>$5.000</label>
        <label>$50.000</label>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
    newValue : state.totalAmount
})
const mapDispatchToProps = dispatch =>({
    handleChange(event, newValue){
        dispatch({
            type: "MONTO_ACTUALIZADO",
            newValue
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SliderAmount)