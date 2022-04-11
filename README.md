## micromodal-react

This is a toy repository that attempts to create an adapted version of [micromodal](https://micromodal.vercel.app/) for use in React applications. This is an exercise only and not actively supported or maintained, so don't include it in production applications please.

### Exercise

Sometimes when we're developing our React applications we'd like to make use of plugins, libraries, or tools from the community so we don't have to reinvent them. These libraries don't always anticipate being used in React applications, though, so sometimes we have to write some glue code to bridge the gap between programming models.

I've setup a [boilerplate](https://github.com/glidej/micromodal-react/tree/boilerplate) branch with some of the glue code written so we can focus on a particular part instead of spending time adding packages and templating. Create a fork from that branch and check it out so you can make some changes.

Some questions we'll need to answer through research and experimentation:
- How does the micromodal library "initialize" itself in a typical application? How does that differ from a React component we import, perhaps like the Material-UI equivalent?
  - [Micromodal Usage](https://micromodal.vercel.app/#usage)
  - [Material-UI Modal](https://mui.com/material-ui/react-modal/)
- How does the micromodal library trigger opening the modal? How does it differ from how we typically "open" things in React?
  - Do we pass a prop to micromodal? Do we call a function? Fire an event?
- What tools are available to us in React to bridge the gap between imperative-style libaries and declarative-style components?
  - [useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect)
  - [useRef](https://reactjs.org/docs/hooks-reference.html#useref)

### Assignment
Update the `boilerplate` branch so when the "Open the modal" button is clicked, the micromodal is opened. Use the tools available to you in React to abstract away the glue code necessary to make this work entirely in the `<Modal>` component; use props to communicate from the application down to your component and vice versa like any other components. Developers using our component shouldn't need to take unusual steps to make use of `<Modal>` other parts of our application. 

In this assignment you'll practice:
- Passing props to a component to configure it
- Lifting and maintaining state in a "controlling" component
- Using useEffect to react to prop changes and call external libraries to update the UI accordingly
- Using useRef to keep track of a raw DOM element
