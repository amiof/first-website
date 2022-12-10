import React, { Component } from 'react';
import Banner from "./Banner";
import Cards from "./Cards";
import Search from "./Search"
import Company from "./Company";
class homepage extends Component {
    render() {
        return (
            <div>
                <Banner />
                <Cards />
                <Search />
                <Company /> 
            </div>
        );
    }
}

export default homepage;