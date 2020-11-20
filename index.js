//다운받은 익스프레스 모듈을 가져옴
const express = require('express')
//평션을 이용해서 새로운 익스프레스 앱을 만들고
const app = express()
const port = 5000

//다운받은 몽구스 모듈을 가져옴
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://psh:psh1234@boilerplate.idmdn.mongodb.net/boilerplate?retryWrites=true&w=majority',{
  useNewUrlParser:true , useUnifiedTopology:true ,useCreateIndex:true,useFindAndModify:false
//연결이 잘됐으면..(그러면)
}).then(()=> console.log('mongoDb connected~~'))
//에러가 있으면
.catch(err=>console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!안녕하세여')
})
//앱실행
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

//모델은 스키마를 감싸주고 스키마는 하나하나 이름,내용 등등 지정해주는것
//몽고디비 연결할때 아이피 설정하는거 확인해