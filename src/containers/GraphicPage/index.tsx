import React,{useState,useCallback} from 'react';
import api from '../../services/api'
import {Pie} from 'react-chartjs-2'




const GraphicPage = () => {
    const [data,setData] = useState(0)
    const [loading, setLoading] = useState(false)
    const getData = useCallback(async () => {
        try{
            const res1 = await api.get('subject:geometry&maxResults=40')
            setData(res1.data)
            console.log(res1.data)
        }catch (err) { 
            console.log(err.message)
        }  
        


    },[])
    
    if(loading === false){
        setLoading(true)
        getData()
    }
    
    
    return(
        // <Pie
        //     data = {{
        //         labels: ['tipo1','tipo2','tipo3','tipo4','tipo5']
        //     }}
        // />
        <h1>TEste</h1>
    )   
    
}


export default GraphicPage