import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Menu } from '../components/Menu';
import { Gallery } from '../components/Gallery';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';


const response = await fetch('http://localhost:4000/api/drinks');
const json = await response.json();
const drinksData = json.data;
console.log(drinksData);
console.log(drinksData[0]);



document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />

    <main>
      <Banner />
      <Menu drinks={drinksData}/>
      <Gallery />
      <Contact />      
    </main>
    
    <Footer />

  </div>
);


// 3) Zprovozneni navigace - bod 2
const hamburgerButton = document.querySelector(".nav-btn")
const rolloutNav = document.querySelector(".rollout-nav")

hamburgerButton.addEventListener("click", () => {
  rolloutNav.classList.toggle("nav-closed")
})


// bod 3. Navigaci budeme chtít schovat i po kliknutí na odkaz uvnitř navigace. Připojte tedy další posluchač události přímo na 
// prvek .rollout-nav. V posluchači události zařiďte, aby se navigace při kliknutí na libovolnou její položku schovala 
// (tj. prvku .rollout-nav přidáte třídu nav-closed, obdobně, jako v předchozím kroku při přepínání). 👀💡 event Propagation

rolloutNav.addEventListener("click", () => {
  rolloutNav.classList.add("nav-closed")
})