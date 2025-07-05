//import './style.css';

// 2.4.2 Vytvořte také komponentu OrderItem s props name a image představující jednu položku objednávky.

export const OrderItem = ({name, image}) => {
    return (     

      <div className="order-item">
        <img       
          src={image}
          className="order-item__image"
        />
        <div className="order-item__name">
          {name}
        </div>
      </div>

    )
}




