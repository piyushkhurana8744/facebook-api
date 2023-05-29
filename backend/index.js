const express = require('express');
const axios = require('axios');
const app = express();
const cors=require("cors")

app.use(cors())
app.use(express.json())

app.post('/api/getLeads', (req, res) => {
  const { accessToken } = req.body;

  axios
    .get(`https://graph.facebook.com/v13.0/me/leadgen_forms?access_token=${accessToken}`)
    .then((response) => {
      const leads = response.data.data;
      console.log('Leads:', leads);
      // Process the leads or perform other actions
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error('Error retrieving leads:', error);
      res.sendStatus(500);
    });
});
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
