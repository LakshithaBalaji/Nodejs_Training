function loger(req,res,next){
    
        console.log('logging..');
        next();
}
module.exports = loger;