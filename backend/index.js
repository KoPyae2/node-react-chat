const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');

const app = express();
app.use(express.json());
app.use(cors({origin:true}));
app.post('/authenticate', async ( req,res) => {
    const { username } = req.body;
    try{
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            {username:username , secret:username , first_nameL: username},
            {headers:{
                "PRIVATE-KEY":"34b4e6fd-e4bc-4e4a-9766-240adbbab327 "
                }
            }
        )
        return res.status(r.status).json(r.data)
    }catch (e){
        return res.status(e.response.status).json(e.response.data)
    }
});


app.listen(3001);