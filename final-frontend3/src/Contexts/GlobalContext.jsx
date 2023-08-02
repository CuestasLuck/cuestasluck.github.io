import { createContext, useState, useEffect } from 'react';

export const GlobalContext = createContext();

function GlobalContextProvider(props){
    const [doctors, setDoctors] = useState([])

    async function getDoctors() {
        const response = await (
            await fetch('https://jsonplaceholder.typicode.com/users')
        ).json()
        setDoctors(response)
    }

    useEffect(() => {
        getDoctors()
    },[])

    console.log(doctors, "doctores")

    
    const globalValues = {
        doctors,
    }

    return (
        <GlobalContext.Provider value={globalValues}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;