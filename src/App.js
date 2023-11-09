import logo from './img/Vector.svg'
import logoFooter from './img/footer.svg'
import logoFooter2 from './img/footer2.svg'
import {Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home/Home'
import Coffee from './pages/Coffee/Coffee'
import Pleasure from './pages/Pleasure/Pleasure'
import CoffeeCardShow from './common-components/coffee-card'


import './App.css';
import { Component } from 'react'


class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
        data: [{name: 'Solimo Coffee Beans 2 kg', location: 'Brasil', price: '10.73', sells: 300, id: 1},
        {name: 'Presto Coffee Beans 1 kg', location: 'Columbia', price: '15.99', sells: 200, id: 2},
        {name: 'Presto Coffee Beans 1 kg', location: 'Kenya', price: '15.99', sells: 100, id: 3},
        {name: 'AROMISTICO Coffee 1 kg', location: 'Brasil', price: '6.99', sells: 400, id: 4},
        {name: 'Solimo Coffee Beans 2 kg', location: 'Brasil', price: '10.73', sells: 100, id: 5},
        {name: 'Presto Coffee Beans 1 kg', location: 'Columbia', price: '15.99', sells: 120, id: 6},
        {name: 'Presto Coffee Beans 1 kg', location: 'Kenya', price: '15.99', sells: 100, id: 7},
        {name: 'AROMISTICO Coffee 1 kg', location: 'Brasil', price: '6.99', sells: 50, id: 8}
      ],
      term: '',
      filter: 'all',
      obj: {}
    }
  }

  onTerm = (term) => {
    this.setState(({term}))
  }

  onSearchInput = (term, items) => {
    if(items.every(item => item.name.toLowerCase().indexOf(term.toLowerCase()) === -1)) {
      return []
    } 

    return items.filter(item => item.name.toLowerCase().indexOf(term.toLowerCase()) !== -1);
  }

  onFilter = (filter) => {
      this.setState(({filter}))
  }

  onFilterChange = (filter, items) => {
    if(filter === 'all') {
      return items;
    }
    if(filter === 'Columbia') {
      return items.filter(item => item.location === filter);
    }
    if(filter === 'Kenya') {
      return items.filter(item => item.location === filter);
    }
    if(filter === 'Brasil') {
      return items.filter(item => item.location === filter);
    }
  }

  cardInfo = (obj) => {
    console.log(obj);
    this.setState(({obj}))
  }

  render () {

    const visibleData = this.onSearchInput(this.state.term, this.onFilterChange(this.state.filter, this.state.data));

    return (
      <>
          <header className="header">
              <div className="header-container">
  
                  <nav className="header-nav">
                      <Link to="/" className="nav-link">
                          <img src={logo} alt="" />
                          Coffee house
                      </Link>
                      <Link to="/coffee" className="nav-link">Our coffee</Link>
                      <Link to="/pleasure" className="nav-link">For your pleasure</Link>
                  </nav>
              </div>
          </header>
          <Routes>
            <Route path="/" element={<Home data={this.state.data} onLink={this.cardInfo}/>}/>
            <Route path="/coffee" element={<Coffee data={visibleData} onTerm={this.onTerm} onFilter={this.onFilter} onLink={this.cardInfo}/>}/>
            <Route path="/pleasure" element={<Pleasure data={visibleData} onLink={this.cardInfo}/>}/>
            <Route path="/card" element={<CoffeeCardShow data={this.state.obj} />}/>
          </Routes>
          <footer className="footer"> 
              <nav className="footer-nav">
                  <Link to="/" className="nav-link">
                      <img src={logoFooter} alt="" />
                      Coffee house
                  </Link>
                  <Link to="/coffee" className="nav-link">Our coffee</Link>
                  <Link to="/pleasure" className="nav-link">For your pleasure</Link>
              </nav>
              <div className="footer-decoration">
                  <img src={logoFooter2} alt="" />
                </div>
          </footer>
      </>
    );
  }
}

export default App;

