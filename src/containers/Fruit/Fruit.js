import React, { useContext } from 'react';
import List from '../../components/List/List';
import { themeContext } from '../../context/ThemeContext';


function Medicines(props) {
    const Data = [
        {
            id: 101,
            name: 'Strawberry',
            quantity: '1Kg',
            price: '85$',
        },
        {
            id: 102,
            name: 'Berry',
            quantity: '1Kg',
            price: '70$',
        },
        {
            id: 103,
            name: 'Lemon',
            quantity: '1Kg',
            price: '35$',
        },
        {
            id: 104,
            name: 'Avocado',
            quantity: '1Kg',
            price: '50$',
        },

    ]

    const get = (id) => {
        console.log(id)
    }
    const value = useContext(themeContext);
    return (
        <div className={`${value.theme}`}>
            <div>
                {/* search area */}
                <div className="search-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <span className="close-btn"><i className="fas fa-window-close" /></span>
                                <div className="search-bar">
                                    <div className="search-bar-tablecell">
                                        <h3>Search For:</h3>
                                        <input type="text" placeholder="Keywords" />
                                        <button type="submit">Search <i className="fas fa-search" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end search arewa */}
                {/* breadcrumb-section */}
                <div className="breadcrumb-section breadcrumb-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 text-center">
                                <div className="breadcrumb-text">
                                    <p>Fresh and Organic </p>
                                    <h1>list</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <List data={Data} getid={get} />

            </div>
        </div>
    );
}

export default Medicines;