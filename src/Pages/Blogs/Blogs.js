import React from "react";

const Blogs = () => {
  return (
    <div className="">
      <div class="card w-1/2 bg-blue-400 shadow-xl ml-52 mt-6">
        <div class="card-body">
          <h2 class="card-title ">
            How will you improve the performance of a React Application ?
          </h2>
          <p>
            Optimizing application performance is key for developers who are
            mindful of keeping a user's experience positive to keep them on an
            app and engaged. <br />
            <h1 className="text-3xl"> 1. useMemo() </h1>
            <br /> This is a React hook that is used to cache functions in
            React, CPU-expensive functions.
            <br />
            <h3 className="text-3xl">2. Virtualize long lists</h3>
            <br />
            If you render large lists of data, it is recommended that you render
            only a small portion of the datasets at a time within the visible
            viewport of a browser, then the next data are rendered as the lists
            is scrolled, this is called “windowing”.
            <br />
            <h3 className="text-3xl">3. React.PureComponent</h3>
            <br />
            Just like what shouldComponentUpdate does to class components, so
            also React.PureComponent.
          </p>
        </div>
      </div>
      <div class="card w-1/2 bg-blue-400 shadow-xl ml-52 mt-6">
        <div class="card-body">
          <h2 class="card-title ">
            What are the different ways to manage a state in a React
            application?
          </h2>
          <p>
            The built-in way that React provides for setting component states is
            by using setState() and adding “local state” to a class. There are
            several other ways to manage state​s in React, including the use of:
            Hooks React Context API Apollo Link State We will, however, focus on
            the use of the setState() method. Using setState() The built-in
            setState() method updates a variable’s value in the classes’ local
            store. This local store allows the updated variable values to be
            accessed by any function that may require these values. setState()
            tells React that this component and its children (sometimes delayed
            and grouped into a single batch) should be re-rendered with the most
            updated state; this re-render is often based on user-triggered
            events. Sample React App using setState() Have a look at the updated
            React app given below: Line 5-7: Maintains a local state with useful
            variables. Line 11-13: Every time the stateChange method is invoked,
            it extracts value from the passed target argument and uses the
            setState() method to update local values.
          </p>
        </div>
      </div>
      <div class="card w-1/2 bg-blue-400 shadow-xl ml-52 mt-6">
        <div class="card-body">
          <h2 class="card-title ">How does prototypical inheritance work?</h2>
          <p>
            Prototypal inheritance In programming, we often want to take
            something and extend it. For instance, we have a user object with
            its properties and methods, and want to make admin and guest as
            slightly modified variants of it. We’d like to reuse what we have in
            user, not copy/reimplement its methods, just build a new object on
            top of it. Prototypal inheritance is a language feature that helps
            in that.
          </p>
        </div>
      </div>
      <div class="card w-1/2 bg-blue-400 shadow-xl ml-52 mt-6">
        <div class="card-body">
          <h2 class="card-title ">
            What is a unit test? Why should write unit tests?
          </h2>
          <p>
            Unit tests are typically automated tests written and run by software
            developers to ensure that a section of an application (known as the
            "unit") meets its design and behaves as intended. In procedural
            programming, a unit could be an entire module, but it is more
            commonly an individual function or procedure.
          </p>
        </div>
      </div>

      <div class="card w-1/2 bg-blue-400 shadow-xl ml-52 mt-6">
        <div class="card-body">
          <h2 class="card-title ">
            Why you do not set the state directly in React. For example, if you
            have const [products, setProducts] = useState([]). Why you do not
            set products = [...] instead, you use the setProducts ?
          </h2>
          <p>
            The three dots in JavaScript are the spread / rest operator. The
            spread syntax allows an expression to be expanded in places where
            multiple arguments are expected.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
