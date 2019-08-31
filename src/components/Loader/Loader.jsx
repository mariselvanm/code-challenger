import React, { useState, useEffect } from 'react';
import './Loader.scss';

function Loader(props) {
    const [isLoaderShown, setLoaderState] = useState(false);

    useEffect(() => {
        setLoaderState(props.state);
    },[props.state]);

    return(
        <div className={`LoaderComponent  ${isLoaderShown ? 'shown':'hide'}`}>
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