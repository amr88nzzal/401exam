'use strict';
const mongooseDb = require('./Mongoose');
const slug = (str) => {
    console.log(str);
    return str.toLowerCase().split(' ').join('-');
}

const readData = (req, res) => {
    const reqSlug = req.query.name;
    mongooseDb.find({ slug: slug(reqSlug) }, (err, data) => {
        console.log(data)
        res.send(data[0])
    }).catch(err => { console.log(err) })

}
const addData = (req, res) => {
    console.log(req.body);
    
    const { name, gender, image, powers } = req.body;
    mongooseDb.find({ slug: slug(name) }, (err, data) => {
        if(err){
            throw err;
          }
        console.log(data);
        if (data.length > 0) { res.send('PSI already In Database ') }
        else {
            const newPSI = new mongooseDb({ name: name, slug: slug(name), gender: gender, image: image, power: powers })
            newPSI.save()
        }
    }).catch(err => { console.log(err) })

}
const deleteData = (req, res) => {
    const reqSlug =req.params.id;
    mongooseDb.deleteOne({ slug: slug(reqSlug)}, (err, result) => {
        if(err){
          throw err;
        }
        res.send(result)
      });
    console.log(reqSlug);

       
   
}
const updateData = (req, res) => {
    
    const oldName = req.query.name;
    const { newName, gender} = req.body;
    console.log(req.body);
    mongooseDb.find({ slug: slug(oldName) }, (err, data) => {
        if(err){
            throw err;
        }
        if (data.length <= 0) { res.send('PSI NOT In Database ') }
        else {
            console.log('ssssss',data);
           data[0].name= newName;
           data[0].gender= gender;
           data[0].slug= slug(newName);
            data[0].save()
        }
    }).catch(err => { console.log(err) })

}

module.exports = { addData, readData, deleteData, updateData }