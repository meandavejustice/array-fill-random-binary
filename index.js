module.exports = function (array) {
  return array.map(function() {
           return Number(Math.random() > Math.random());
         })
}