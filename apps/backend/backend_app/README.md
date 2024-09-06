# Backend_App

## DB

phpmyadmin

http://localhost:9090/

user: prisma_user


## Backend

curl https://github.com/infinith4/rewardchain/apps/backend

https://github.com/infinith4/rewardchain/apps/backend

curl https://github.com/infinith4/rewardchain

yarn add -D prisma
yarn add @prisma/client
yarn add mysql2


CREATE USER 'prisma_user'@'%'
  IDENTIFIED BY 'rpannaNXks92jX';
 
GRANT ALL PRIVILEGES ON *.* TO 'prisma_user'@'%' WITH GRANT OPTION;

npx prisma init

npx prisma migrate dev --name init

npx prisma db seed


mysql -h db -u prisma_user -p grans4YaXs32X