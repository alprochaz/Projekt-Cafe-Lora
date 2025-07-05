import { Layer } from '../Layer';
import './style.css';

// 2.2.1 Nejdříve si všimněte, že data pro jeden nápoj obsahují vlastnost ordered, která udává, zda je nápoj zrovna objednaný či nikoliv. 
// Toto je zároveň prop v komponentě Drink. Upravte ji tak, aby podle toho zobrazila na tlačíku text Objednat nebo Zrušit. (r.36) 💡💡👀
// 2.2.2 Na objednávací tlačítko také přidejte třídu .order-btn--ordered v případě, že nápoj je objednaný. (r.35)
// 2.2.3 Prop id předejte atributu data-id, který vložte na <form>. (r.32)

export const Drink = ({id, name, image, ordered, layers}) => {
    return (     
        <div className="drink">
            <div className="drink__product">
                <div className="drink__cup">
                    <img src= {image} />
                </div>
                <div className="drink__info">
                    <h3> {name}</h3>

                    {layers.map((layer) => (
                        < Layer 
                            key={layer.label}
                            color = {layer.color}
                            label = {layer.label}
                        />
                      ))
                    }

                    {/* < Layer color="#feeeca" label="mléčná pěna" /> */}
     
                </div>
            </div>
            <form className="drink__controls" data-id={id}>
                <input type="hidden" className="order-id" value="0" />                  

                <button className={`order-btn ${ordered ? "order-btn--ordered" : " "} `}  >
                    {ordered ? 'Zrušit' : 'Objednat'}                     
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

