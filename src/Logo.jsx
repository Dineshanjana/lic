

/* React Component Version */
import React from 'react';

const Logo = () => {
    const styles = {
        container: {
            width: '90%',
            height: '100px',
            border: '2px solid #000',
            margin: '20px auto',
            boxSizing: 'border-box'
        }
    };

    return <div style={styles.container}>
        <h1>Logo Section</h1>
    </div>;
};

export default Logo;