function getPercent(size) {
    return 100 - 100 / size
}
var insertGrid = function (id, color = '#475663', width = 25, height = width) {
    var pw = getPercent(width)
    var ph = getPercent(height)
    var div = document.createElement('div')
    div.style = `pointer-events: none;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to right,transparent 0%, transparent ${pw}%, ${color} ${pw}%), linear-gradient(to bottom,transparent 0%, transparent ${ph}%, ${color} ${ph}%);
        background-size: ${width}px ${height}px;
        background-repeat: repeat;`
    var parent = document.getElementById(id)
    parent.appendChild(div)
}
var makeGrid = function (id, color = '#475663', width = 25, height = width) {
    var pw = getPercent(width)
    var ph = getPercent(height)
    var div = document.getElementById(id)
    div.style = `
        background-image: linear-gradient(to right,transparent 0%, transparent ${pw}%, ${color} ${pw}%), linear-gradient(to bottom,transparent 0%, transparent ${ph}%, ${color} ${ph}%);
        background-size: ${width}px ${height}px;
        background-repeat: repeat;`
}
module.exports = { insertGrid, makeGrid }
exports.default = insertGrid
