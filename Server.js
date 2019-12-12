var fs = require('fs');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

var photoData = require('./photoData.json');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// 主页面
app.get('/',function(req,res,next){
  req.status(200).render(homePage);
});

app.use(express.static('public'));

// 获取到全部
app.get('/posts', function(req, res, next){
  console.log("== Requesting '/'");
  res.status(200).render('../views/posts', photoData);
});
// 根据index获取到其中一个
app.get('/posts/:n', function(req, res, next){
  var index = req.params.n;
  if (photoData[index]) {
    //TODO 返回给指定页面
    res.status(200).render('../views/partials/post', photoData[index])
  } else {
    next();
  }
});
//add new
app.post('/addPhoto/:photo', function (req, res, next) {
  var photo = req.params.photo.toLowerCase();
  var MaxIndex = 0 ;
  for(var i = 0; i < photoData.length;i++){
    if(MaxIndex < photoData[i].index){
      MaxIndex=photoData[i].index;
    }
}
photo.index = MaxIndex+1;
photoData.push(ptoto);
  var str = JSON.stringify(photoData);//因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
  fs.writeFile('./photoData.json',str,function(err){
      if(err){
          console.error(err);
          res.status(500).send("Failed to write data on server side.");
      }
      console.log('----------新增成功-------------');
      res.status(200).send();
  })
  res.status(200).render('postPage', photoData);
});
// 删除
app.get('/delete/:n', function(req, res, next){
  var index = req.params.n;
    console.log(photoData);
    //把数据读出来删除
    // 标志是否有该index被删除
    var flagIsDelete = false;
    for(var i = 0; i < photoData.length;i++){
      if(index == photoData[i].index){
          //console.log(person.data[i])
          photoData.splice(i,1);
          flagIsDelete = true;
      }
  }
        var str = JSON.stringify(photoData);
        //然后再把数据写进去
        fs.writeFile('./photoData.json',str,function(err){
            if(err){
                console.error(err);
            }
            console.log("----------删除成功------------");
        })
  //  res.status(200).render('../views/partials/post', photoData[index])
  res.status(200).render('postPage', photoData);
});

// update
// 修改
app.get('/update/:photo', function(req, res, next){
  var photo = req.params.photo.toLowerCase();
  var index = photo.index;
    console.log(photoData);
    //把数据读出来删除
    // 标志是否有该index被删除
    for(var i = 0; i < photoData.length;i++){
      if(index == photoData[i].index){
          console.log('index一样的');
          for(var key in params){
              if(photoData[i][key]){
                photoData[i][key] = params[key];
              }
          }
      }
  }
  photoData.push(photo);
        var str = JSON.stringify(photoData);
        //然后再把数据写进去
        fs.writeFile('./photoData.json',str,function(err){
            if(err){
                console.error(err);
            }
            console.log("----------更新成功------------");
        })
  //  res.status(200).render('../views/partials/post', photoData[index])
  res.status(200).render('postPage', photoData);

});

app.get('*', function(req, res){
	res.status(404);
	res.render('404');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
});
