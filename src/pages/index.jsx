import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Menu } from '../components/Menu';
import { Gallery } from '../components/Gallery';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { act } from 'react';


const response = await fetch('http://localhost:4000/api/drinks');
const json = await response.json();
const drinks = json.data;
console.log(drinks);
console.log(drinks[0]);



document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header showMenu={true} />

    <main>
      <Banner />
      <Menu drinks={drinks  }/>
      <Gallery />
      <Contact />      
    </main>
    
    <Footer />

  </div>
);


// 1.3.2 Zprovozneni navigace
const hamburgerButton = document.querySelector(".nav-btn")
const rolloutNav = document.querySelector(".rollout-nav")

hamburgerButton.addEventListener("click", () => {
  rolloutNav.classList.toggle("nav-closed")
})


// 1.3.3 Navigaci budeme chtít schovat i po kliknutí na odkaz uvnitř navigace. Připojte tedy další posluchač události přímo na 
// prvek .rollout-nav. V posluchači události zařiďte, aby se navigace při kliknutí na libovolnou její položku schovala 
// (tj. prvku .rollout-nav přidáte třídu nav-closed, obdobně, jako v předchozím kroku při přepínání). 👀💡 event Propagation

rolloutNav.addEventListener("click", () => {
  rolloutNav.classList.add("nav-closed")
})


// 2.2.4 V hlavním souboru index.jsx pověste pomocí querySelectorAll posluchač události na každý objednávací formulář v nápojích. 
// Zatím při kliknutí na tlačítko vypište do konzole id nápoje, abyste si ověřili, že váš posluchač události pracuje se správným prvkem pole. 
// K id se dostanete pomocí vlastnosti dataset.id.

// 2.2.5 Samotné objednání nápoje provedete pomocí PATCH požadavku na API endpoint /api/drinks/:id. :id zde představuje dynamickou část URL,
//  kam vložíte id formuláře. Požadavek bude mít v těle JSON pole s objektem, tělo požadavku tedy bude vypadat takto:
//  [{ op: 'replace', path: '/ordered', value: true }]; ❓❓❓
// Proveďte tento požadavek pomocí fetch a zkontrolujte, že se vám v konzoli vypíše odpověď od API.
// 2.2.6 Když ověříte, že se správně volá API, doplňte na konec funkce pro objednání kód, který obnoví stránku (window.location.reload()).

const handleOrder = async (event) => {
  event.preventDefault();
  const btnId = Number(event.target.dataset.id); 
  console.log(btnId);
  console.log(event.target.dataset)

  //Bonus
    const actualOrder = drinks.find((drink) => drink.id === btnId);
    console.log(actualOrder.ordered);
    const changeOrderStatusTo = actualOrder.ordered ? false : true
  //

  const response = await fetch(`http://localhost:4000/api/drinks/${btnId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    // body: JSON.stringify( [{ op: 'replace', path: '/ordered', value: true }] ),    // ❓❓💡❓ Tomu moc nerozumim?
    body: JSON.stringify( [{ op: 'replace', path: '/ordered', value: changeOrderStatusTo }] ),       // pridan Bonus
 
  })

  if (!response.ok) {
    alert("Neco se pokazilo.");
  } else {
    console.log(`Zmena objednavky kafe s id ${btnId} se zdarila`)
    window.location.reload();
  }
}

const drinkControls = document.querySelectorAll(".drink__controls")
drinkControls.forEach( (btn) => {
  btn.addEventListener('submit', handleOrder)
});



// Bonus: Pokud vám toto cvičení přišlo jako pohodička, zkuste si zprovoznit zrušení objednávky. Stačí upravit vlastnost value v body 
// požadavku, aby místo true posílala opak předchozího stavu nápoje. Potřebujete k tomu stav ordered – ten už máte v komponentě Drink v 
// props. Uložte si jej do formuláře do atributu data-ordered, podobně jako už tam máte atribut data-id. V ovladači události pak 
// hodnotu přečtete z dataset.ordered. Pozor na to, že vše uložené do data-* atributů se převádí na string.
