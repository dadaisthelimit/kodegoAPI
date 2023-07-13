exports.checkToken = (req, res, next) => {
	if (req.body.token && req.body.token.length > 32){
		next();
	}else{
		res.status(401).send('Unauthorized')
	}
}