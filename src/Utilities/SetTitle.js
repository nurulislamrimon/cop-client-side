import React from 'react';
import { Helmet } from 'react-helmet';

const SetTitle = ({ children }) => {
    return (
        <Helmet>
            <title>{children} :: Combination of Power</title>
        </Helmet>
    );
};

export default SetTitle;