1. Where does React put all of the elements I create in JSX when I 
   call `root.render()`?

In the DOM element that we call `root.render()` on which is selected by calling `createRoot(document.getElementById("root"))`


2. What would show up in my console if I were to run this line of code:
```
console.log(<h1>Hello world!</h1>)
```
An object that represents the JSX code.

3. What's wrong with this code:
```
root.render(
    <h1>Hi there</h1>
    <p>This is my website!</p>
)
```
It has two sibling elements. `render` only takes one element as an argument.

4. What does it mean for something to be "declarative" instead of "imperative"?

Declarative code describes what we want to do, while imperative code describes how to do it.

5. What does it mean for something to be "composable"?

Components are composable. We can build complex interfaces by composing together simple components.