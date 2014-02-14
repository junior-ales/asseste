var app = function () {
  var express = require('express');
  var sass = require('node-sass');
  var path = require('path');
  var logfmt = require("logfmt");
  var app = express();

  app.engine('html', require('ejs').renderFile);

  var sassConfig = {
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public'),
    outputStyle: 'compressed',
    imagePath: path.join(__dirname, 'public', 'img'),
  };
  app.use(sass.middleware(sassConfig));

  app.set('views', path.join(__dirname, 'views'));
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.static(path.join(__dirname, 'bower_components')));

  app.use(logfmt.requestLogger());

  app.get('/', function(req, res) {
    res.render('index.html', { title: '' });
  });
  app.get('/produtos', function(req, res) {
    res.render('produtos.html', { title: ' - Produtos' });
  });
  app.get('/servicos', function(req, res) {
    res.render('servicos.html', { title: ' - Serviços' });
  });
  app.get('/contato', function(req, res) {
    res.render('contato.html', { title: ' - Contato' });
  });

  return app;
}();

module.exports = app;

