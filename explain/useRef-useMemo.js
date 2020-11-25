useRef is used to keep track of DOM elements without re- rendering.
useRef returns a mutable object whose current property holds the ReactElementReference.

We can also use useRef to store values other than ReactElements which does not need to change often or if changes but does not have to re- render.


import React, { useRef } from 'react';

const useRefExplain = () => {
    const nameRef = useRef();
    const passwordRef = useRef();

    useEffect(() => {
        // FOcus on name input element on load of component.
        nameRef.current.focus();
    }, []);

    const handleLogin = () => {
        // Access name and password. Example without using useState.
        console.log(nameRef.current.value);
        console.log(passwordRef.current.value);
    }

    return (
        <div>
            <input
                ref={nameRef}
                value=''
                placeholder='enter name'
            />
            <input
                ref={passwordRef}
                type='password'
                value=''
                placeholder='enter password'
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}


USEMEMO
========================
UseMemo calculates the value for the provided input and further if same input are provided it will not re-calculate but returns value stored in previously.

This hook is used for performance booster, since it helps to avoid unnecessary updates which helps in reduction of computational cost and memory.

const users = ['apple','banana,'painaple','mango'.......];

const useRefExample = useMemo(()=>{
    return users.filter(user=> user === searchText);
},[searchText])

Only when searchText changes the above functions works and returns new result.