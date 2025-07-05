import './style.css';
export const Header = ({showMenu}) => {
    return (
        <header>
            <div className="header__content container">
                <div className="site-logo"></div>
                
                { showMenu ? (
                    <div className="navigation">
                        <button className="nav-btn"></button>
                        <nav className="rollout-nav nav-closed">
                            <a href="#home">domů</a>
                            <a href="#menu">menu</a>
                            <a href="#gallery">galerie</a>
                            <a href="#contact">kontakt</a>
                        </nav>
                    </div>
                ) : (
                    <nav className="inline-nav">
                    <a href="/">Hlavní stránka</a>
                    </nav>
                )}


            </div>
        </header>
    )
}

//  2.3.2 Do komponenty Header tedy přidejte prop s názvem showMenu. Pokud bude showMenu mít hodnotu true, 
// komponenta Header zobrazí celé menu, jako doposud. Pokud bude false, zobrazí hlavičku pouze s odkazem na hlavní stránku, 
// jak je navrženo v zadání projektu v souboru order.jsx.
// Vyzkoušejte, že váš web funguje a že se lze přesouvat mezi oběma stránkami.
