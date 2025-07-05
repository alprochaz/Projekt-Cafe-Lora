//import './style.css';

import { OrderItem } from "../OrderItem"

// 2.4 Obsah objednávky - Vytvořte komponenty pro zobrazování obsahu objednávky.
// 2.4.1 Ve složce src/components vytvořte komponentu Order pro zobrazení obsahu objednávky. Tato komponenta bude mít jedinou prop items,
//  která bude očekávat pole objednaných nápojů. Toto pole bude obsahovat objekty s následující strukturou:
// { id: 7,
//   name: 'Romano', 
//   image: 'http://localhost:4000/assets/cups/romano.png',}
// 2.2.4 Pokud je objedávka prázdná, zobrazte příslušnou zprávu. (r.21 s podminkou)

export const Order = ({items}) => {       

  return (     
    <main className="order">
      <div className="container order__content">
        <h1>Vaše objedávnka</h1>

        {
          items.length === 0 ? (
            <p className="empty-order">Zatím nemáte nic objednáno</p>
          ) : (           
            <div className="order__items">              
              {
                items.map( (item) => 
                  <OrderItem 
                      key={item.name}
                      name={item.name} 
                      image={`http://localhost:4000${item.image}`} 
                  />
              )}           
            </div>
          )
        }

      </div>
    </main>
  )
}




