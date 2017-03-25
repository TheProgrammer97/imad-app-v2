var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={
    'article-one:' {
        title:'Article-one | Advait Sarang',
        heading:'Article One',
        date:'Mar 25,2016',
        content:'<p>This is the content for my first article blablalblblalanlbllbalblabl</p>'
    },
    'article-two:'{
        title:'Article-two | Advait Sarang',
        heading:'Article Two',
        date:'Mar 25,2016',
        content:'<p>This is the content for my second article blablalblblalanlbllbalblabl</p>'
    },
    'article-three:'{
        title:'Article-three | Advait Sarang',
        heading:'Article Three',
        date:'Mar 25,2016',
        content:'<p>This is the content for my third article blablalblblalanlbllbalblabl</p>'
    }
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter =0;
app.get('/counter',function (req,res){
    counter=counter + 1;
    res.send(counter.toString());
});

var names = [];
app.get('/submit-name',function (req,res){
    var name = req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});

app.get('/:articleName',function (req,res){
    var articleName = req.params.articleName;
    res.send(createTemplate(article[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
