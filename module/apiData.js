'use strict';
const superagent = require('superagent');
class ApiDataConstructor {
    constructor(apiData) {
        this.name=apiData.name,
        this.gender=apiData.gender,
        this.image=apiData.img,
        this.psiPowers=apiData.psiPowers
    }
}

const getApiData = async (req,res)=>{
    const apiUrl= "https://psychonauts-api.herokuapp.com/api/characters?limit=10"
superagent.get(apiUrl).then (data => 
    {
const newData = data.body.map(psi=>{

    return new ApiDataConstructor(psi)
})
        res.send(newData)
    }
    )
}
module.exports = getApiData