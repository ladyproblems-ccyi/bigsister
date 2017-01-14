import Express from 'express';


const app = Express();
const PORT = process.env.PORT;

app.use(Express.static('dist'));

app.get('/', (req, res) => {
  res.render('dist/index.html');
});


let server = app.listen(PORT, () => {
    let host = server.address().address;
    let port = server.address().port;

    console.log(`bigsister ui listening at http://${host}/${port}`);
});
