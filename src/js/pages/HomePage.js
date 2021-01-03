import React, { useState, useEffect } from 'react'

import Button from '../components/Button'

const HomePage = () => {
    const [ list, setList ] = useState([{ description: 'default' }])
    const [ isLoading, setLoading ] = useState(true)
    const [ error, setError ] = useState(false)

    useEffect(() => {
        async function fetchLinks() {
            try {
                const data = await api_todos.getTodos()
                setList(data)
                setLoading(false)
            } catch (err) {
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        fetchLinks()
        // eslint-disable-next-line
    }, [])

    const handleAdd = async () => {
        await api_todos.addTodo('Eat dinner')
    }

    return (
        <div>
            <p>Hello homePage</p>
            <Button children={'Add'} onClick={handleAdd} />
            {error ? <p>error</p> : null}
            {isLoading ? <p>loading</p> : null}
            {(list.map((item, index) => <p key={index}>{item.description}</p>))}
        </div>
    )
}

export default HomePage
