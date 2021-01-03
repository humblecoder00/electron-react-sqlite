const getStyles = () => ({
    wrapper: {
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,.7)',
        zIndex: 14,
        overflow: 'hidden',
        width: '100vw',
    },
    innerWrapper: {
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        margin: 'auto',
        backgroundColor: 'transparent',
        zIndex: 15,
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
    },
})

export default getStyles
