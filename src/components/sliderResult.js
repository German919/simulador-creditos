import React from "react";
import {connect} from "react-redux";

const SliderResult = ({newValue, newShare}) => {

    let result = (((newValue * 0.9798) + newValue) / newShare).toFixed(2);

    const accept = () => {
        console.log("Felicitaciones!! tienes tu crédito!!")
        alert("Felicitaciones!! Tienes tu crédito!!")
    }

    const showInfo = () => {
        console.log(`Información de las cuotas: Debes abonar ${newShare} cuotas de $${result}`)
        alert(`Información de las cuotas: Debes abonar ${newShare} cuotas de $${result}`)
    }

    return(
        <div>
            <div className="container-total-results">
                <label className="total-results-details">Cuota fija por mes</label>
                <label className="total-results-import"> ${result} </label>
            </div>
            <div className="container-total-buttons">
                <button onClick={accept} className="btn btn-success mr-2 button-credito">OBTENE CREDITO</button>
                <button onClick={showInfo} className="btn btn-primary button-details">VER DETALLE DE CUOTAS</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    newValue : state.totalAmount,
    newShare : state.share
})

export default connect(mapStateToProps, {}) (SliderResult);