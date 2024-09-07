import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // モデル投入用のデータ定義
  const userData = [
    {
      user_type: 0,
      first_name: 'Alice',
      last_names: 'January',
      username: 'alice',
      email: 'infinith4@gmail.com',
      hashed_password: 'password',
      profile: {
        user_id: 1,
        specification: "specification1",
        bio: "bio",
        website: "website",
        email: "email"
      }
    },
    {
      user_type: 1,
      first_name: 'Bob',
      last_names: 'February',
      username: 'bob',
      email: 'infinith4@gmail.com',
      hashed_password: 'password',
      profile: {
        user_id: 1,
        specification: "specification1",
        bio: "bio",
        website: "website",
        email: "email"
      }
    },
    {
      user_type: 1,
      first_name: 'Charlie',
      last_names: 'March',
      username: 'charlie',
      email: 'infinith4@gmail.com',
      hashed_password: 'password',
      profile: {
        user_id: 1,
        specification: "specification1",
        bio: "bio",
        website: "website",
        email: "email"
      }
    },
  ]

  for (const user of userData) {
    await prisma.users.create({
      data: user
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


// const transfer = async () => {
//     const users = [];
//     for (const u of userData) {
//         const user = prisma.users.create({
//             data: u,
//         })
//         users.push(user);
//     }
//     return await prisma.$transaction(users);
// }

// // 定義されたデータを実際のモデルへ登録する処理
// const main = async () => {
//     console.log(`Start seeding ...`)

//     await transfer();

//     console.log(`Seeding finished.`)
// }

// // 処理開始
// main()
//     .catch((e) => {
//         console.error(e)
//         process.exit(1)
//     })
//     .finally(async () => {
//         await prisma.$disconnect()
//     })