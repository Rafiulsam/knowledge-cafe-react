import React from 'react';

const QuestionAnswer = () => {
    return (
        <div className='max-w-xs mx-auto lg:max-w-5xl my-10 bg-[#1111110D] p-7 rounded-lg '>
            <div className='bg-white p-4 rounded-lg mb-7'>
                <h1 className='mb-3'>Props vs State:</h1>
                <p>props are used to pass data from parent to child components and are immutable, while state is used to manage local mutable data within a component. React enables a unidirectional data flow, with props passing data from top-level components to down the component tree and state managing component specific data that can change over time.</p>
            </div>
            <div className='bg-white p-4 rounded-lg mb-7'>
                <h1 className='mb-3'>How does useState work?</h1>
                <p>useState adds state to a functional component. It returns an array with two values: the current state and a function to update it. It takes an initial state value and returns an updated state value whenever the function that is set to update is called.</p>
            </div>
            <div className='bg-white p-4 rounded-lg mb-7'>
                <h1 className='mb-3'>Purpose of useEffect other than fetching data:</h1>
                <p>useEffect is not only for fetching data. It is a versatile tool for managing side effects and handling various parts of component behavior and interaction with the DOM and external resources. It combines imperative code within the declarative structure of react functional components.</p>
            </div>
            <div className='bg-white p-4 rounded-lg'>
                <h1 className='mb-3'>How Does React work?</h1>
                <p>React is a library for building user interfaces that manage the rendering and updating of the DOM efficiently through the use of a Virtual DOM and a component-based architecture. It allows a declarative and component-driven approach to building UIs, making it easier to create and maintain complex web applications.</p>
            </div>
        </div>
    );
};

export default QuestionAnswer;