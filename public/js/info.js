const axios = require('axios');

function moreAbout(req, res){
    var data = new Date();
    var hoje = data.getFullYear()+"-"+("00" + (data.getMonth() + 1)).slice(-2)+"-"+ (data.getDate());

    var ontem = data.getFullYear()+"-"+("00" + (data.getMonth() + 1)).slice(-2)+"-"+ (data.getDate()-1);
    var dataParse = Date.parse(hoje);
    var dataParserOntem = Date.parse(ontem);

    (async () => {
        try {
          const response = await axios.get('https://api.coincap.io/v2/assets/'+req.query.nome)
          console.log(response.data);
          console.log(response.config.url);
          
          res.render('info', response.data.data);
          
        } catch (error) {
          console.log(error);
        }
    })();

}


module.exports = { moreAbout};