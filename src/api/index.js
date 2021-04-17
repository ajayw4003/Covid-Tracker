import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async() =>{
    try{
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);

        
        return {confirmed,recovered,deaths,lastUpdate} ;
    }catch(error){

    }
}

export const fetchDailyData = async() =>{
    try{
        const { data1 } = await axios.get(`${url}/daily`);
        
        const modifiedData = data1.map((item) => ({
            confirmed: item.confirmed.total,
            deaths: item.deaths.total,
            reportDate: item.reportDate,
        }))
        // console.log(data[0]);
        // console.log(data[0].confirmed.total);
        // console.log(modifiedData)
        return modifiedData;

    }catch(error){

    }
}