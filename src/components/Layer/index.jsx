import './style.css';
export const Layer = ({color, label}) => {
    return (     
      <div className="layer">
          <div className="layer__color" style={{ backgroundColor: color }}></div>   
          <div className="layer__label">{label}</div>
      </div>
               
    )
}


// 👀👀💡 style={{ backgroundColor: color }} ❓ Proc jsou zdvojene zavorky? -> ty prvni otviraji okenko pro promenou, ty vnitrni tam 
// jsou protoze je to objekt, mohla bych tam mit i jine vlastnosti/ styly {backgroundColor: color, dalsi styl}

// ocekavane propsy
// <Layer color="#feeeca" label="mléčná pěna" /> 