const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    name:{
        type:String,
        maxlength:50
    },
    email:{
        type:String,
        trim:true,
        unique:1
    },
    password:{
        type:String,
        minlength:5
    },
    lastname:{
        type:String,
        maxlength:50
    },
    //0이면 일반사용자, 1이면 관리자 이런식으로..
    role:{
        type:Number,
        default:0
    },
    image:String,
    token:{
        type:String

    },
    tokenExp:{
        type:Number
    }


})
//스키마를 모델로 감싸줌
const User = mongoose.model('User',userSchema)
//이 모델을 다른파일에서도 쓰고싶으니깐
module.exports ={ User };