const mongoose = require("mongoose");

//creating model:
const user = mongoose.model('user')


const addUser = async (req, res) => {
    let userData =  await user.create({username : req.body.username, password : req.body.password}); //mongodb hume rsult de rah h
    console.log(userData)
    return res.status(200).json({ data: userData, error:null, success: true });
}

//reference
// try { 
//     let DataCreated = await Database.create({        });
//     return res.status(200).json({ data: DataCreated, error:null, success: true });
//   } catch (err) {
//     return res
//       .status(500)
//       .json({ data: "Something Went Wrong", error: err, success: false });
//   }


module.exports = {addUser}