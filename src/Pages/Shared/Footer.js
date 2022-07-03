import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer>
            <p className='text-center'>&copy; All right reserved <span title='Combination of Power' className='text-primary font-semibold'>CoP</span> {year}</p>
        </footer>
    );
};

export default Footer;