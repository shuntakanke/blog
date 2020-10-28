# blog

# npm
config-https://www.npmjs.com/package/config

①configファイル作る

②default.json作る

③default.jsonのなかにjson形式でkeyとvalueを定義する

ー他のファイルから使う方法

④const config = require('config');

⑤const value = config.get('key');



ejs-https://www.npmjs.com/package/ejs

ー↓使い方

https://qiita.com/kamihork/items/1b13d2157979d1837849




method-override-https://www.npmjs.com/package/method-override

ーこんな感じ

<form method="POST" action="/resource?_method=DELETE">
  <button type="submit">Delete resource</button>
</form>




