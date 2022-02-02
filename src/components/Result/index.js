import React, { useEffect } from 'react';
import axios from 'axios';


const Result = () => {
    useEffect(() => {
        async function getRepos(){
            let data = await axios.get(`https://github.com /users/ViViAnna25/repos`)
            return data
        }
        getRepos()
    }, [])
}

export default Result