import React from 'react';
import HotelInfo from "../components/HotelInfo";
import CatSitting from "../components/CatSitting";

const Home = () => {
    return (
        <div className="home">
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">Text text text</div>
                <div className="col-md-1"></div>
            </div>

            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <HotelInfo/>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-4">
                    <CatSitting/>
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>
    )
        ;
};

export default Home;