const getStyles = () => ({
    todoItem: {
        margin: '0 0 5px 0',
        fontSize: 18,
        borderBottom: '1px solid lightgrey',
        paddingBottom: 10,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        userSelect: 'none',
    },
    todoText: {
        margin: 0,
        cursor: 'pointer',
    },
    editBtn: {
        width: 15,
        height: 15,
        textAlign: 'center',
        fontWeight: 700,
        // color: 'orangered',
        userSelect: 'none',
        cursor: 'pointer',
        marginRight: 10,
    },
    deleteBtn: {
        width: 25,
        height: 25,
        textAlign: 'center',
        fontWeight: 700,
        color: 'orangered',
        userSelect: 'none',
        cursor: 'pointer',
    },
})

export default getStyles
