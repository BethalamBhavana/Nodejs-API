var products=require('./products');
var http=require('http');
const users = require('./user');


const server=http.createServer((req , res)=>{
    res.writeHead(200,'content-type','text/json');
    var productsList=products.products();
    if(req.url=='/home'&&req.method=='GET'){
        res.end("Welcome Home")
    }

    else if(req.url=='/products'&&req.method=='GET'){
        res.end(JSON.stringify(productsList,null,2))
    }

     else if(req.url=='/addProducts'&& req.method=='POST'){
       let newProduct="";
       req.on('data',(chunk)=>{
        newProduct+=chunk;
       })
       req.on('end',()=>{
        productsList.push(JSON.parse(newProduct));
        res.end('Successfully Added Product')
       })
     }
    
    else if(req.url.startsWith('/deleteProducts/')&&req.method=='DELETE'){
       const id=req.url.split('/')[2];
       const index=productsList.findIndex((i)=>i.id==id);
       if(index!=-1){
        productsList.splice(index,1);
        res.end('product deleted')
       }else{
        res.end('product not found')
       }
    }
    
    else if(req.url.startsWith('/updateProduct/')&& req.method=='PUT'){
        const id=req.url.split('/')[2];
        let newData="";
        req.on('data',(chunk)=>{
            newData+=chunk;
        })
        req.on('end',()=>{
            const updatedContent=JSON.parse(newData);
            const index=productsList.findIndex((i)=>i.id==id);
            if(index!=-1){
                productsList.splice(index,1,updatedContent)
                res.end('product updated successfully');
            }else{
                res.end('product not found')
            }
        })
    }
else if (req.url == '/register' && req.method == 'POST') {
    let newUser = '';
    req.on('data', (chunk) => {
        newUser += chunk;
    });

    req.on('end', () => {
        const user = JSON.parse(newUser);
        const usersList = users.allUsers();
        const present = usersList.find((u) => u.username == user.username);

        if (present) {
            res.end(JSON.stringify({ message: "user exists" }));
        } else {
            usersList.push(user);
            res.end(JSON.stringify({ message: "registered successfully" }));
        }
    });
}

else if (req.url == '/login' && req.method == 'POST') {
    let login = '';
    req.on('data', (chunk) => {
        login += chunk;
    });

    req.on('end', () => {
        const loginUser = JSON.parse(login);
        const usersList = users.allUsers();

        const myUser = usersList.find((u) => u.username == loginUser.username);

        if (myUser && myUser.password == loginUser.password) {
            res.end(JSON.stringify({ message: "login successful" }));
        } else {
            res.end(JSON.stringify({ message: "invalid username or password" }));
        }
    });
}

else if (req.url.startsWith('/products/filter/') && req.method === 'GET') {
    const price =req.url.split('/')[3]; 
    const filtered = productsList.filter(p => p.price <price);
    res.end(JSON.stringify(filtered));
  }

 else if(req.url=='/namesSort'&&req.method=='GET') {
    const sort=productsList.sort((a,b)=>a.name.localeCompare(b.name))
    res.end(JSON.stringify(sort));
 }
 })

 var port=4300;
   server.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});

