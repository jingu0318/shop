import { useState, useEffect } from "react";
import axios from "axios";

export function useName() {

    let [username, setUsername] = useState('');
    
    useEffect(()=>{
        axios.get('/username.json')
        .then((r)=>{
        setUsername(r.data)
        })
        .catch(()=>{
            setUsername('불러오기 실패함 ㅋㅋ')
        })
    },[])

    return username;

}