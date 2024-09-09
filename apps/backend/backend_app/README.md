# Backend_App

## DB

phpmyadmin

http://localhost:9090/

user: prisma_user


## Backend

cd backend

yarn start:dev

curl https://github.com/infinith4/rewardchain/apps/backend

https://github.com/infinith4/rewardchain/apps/backend

curl https://github.com/infinith4/rewardchain

yarn add -D prisma
yarn add @prisma/client
yarn add mysql2
yarn add -D typescript ts-node @types/node

CREATE USER 'prisma_user'@'%'
  IDENTIFIED BY 'rpannaNXks92jX';
 
GRANT ALL PRIVILEGES ON *.* TO 'prisma_user'@'%' WITH GRANT OPTION;

npx prisma init

DROP TABLE `profiles`, `tasks`, `task_comments`, `task_items`, `users`, `_prisma_migrations`;

npx prisma migrate dev --name init

# DB からprisma schema に反映する

npx prisma db pull

npx prisma db seed


mysql -h db -u prisma_user -p grans4YaXs32X



rewardchain_mysql.sql をDBに反映し、 npx prisma db pull で以下のファイルを同期済み。

backend/prisma/schema.prisma



vscode ➜ /backend_app/backend $ npx prisma generate
Prisma schema loaded from prisma/schema.prisma
Error: Prisma schema validation - (get-dmmf wasm)
Error code: P1012
error: Error parsing attribute "@relation": The argument `references` must refer to a unique criterion in the related model. Consider adding an `@unique` attribute to the field `task_id` in the model `disputations`.
  -->  prisma/schema.prisma:83
   | 
82 |   task_items    task_items[]
83 |   disputations  disputations    @relation(fields: [id], references: [task_id], onDelete: NoAction, onUpdate: NoAction, map: "fk_disputations_task_id_tasks_id")
84 |   users         users           @relation(fields: [id], references: [id], onDelete: NoAction, onUpdate: NoAction, map: "fk_tasks_id_users_id")
   | 

Validation Error Count: 1
[Context: getDmmf]

Prisma CLI Version : 5.19.1