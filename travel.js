let optimizeDestination = function (destination) {    
    if (!destination) {
        return
    }
            
    let destTye = ''

    Object.values(destination).forEach((route) => {
        if (route) {
            destTye = 'relyedDest'
        } else {
            destTye ='normalDest'
        }                
    })
    
    switch(destTye) {
        case 'normalDest':
            console.log('single')

            break
        case 'relyedDest':
            console.log('rely')
            break
        default:
            console.log('Unrecognized type');
    }
}

let objX = {
    x : '',
    z: 'y',
    y: 'z',
}
let y = {
    x : '',
}
console.log(objX)

optimizeDestination(objX)
optimizeDestination(y)