import { PrismaClient } from '@prisma/client'
import process from 'process';

const prisma = new PrismaClient()

async function main() {
  // ユーザーデータのシード
  const users = await prisma.users.createMany({
    data: [
      {
        user_type: 'client',
        first_name: 'Alice',
        last_name: 'January',
        username: 'alice',
        email: 'alice@example.com',
        hashed_password: 'password',
      },
      {
        user_type: 'supplier',
        first_name: 'Bob',
        last_name: 'February',
        username: 'bob',
        email: 'bob@example.com',
        hashed_password: 'password',
      },
      {
        user_type: 'arbitrator',
        first_name: 'Charlie',
        last_name: 'March',
        username: 'charlie',
        email: 'charlie@example.com',
        hashed_password: 'password',
      },
    ],
  });

  // プロファイルデータのシード
  const profiles = await prisma.profiles.createMany({
    data: [
      {
        user_id: 1,
        specification: 'specification1',
        bio: 'bio1',
        website: 'website1',
        email: 'email1@example.com',
      },
      {
        user_id: 2,
        specification: 'specification2',
        bio: 'bio2',
        website: 'website2',
        email: 'email2@example.com',
      },
    ],
  });

  // タスクデータのシード
  const tasks = await prisma.tasks.createMany({
    data: [
      {
        user_id: 1,
        status: 'new_task',
        title: 'Task 1',
        description: 'Description 1',
        supplier_id: 2,
      },
      {
        user_id: 2,
        status: 'processing',
        title: 'Task 2',
        description: 'Description 2',
        supplier_id: 1,
      },
    ],
  });

  // タスクコメントデータのシード
  const taskComments = await prisma.task_comments.createMany({
    data: [
      {
        task_id: 1,
        coomment: 'Comment 1',
      },
      {
        task_id: 2,
        coomment: 'Comment 2',
      },
    ],
  });

  // タスクアイテムデータのシード
  const taskItems = await prisma.task_items.createMany({
    data: [
      {
        task_id: 1,
        user_id: 1,
        status: 'new_task',
        title: 'Task Item 1',
        description: 'Description 1',
        supplier_id: 2,
      },
      {
        task_id: 2,
        user_id: 2,
        status: 'processing',
        title: 'Task Item 2',
        description: 'Description 2',
        supplier_id: 1,
      },
    ],
  });

  // 紛争データのシード
  const disputations = await prisma.disputations.createMany({
    data: [
      {
        task_id: 1,
        status: 'dispute',
        title: 'Dispute 1',
        description: 'Description 1',
        user_id: 1,
      },
      {
        task_id: 2,
        status: 'processing',
        title: 'Dispute 2',
        description: 'Description 2',
        user_id: 2,
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });