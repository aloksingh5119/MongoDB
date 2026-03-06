//use('ecommerce');

//db.names.updateOne(
//    { name:"Wireless Mouse"},
//    { $set: {price:1234} }
//)

use('ecommerce');

db.names.updateOne(
    {name:'Wireless Mouse'},
    {$push:{tags:'new'}}
)
