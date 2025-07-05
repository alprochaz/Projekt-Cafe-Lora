import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import './order.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Order } from '../components/Order';

// Stránka pro detail objednávky
// Oživte stránku pro zobrazení detailu objednávky.
// Oživíme kostru stránky pro detail objednávky pomocí už existujících komponent. K. pro jednotlivé položky objednávky vytvoříme v dalším cvičení.
// Ve složce src/pages najdete soubor order.html i s JavaScriptem order.jsx a styly order.css.

// Na stránce použijte komponenty Header a Footer. Komponentu Header bude potřeba upravit, protože na stránce s objednávkou se hlavička 
// zobrazuje bez hlavního menu. Do komponenty Header tedy přidejte prop s názvem showMenu. Pokud bude showMenu mít hodnotu true, 
// komponenta Header zobrazí celé menu, jako doposud. Pokud bude false, zobrazí hlavičku pouze s odkazem na hlavní stránku, 
// jak je navrženo v zadání projektu v souboru order.jsx.
// Vyzkoušejte, že váš web funguje a že se lze přesouvat mezi oběma stránkami.
// Proveďte commit a push vašich změn.


// 2.4.3 Na stránce s detailem objednávky získáte jednotlivé položky z objednávky tak, že pošlete GET požadavek na API 
//      endpoint: /api/drinks?filter=ordered:eq:true&select=id,name,image  💡💡👀👀
// Tato URL adresa obsahuje speciální parametry, které ze seznamu nápojů vyfiltrují pouze ty, které jsou objednané a vrátí pouze jejich
//  id, name a image. Pozor, že pokud nemáte zatím žádný nápoj objednaný, API endpoint vrátí prázdné pole.

const response = await fetch('http://localhost:4000/api/drinks?filter=ordered:eq:true&select=id,name,image');
const json = await response.json();
const orderData = json.data;
console.log(orderData);


document.querySelector('#root').innerHTML = render(
  <div className="page">
    <div className="page">
      <Header showMenu={false} />

      {/* <header>
        <div className="container header__content">
          <div className="site-logo"></div>

          <nav className="inline-nav">
            <a href="/">Hlavní stránka</a>
          </nav>

        </div>
      </header> */}

      <Order  items={orderData}/>
      {/* <main className="order">
        <div className="container order__content">
          <h1>Vaše objedávnka</h1>
          <p className="empty-order">Zatím nemáte nic objednáno</p>
          <div className="order__items">
            <div className="order-item">
              <img
                src="/cups/espresso.png"
                className="order-item__image"
              />
              <div className="order-item__name">
                Espresso
              </div>
            </div>

            <div className="order-item">
              <img
                src="/cups/doppio.png"
                className="order-item__image"
              />
              <div className="order-item__name">
                Doppio
              </div>
            </div>
          </div>
        </div>
      </main> */}
      
      <Footer />
      {/* <footer>
        <div className="container">
          <div className="footer__content">
            Café Lóra je tréningový projekt v rámci Czechitas kurzu JavaScript 2
          </div>
        </div>
      </footer> */}
    </div>
  </div>
);
