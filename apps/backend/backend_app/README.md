# Backend_App

## DB

phpmyadmin

http://localhost:9090/

user: prisma_user


## Backend

https://github.com/infinith4/rewardchain/apps/backend


yarn add -D prisma
yarn add @prisma/client mysql2


CREATE USER 'prisma_user'@'%'
  IDENTIFIED BY 'rpannaNXks92jX';
 
GRANT ALL PRIVILEGES ON *.* TO 'prisma_user'@'%' WITH GRANT OPTION;

npx prisma init

npx prisma migrate dev --name init

npx prisma db seed