1. What do props help us accomplish?

Pass parameters into Rect components making them reusable.

2. How do you pass a prop into a component?

As a HTML attributes

3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?

It's turned into a real DOM element which doesn't accept it.


4. How do I receive props in a component?
function Navbar(props) {
    return (
        <header>
            {props.something}
        </header>
    )
}


5. What data type is `props` when the component receives it?

Javascript object