// Dependencies
const express = require('express')

// Instantiations
const app = express()

//Configurations
app.set('view engine', 'pug');
app.set('views', './views');

//middleware
app.use(express.urlencoded({extended: true}))

app.use((req, res, next) => {
    console.log("A new request received at " + Date.now());
    next();  
 });
 
// middleware for serving static files(css,js,images)
 app.use(express.static('public'));

// Routes
app.get('/login', (req, res) => { 
    res.render('smooth-login');
})


app.get('/driver', (req, res) => { 
    res.render('driver-registration');
})

app.get('/interface1', (req, res) => { 
    res.render('driver-interface', {title: 'Employee'});
})

app.get('/pickup-zones', (req, res) => { 
    res.render('pickup-zones');
})

app.post('/createEmployee', (req,res)=>{
    console.log(req.body)
    res.send("Data successfully captured") 
})

app.get('*', (req, res)=> {
    res.send('The route specified doesnt exist')
})
  
//Server 
app.listen(3000, () => console.log('listening on port 3000'));
