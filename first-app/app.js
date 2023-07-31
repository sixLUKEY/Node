function hello( name ){
    console.log( "hello " + name );
}

hello( "world" );

var logger = require('./logger')
console.log( logger );
logger.log( 'message' )