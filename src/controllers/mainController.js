const path = require('path');
const fs = require('fs');


const mainController = {
    home: ( req, res )=> { 
       // res.sendFile(path.resolve(__dirname, '..' , '..', 'public', 'index.html' ));
        res.render('home');
    },
    contact: ( req, res )=> {  
        res.send('Route for Contact View');
    },
    about:( req, res )=> {
      res.send('Route for About View');
    },
    faqs:( req, res )=>{ 
        res.send('Route for Faqs View');
    },
    shop: ( req, res )=> {    
        res.render('shop');
       // res.sendFile(path.resolve(__dirname, '..' , '..', 'public', 'pages', 'shop.html' ));    
       /*const data = fs.readFileSync(path.resolve(__dirname, '..', 'data', 'items.json') );
       res.send(JSON.parse(data));*/
      
    },
    getShopItemById: ( req, res )=> {      
        res.sendFile(path.resolve(__dirname, '..' , '..', 'public', 'pages', 'item.html' )); 
       /* const data = fs.readFileSync(path.resolve(__dirname, '..', 'data', 'items.json') );
        const items = JSON.parse(data);
        const itemSelected = items.find( item => item.product_id == req.params.id);
        res.send(itemSelected)*/
       
    },
    
    getShopItemByItem: ( req, res )=> {         
        res.render('item'); 
        //res.sendFile(path.resolve(__dirname, '..' , '..', 'public', 'pages', 'item.html' )); 
        /*const data = fs.readFileSync(path.resolve(__dirname, '..', 'data', 'items.json') );
        const items = JSON.parse(data);
        console.log(req.query)
        if(req.query.search) {
            const resultado = items.filter(item => item.product_name.toLowerCase().includes(req.query.search));
            res.send(resultado);
        } else {
            res.sendFile(__dirname, '..', 'data', 'items.json');
        }*/
       
    },

    postShopItemById:( req, res )=> {  
        const id = req.params.id;
        res.send( 'Route post for item id' +  id );
    },
    getCart:( req, res )=> { 
        res.render('carrito');
    },
    postCart:( req, res )=> { 
        res.send('Route for post cart view');
    },

   login:( req, res )=> {
        res.render('login');
       // res.sendFile(path.resolve(__dirname, '..' , 'pages', 'login.html' )); 
    },

    postLogin:( req, res )=> {
        res.send('route for login');
    },
    getRegister:( req, res )=> {
        res.render('register');
    },
    postRegister:( req, res )=> {
        res.send('route for post register');
    },
    logout:( req, res )=> {
        res.render('login');
    },
    admin:( req, res )=> { 
        res.render('listadoProductos');
       // res.sendFile(path.resolve(__dirname,  'listadoProductos.html' )); 
       //res.sendFile(path.resolve(__dirname, '..' , '..', 'public', 'pages', 'listadoProductos.html' )); 
    },
    
    poductList:( req, res ) => {
        res.render('listadoProductos');
    },
    
    getAdminCreate:( req, res )=> {
        //const id = req.params.id;
        res.render('create');
   },
   postAdminCreate:( req, res)=> {
    //const id = req.params.id;
    res.send('route post create id');
   },
   getAdminEditById:( req, res )=> {   
    res.render('edit');
    //res.send('Route for admin view by id' + id);
   },
   putAdminEditById:( req, res )=> {   
    res.send('Route for edit admin view by id');
   },
   deleteAdmById:( req, res )=> {   
    res.send('Route for delete admin view by id');
   },




}

module.exports = mainController;