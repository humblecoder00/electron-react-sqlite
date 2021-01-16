### TodoListUI styleguide component

```js
<TodoListUI
    data={[
        {
            todo_id: 1,
            description: 'Wake up',
        },
        {
            todo_id: 2,
            description: 'Brush teeth',
        },
        {
            todo_id: 3,
            description: 'Drink water',
        },
        {
            todo_id: 6,
            description: 'Drink tea',
        },
    ]}
    onOpen={(todoId) => console.log('open todo details', todoId)}
/>
```
