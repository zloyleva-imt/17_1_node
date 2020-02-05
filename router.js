const htmlCreator = require('./views');

module.exports = (req,res,creator) => {
    switch(req.url){
        case '/home':
            return res.end(htmlCreator("This is home page", 'home'));
        case '/home/:id':
            return res.end(htmlCreator("This is home page", 'home'));
        case '/about':
            return res.end(htmlCreator("This is about page", 'about'));
        case '/contacts':
            return res.end(htmlCreator("This is contacts page"));
        default:
            return res.end(htmlCreator("Page not found, 404"));
    }
}