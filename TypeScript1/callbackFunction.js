function addhandler(n1, n2, cb) {
    var result11 = n1 + n2;
    cb(result11);
}
addhandler(12, 13, function (result) {
    console.log(result);
});
