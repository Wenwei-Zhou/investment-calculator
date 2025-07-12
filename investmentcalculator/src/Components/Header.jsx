import logo from '../Assets/investment-calculator-logo.png'
import '../index.css'

export default function Header() {
    return (
        <header id='header'>
            <img src={logo} alt="logo" />
            <h1>Investment Calculator</h1>
        </header>
    )
}