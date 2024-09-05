#!/bin/bash
. import-env mysql.env

# line=$(head init_db/init_user.sql)
# ret=${line/"$REPLACE_ME_MYSQL_PASSWORD"/"$MYSQL_PASSWORD"}
# echo $ret > "./init_db/init_user.sql"


FILE="./init_db/init_user.sql"

echo "----"
echo $(cat $FILE | wc -l )
count=1
while true
do
  echo $count
  if [ $count -eq $(cat $FILE | wc -l ) ]; then
    exit 0
  fi
  count=`expr $count + 1`
    # line="`cat $FILE | head -$i | tail -1`"
    # echo "$line"
    # $i=$i+1
done