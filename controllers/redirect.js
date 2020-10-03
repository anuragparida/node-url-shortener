exports.getRedirect = (req, res, next) => {
  console.log(req.originalUrl.slice(1));
};
