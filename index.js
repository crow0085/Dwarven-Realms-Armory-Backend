const express = require('express');
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.get("/status", (req, res) => {
    const status = {
       "Status": "Running"
    };
    
    let fellowship = req.query.fellowship;
    let hardcore = req.query.hardcore;


    fetch(`http://loadbalancer-prod-1ac6c83-453346156.us-east-1.elb.amazonaws.com/leaderboards/scores/?fellowship=${fellowship}&hardcore=${hardcore}`)
    .then((response) => response.json())
    .then((data) => {
        
        res.send(data.leaderboards);
    })
    
 });

 app.listen(PORT, () => console.log(`server started on http://localhost:${PORT}`));
