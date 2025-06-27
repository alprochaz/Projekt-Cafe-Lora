import { Drink } from '../Drink';
import './style.css';

// 2.1.4. Komponentu Menu upravte tak, aby přijímala prop s názvem drinks. Skrz ni komponentě předejte stažený seznam nápojů a zobrazte uvnitř
//  prvku drinks-list za využití komponenty Drink. -> 💡👀 pouziji map 

// 2.1.5 Díky datům z API můžeme komponentě Drink předat reálná data a zprovoznit tak obrázky a ingredience. Adresu obrázku z API předáte 
// přes prop image. Nezapomeňte, že z API vám přijde pouze relativní cesta souboru, např. /assets/cups/romano.png, které musí předcházet url
// adresa, kde běží váš backend server, např. http://localhost:4000. Pomocí interpolace řetězců složte správně URL adresu obrázku a použijte uvnitř src.

export const Menu = ({drinks}) => {
   
    console.log(drinks)

    return (
        <section className="menu" id="menu">
            <div className="container">
                <h2>Naše nabídka</h2>
                <p className="menu-intro">
                    Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
                </p>
                <div className="drinks-list">
                    {drinks.map(drink =>
                        <Drink
                            key={drink.id}
                            id={drink.id}
                            name={drink.name}
                            ordered={drink.ordered}
                            image={`http://localhost:4000${drink.image}`}
                            layers={drink.layers}
                        />
                    )}

                    {/* Puvodni kod */}
                    {/* <div className="drink">
                    <div className="drink__product">
                        <div className="drink__cup">
                        <img src="/cups/espresso.png" />
                        </div>
                        <div className="drink__info">
                        <h3>Espresso</h3>
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

                    <div className="drink">
                    <div className="drink__product">
                        <div className="drink__cup">
                        <img src="/cups/doppio.png" />
                        </div>
                        <div className="drink__info">
                        <h3>Doppio</h3>
                        <div className="layer">
                            <div className="layer__color" style={{ backgroundColor: '#613916' }} />
                            <div className="layer__label">espresso</div>
                        </div>
                        </div>
                    </div>
                    <form className="drink__controls">
                        <input type="hidden" className="order-id" value="1" />
                        <button className="order-btn">
                        Objednat
                        </button>
                    </form>
                    </div>

                    <div className="drink">
                    <div className="drink__product">
                        <div className="drink__cup">
                        <img src="/cups/lungo.png" />
                        </div>
                        <div className="drink__info">
                        <h3>Lungo</h3>
                        <div className="layer">
                            <div className="layer__color" style={{ backgroundColor: '#b0dee1' }} />
                            <div className="layer__label">voda</div>
                        </div>
                        <div className="layer">
                            <div className="layer__color" style={{ backgroundColor: '#613916' }} />
                            <div className="layer__label">espresso</div>
                        </div>
                        </div>
                    </div>
                    <form className="drink__controls">
                        <input type="hidden" className="order-id" value="2" />
                        <button className="order-btn">
                        Objednat
                        </button>
                    </form>
                    </div> */}
                </div>

                <div className="order-detail">
                    <a href="/order.html">Detail objednávky</a>
                </div>
            </div>
        </section>
    )
}