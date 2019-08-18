import React from 'react';
import './Loader.scss';

function Loader() {
    return(
        <div className="LoaderComponent">
            {/* Spinner Loader copied from https://loading.io/css/ */}
            <div className="lds-facebook">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Loader;