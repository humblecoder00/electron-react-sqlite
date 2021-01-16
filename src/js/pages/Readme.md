## PAGES:

- Place your Container and UI components here per feature.
- Each page folder contains 2 type of components: Container and UI components.

### Container:

- Container is a top level wrapper of one specific functionality.
- It is responsible for connecting to Redux, fetching data and sending it down to UI components.

### UI components:

- UI components are only responsible to display data and do operations on their scope, in other words - dummy components.
- They are dependent on a Container or another UI component to be able to recieve data, they have nothing to do with connecting to Redux.
