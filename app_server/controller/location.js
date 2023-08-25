module.exports.homelist=function(req,res){
    res.render('location-list',{title:'Home'});
};
module.exports.locationinfo=function(req,res){
    res.render('location-info',{title:'Location Info'});
};
module.exports.locationinfo2=function(req,res){
    res.render('location-info',{title:'Location Info2'});
};
module.exports.locationinfo3=function(req,res){
    res.render('location-info',{title:'Location Info3'});
};
module.exports.addReview=function(req,res){
    res.render('location-Review-Form',{title:'Add Review'});
};