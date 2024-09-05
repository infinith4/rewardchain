
mysql.env

```
MYSQL_DATABASE=rewardchaindb
MYSQL_USER=xxxxxx
MYSQL_PASSWORD=xxxxxx
MYSQL_ROOT_PASSWORD=xxxxxx
```


mysql.env -> init_db/init_user.sql

*********


cat init_db/init_user.sql | sed s/REPLACE_ME_PASSWORD/APPLE/


$line=cat init_db/init_user.sql
ret=${line/"$from"/"$to"}