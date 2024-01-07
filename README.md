# React + Vite

1) first clone it repo
2) then nmp i
3) then npm run dev

Q1) Q1) Render these into component:
const name = "Hello World";
const obj = {name: "Hello World Object"}
const data = ['We', 'are', 'United'] //Show these in seperate tags
const list = [{name: "Hello World 1"}, {name: "Hello World 2"}, {name: "Hello World 3"}] //Show these in seperate tags
const complex = [{company: 'XYZ', jobs: ['Javascript,' 'React']}, {company: 'ABC', jobs: ['AngularJs' 'Ionic']}]

Ans) 


const NameComponent = () => {
  const name = "Hello World";
  return <p>{name}</p>;
};

const ObjectComponent = () => {
  const obj = { name: "Hello World Object" };
  return <p>{obj.name}</p>;
};

const DataComponent = () => {
  const data = ['We', 'are', 'United'];
  return (
    <div>
      {data.map((item, index) => (
        <span key={index}>{item} </span>
      ))}
    </div>
  );
};

const ListComponent = () => {
  const list = [
    { name: "Hello World 1" },
    { name: "Hello World 2" },
    { name: "Hello World 3" },
  ];
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </ul>
  );
};

const ComplexComponent = () => {
  const complex = [
    { company: 'XYZ', jobs: ['Javascript', 'React'] },
    { company: 'ABC', jobs: ['AngularJs', 'Ionic'] },
  ];
  return (
    <div>
      {complex.map((item, index) => (
        <div key={index}>
          <p>Company: {item.company}</p>
          <p>Jobs: {item.jobs.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

Q2) Difference between import Something from 'package' VS import {Something} from 'package':

Ans)

import Something from 'package': This syntax imports the default export from the 'package' and you can give it any name you like during import. For example, if the package exports a class named Something, you can import it and give it a different name like import MySomething from 'package'.


import { Something } from 'package': This syntax imports the named export named Something from the 'package'. This means that 'package' should have a named export with the exact name Something. If the 'package' exports multiple things, you need to specify the names inside the curly braces, like { Something, AnotherThing }.

   
