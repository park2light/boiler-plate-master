//다운받은 익스프레스 모듈을 가져옴
const express = require('express')
//평션을 이용해서 새로운 익스프레스 앱을 만들고
const app = express()
const port = 5000
const {User} = require("./models/User");
const bodyParser = require('body-parser');
const config = require('./config/key');

//application/x-www-form-urlencoded 이렇게 된 데이터를 분석해서 가져올수 있게해줌
app.use(bodyParser.urlencoded({extended:true}));
//application/json 파일로 된거를 분석해서 가져올수 있게 해줌
app.use(bodyParser.json());


//다운받은 몽구스 모듈을 가져옴
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://psh:psh1234@boilerplate.idmdn.mongodb.net/boilerplate?retryWrites=true&w=majority',{
//mongoose.connect(config.mongoURI,{
useNewUrlParser:true , useUnifiedTopology:true ,useCreateIndex:true,useFindAndModify:false
//연결이 잘됐으면..(그러면)
}).then(()=> console.log('mongoDb connected~~'))
//에러가 있으면
.catch(err=>console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!안녕하세여')
})
//포스트맨에서 자꾸 안되면 여기를 지웠따가 다시 써봐 그럼 될수도 있음
app.post('/register',(req,res) =>{
 
  //회원가입할때 필요한   정보를 client에서 가져오면
  //그것들을 데이터 베이스에 넣어준다.
  //User를 가져옴 맨위에 const User~

  // req.body 안에 이런식으로 들어있음 이것은 bordyparser가 있어서 가능한것
  // {
  //   id:"hello"
  //   password:"123"
  // }
  const user = new User(req.body)
  user.save((err,userInfo)=>{
    if(err) return res.json({ success:false,err })
    //status 200은 성공했따는 표시고 이것을 제이슨 형대로 전달해줌
    return res.status(200).json({ success:true })
  }) // svae()는 몽고db에서 가져온 메소드임


})
//앱실행
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

//모델은 스키마를 감싸주고 스키마는 하나하나 이름,내용 등등 지정해주는것
//몽고디비 연결할때 아이피 설정하는거 확인해
// git init -> git 저장소를 만들어주는 혁할/ 이걸 치면 깃 저장소에 들어갈 준비가 되어있따.. 옆에 숫자가 표시됨
// git add . -> stagingArea 로 파일이 들어감 git repository(깃저장소)에 넣기 전에 한번 대기시켜주는곳..
//(git rm --cached node_modules -r  node_modules폴더를 삭제한다)
// git status 를 치면 stagingArea에 파일이뭐있는지 확인가능
// git commit -m"처음올림" -> 깃 저장소에 올라감 , 이단계전에 git 최초 이름,이메일 설정이 되어있어야함
//$ git config --global user.name "John Doe"
//$ git config --global user.email johndoe@example.com 설정후 git config --list 로 확인
// 끝내고 git status 를 해보면 아무것도 안나옴 다 올라갔으니깐

//요약 git init(저장소만들기) -> git add(저장소전에 대기) -> git commit -m "메시지" (git에 올림) -> git push(github에올림)

//github에 접속해서 new 클릭후 저장소 만듬
//git bash에서 구글 generating new ssh~ 쳐서 나오는데로 들어가서 치라는데로 침 
//$ ssh-keygen -t ed25519 -C "your_email@example.com"


//$ eval $(ssh-agent -s)
//$ ssh-add ~/.ssh/id_rsa  -> 여기서 이상하게 막힘 no directory 어쩌고 나옴

//그래서 찾아보니깐 
//ssh-keygen (설명:This error means you don't have an ssh key yet. Create on using the following command)
//치고 생성하고 다시 
//$ eval $(ssh-agent -s)
//$ ssh-add ~/.ssh/id_rsa  
//하니깐됨 

//$ clip < ~/.ssh/id_rsa.pub 를치면 ssh key 가 클립보드에 복사가됨
// 이 클립보드를 깃헙 오른쪽상단 setting가서 붙여넣기하고 저장

//그리고 
//git remote add origin https://github.com/park2light/boiler-plate-master.git
//git branch -M main
//git push -u origin main
//하면 최종적으로 올라감

//노드문설치
//npm install nodemoon --save-dev