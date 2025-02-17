const baseStyles = {
    global: {
        '*': {
            boxSizing: 'border-box',
            padding: 0,
            margin: 0,
        },
        // ':root': {
        //     background: 'background',
        //     color: 'foreground,
        // },
        html: {
            scrollBehavior: 'smooth',
        },
        body: {
            minHeight: '100vh',
            fontFamily: 'Rubik, serif',
        },
    },
};

export default baseStyles;
