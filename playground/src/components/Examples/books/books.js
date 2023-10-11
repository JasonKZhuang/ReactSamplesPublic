import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// stateless functional component
// always return JSX
// Must return a single element
// Use div / section/ article or React.Fragment
// Use camelCase for html attribute
// ClassName instead of class
// Don't forget closing every element
// Function Name is always start with Capital letter
// Function ==> return  with a pair of '()'
// React Tools
//================================================================//
// this is a book component which will be render by  ReactDOM.render
function Books() {
  return (
    <React.Fragment>
      <section className="books">
        <Book />
        <Book />
        <Book />
      </section>
    </React.Fragment>
  );

};

// Nested Components
// this is a constant book element which consists of coverImage, title, author
const Book = () => {
  return (
    <article className="book">
      <CoverImage></CoverImage>
      <BookTitle></BookTitle>
      <BookAuthor></BookAuthor>
    </article>
  );
};

const CoverImage = () => (
  <img
    width="200px"
    height="200px"
    src="https://m.media-amazon.com/images/I/41P3Po+5OgL.jpg" alt="Donkey"
  />
);

const BookTitle = () => (
  <h1 style={{ fontSize: "2rem" }}>This is a Donkey</h1>
);

const BookAuthor = () => (
  <p style={AuthorStyle}>
    by Smith John
  </p>
);

//constant style object 
const AuthorStyle = {
  letterSpacing: "10px",
  color: "green"
}
//================================================================//

//================================================================//
const btnBig = "Big Button"
function Person() {

  const innerBtn = "search button";
  const firstName = "Jason";
  const lastName = "Zhuang";
  const address = "5 Victoria St"

  return (
    <section>
      <MyHeader></MyHeader>
      <button>{innerBtn}</button>
      <button>{btnBig}</button>
      <h2>{firstName + " - " + lastName}</h2>
      <h2>{`${address} ${" - "} ${lastName}`}</h2>
      <MyContent></MyContent>
      <p>{12 + 35}</p>
    </section>
  );
}

//constant function must have return 
const MyHeader = () => {
  return (
    <h1>Hello world</h1>
  );
}

const MyContent = () => {
  return (
    <p>this is a persopn</p>
  );
}
//================================================================//


//================================================================//
//passing arguent between components
function People() {
  const friends = [
    { name: "Jason", age: "20", job: "developer", company: "Microsoft" },
    { name: "John", age: "30", job: "Manager", company: "Apple" },
    { name: "Tori", age: "18", job: "Designer", company: "Apple" }
  ]
  return (
    <section>
      <PersonInstannce1 name="Jason" job="developer" />
      <PersonInstannce1 name="Bob" job="Manager" />
      <PersonInstannce1 name="Tori" job="Desinger" age="22" />

      <PersonInstannce2 person={friends[0]}>
        <div>
          <h1>Some Heading</h1>
          <p>Some information</p>
        </div>
      </PersonInstannce2>
      <PersonInstannce2 person={friends[1]}>
        <div>
          <h1>Some Heading</h1>
          <p>Some information</p>
        </div>
      </PersonInstannce2>
    </section>
  );

}

//passing props variable object to this component
const PersonInstannce1 = (props) => {
  return (
    <article>
      <h1>{props.name}</h1>
      <p>{props.job}</p>
      <p>{props.age}</p>
      <p>{props.company}</p>
      <hr />
    </article>
  )
}

//children properties
const PersonInstannce2 = (props) => {
  const { name, job, age, company } = props.person;
  // const{children} = props
  return (
    <article>
      <h1>{name}</h1>
      <h2>{props.person.name}</h2>
      <p>{job}</p>
      <p>{age}</p>
      <p>{company}</p>
      {props.children}



      <hr />
    </article>
  )
}

//execute render function with two parameters
ReactDOM.render(
  <React.StrictMode>
    <Books />
    <Person />
    <People />
  </React.StrictMode>,
  document.getElementById('root')
);


