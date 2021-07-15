import React, {useState, useEffect} from 'react';
import {Card} from '../cards/Cards';

export const HomePage = ()=>{

    const [classifcation, setclassification] = useState([])

    useEffect(()=>{
        fetch('/api').then(response => {
            if(response.ok){
                return response.json()
            }
        }).then(data => console.log(data))
    }, [])
    // return(
    //     <>
    //         <Card listofClassification = {classifcation}/>
    //     </>
    // )
}
export default HomePage;