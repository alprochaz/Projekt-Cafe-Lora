import './style.css';
export const Drink = ({name, image}) => {
    return (     
        <div className="drink">
            <div className="drink__product">
                <div className="drink__cup">
                {/* <img src="/cups/espresso.png" /> */}
                </div>
                <div className="drink__info">
                <h3>Espresso {name}</h3>
                <div className="layer">
                    <div className="layer__color" style={{ backgroundColor: '#613916' }}></div>
                    <div className="layer__label">espresso</div>
                </div>
                </div>
            </div>
            <form className="drink__controls">
                <input type="hidden" className="order-id" value="0" />
                <button className="order-btn">
                Objednat
                </button>
            </form>
        </div>
    )
}

{/* Priprava pro propsy 4)2
<Drink
  id={0}
  name="Romano"
  ordered={false}
  image="http://localhost:4000/assets/cups/romano.png"
  layers={[
    {
      color: '#fbdf5b',
      label: 'citrón',
    },
    {
      color: '#613916',
      label: 'espresso',
    },
  ]}
/> 
*/}