import { Component } from "react";

class StoreNav extends Component{
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onSearch = (e) => {
        this.props.onTerm(e.target.value)
        this.setState(({
            term: e.target.value
        }))
    }

    render () {
        return (
            <div className="section-store-nav">
                        <div className="section-store-search">
                            <span>Lookiing for</span>
                            <input 
                                type="text" 
                                value={this.state.term}
                                className="section-store-input" 
                                placeholder="start typing here..." 
                                onChange={this.onSearch}
                            />
                        </div>
                        <div className="section-store-filter">
                            <span>Or filter</span>
                            <div onClick={(e) => {
                                        if (!e.target.classList.contains('active')) {
                                            e.currentTarget.childNodes.forEach(item => item.classList.remove('active'))
                                            e.target.classList.add('active')
                                            this.props.onFilter(e.target.getAttribute('data-filter'))
                                        } else {
                                            e.currentTarget.childNodes.forEach(item => item.classList.remove('active'))
                                            this.props.onFilter('all')
                                        }                             
                                        
                                    }                                    
                                }>
                                <button className="section-store-btn" data-filter="Brasil">Brasil</button>
                                <button className="section-store-btn" data-filter="Kenya">Kenya</button>
                                <button className="section-store-btn" data-filter="Columbia">Columbia</button>
                            </div>
                        </div>
                    </div>
        )
    }
}

export default StoreNav;