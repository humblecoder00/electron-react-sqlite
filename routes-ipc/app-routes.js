/*
    EXPORT APP IPC ROUTES PER FEATURE HERE
*/

// const { deleteTodo } = require("../src/js/features/feature-todo/services/ipc-routes");

// example:

// {
//     name: 'feature-name'
// }

module.exports = {

    /*
        SETUP FEATURE IPC ENDPOINTS
    */

   features: [
       {
           name: 'feature-todo',
           routes: [
               {
                   name: 'add-todo',
                   handlerName: 'addTodo',
               },
               {
                   name: 'get-todo',
                   handlerName: 'getTodo',
               },
               {
                   name: 'update-todo',
                   handlerName: 'updateTodo'
               },
               {
                   name: 'delete-todo',
                   handlerName: 'deleteTodo',
               },
               {
                   name: 'get-todos',
                   handlerName: 'getTodos'
               },
               {
                   name: 'delete-todos',
                   handlerName: 'deleteTodos',
               }
           ],
       }
   ]
}


