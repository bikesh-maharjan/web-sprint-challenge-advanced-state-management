1. What problem does the context API help solve?
   it enables you to access props anywhere in the application
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
   A. reducers take a state, and an action to perform on that state and return
   a new state object. Actions are the actions take in by the reducer to change the state. Store i s the place in a application where the app level state is held. Any pieces of state that the entire application needs to know about is stored in it.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is where all the slices of state that the entire app needs to be aware of are held, component state is slice of state that only matters to one particular componet. You should use app state rather than component state that way the state can be connectd to any comp. that need to know the name of the app.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-Thunk is a middleware that lets you call actions creatores that return a function instead of an object. It allows us to give access to dispatch.
It also allows redux to be asynchronous.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

COntext api. It requires less work.
