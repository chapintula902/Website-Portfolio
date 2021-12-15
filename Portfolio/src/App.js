import React from 'react'
import { Navbar, Brand, CTA} from './components'
import {Footer, Blog, Possibility, Features, WhoAmI, Header} from './containers';
import './App.css';
import './index.css';


const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhoAmI />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
           
        </div>
    )
}

export default App
