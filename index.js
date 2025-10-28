const express = require('express');
const app = express();
const db =require('./models');
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({
    extended : true
}));

app.listen(PORT, ()=>{
    console.log('Server started on port 3000');

})

db.sequelize.sync()
.then((result)=>{
    app.listen(3000,()=>{
        console.log('Serverr started');
    })
})   


.catch((err)=>{
    console.log(err);

})

app.post("/komik",async (req,res) => {
    const data = req.body;
    try {
        const komik = await db.komik.create(data);
        res.send(komi)k;  
    } catch (err) {
        res.send(err);
    }
});



