import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
const data = [
    {
        name: "wow",
        ingredients: "serio",
        soldOut: false
    },
    {
        name: "wowniesamowite",
        ingredients: "serio to prawda",
        soldOut: false
    },
    {
        name: "wow to chuba magia",
        ingredients: "serio nie wierze ",
        soldOut: false
    },
    {
        name: "wow mhm",
        ingredients: "serio nie dasz wiary a tu serio",
        soldOut: true
    },
]

function App () {
    return (
        <div className='container'>
            <Header/>
            <Menu/>
            <Footer/>
        </div>
    )
}

function Header () {
    return (
        <header className='header'>
            <h1>Fast React Pizza Co.</h1>
        </header>
    )
}

function Menu () {
    const pizzas = data;
    const dataLength = pizzas.length;
    return (
        <div className='menu'>
            <h2>Our Menu</h2>

            
            {dataLength > 0 ? (
                <>
                    <p>
                        the best italian pizza in town, maybe in the world! 
                        buy now and enjoy new better life with our special ingredients
                    </p>
                    <ul className='pizzas'>
                        {pizzas.map((pizza) => {
                            return(
                                <Pizza key={pizza.name} pizza={pizza}/>
                                )
                        })}
                    </ul>
                </>
            ) : <p>sorry we dont have menu yet</p>}

        </div>
    )
}

function Footer () {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 23;
    const isOpen = (hour >= openHour && hour <= closeHour) 


    return (
        <footer className='footer'>
            {isOpen ? (
                <Order closeHour={closeHour}/>
            ) : <p>we are closed</p>}
        </footer>
    )
}

function Order ({closeHour}) {
    return (
        <div className='order'>
                We are currently open until {closeHour}. Come and visit us or order online!
                <button className='btn'>Order</button>
        </div>
    )
}
function Pizza ({pizza}) {
    return (
        <div className={`pizza ${pizza.soldOut ? 'sold-out' : ''}`}>
            <img/>
            <div>
                <h3>
                    {pizza.name}
                </h3>
                <p>
                    {pizza.ingredients}
                </p>
                <span>
                    {pizza.soldOut ? "Sold out" : '10'}
                </span>
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
