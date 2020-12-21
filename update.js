// DB の connect 処理をモジュールにして読み込む
const db = require('./lib/db');

//db: connect()
const con = db.connect();

//SELECT
let sql = 'UPDATE users SET ? where ? ;;'
let  params = [
    {email: 'test@yokohama.com'},
    {id: 1  },
]
con.query(sql, params, (err, result) =>{
    console.log(sql);
    console.log(result);
} );

con.end();