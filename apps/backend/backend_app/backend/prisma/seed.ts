import { PrismaClient, $Enums } from '@prisma/client'
import { connect } from 'http2';
import process from 'process';

const prisma = new PrismaClient()

var alice_user_id = 10;

var alice_profile = {
  id: 1,
  user_id: alice_user_id, // このidを指定するとusers のidもこのidになる
  specification: 'specification1',
  bio: 'bio1',
  website: 'website1',
  email: 'email1@example.com',
}

var bob_user_id = 20;

var bob_profile = {
  id: 2,
  user_id: bob_user_id, // このidを指定するとusers のidもこのidになる
  specification: 'specification1',
  bio: 'bio1',
  website: 'website1',
  email: 'infinith4@gmail.com',
}
var charlie_user_id = 30;

var charlie_profile = {
  id: 3,
  user_id: charlie_user_id, // このidを指定するとusers のidもこのidになる
  specification: 'specification1',
  bio: 'bio1',
  website: 'website1',
  email: 'infinith4@gmail.com',
}

var task_comments = [
  {
    comment: 'Comment 1',
  },
  {
    comment: 'Comment 2',
  },
];

var task_items = [
  {
    user_id: alice_user_id,
    status: $Enums.task_items_status.new_task,
    title: 'Task Item 1',
    description: 'Description 1',
    supplier_id: bob_user_id,
  },
  {
    user_id: alice_user_id,
    status: $Enums.task_items_status.processing,
    title: 'Task Item 2',
    description: 'Description 2',
    supplier_id: bob_user_id,
  },
]

async function main() {
  // ユーザーデータのシード
  const alice_users = await prisma.users.create({
    data:
      {
        user_type: 'client',
        first_name: 'Alice',
        last_name: 'January',
        username: 'alice',
        email: 'infinith4+alice@gmail.com',
        hashed_password: 'password',
        profiles: {
          create: alice_profile
        }
      },
  });
  // ユーザーデータのシード
  const bob_users = await prisma.users.create({
    data:
      {
        user_type: 'supplier',
        first_name: 'Bob',
        last_name: 'February',
        username: 'bob',
        email: 'infinith4+bob@gmail.com',
        hashed_password: 'password',
        profiles: {
          create: bob_profile
        }
      },
  });
  // ユーザーデータのシード
  const charlie_users = await prisma.users.create({
    data:
      {
        user_type: 'arbitrator',
        first_name: 'Charlie',
        last_name: 'March',
        username: 'charlie',
        email: 'infinith4+charlie@gmail.com',
        hashed_password: 'password',
        profiles: {
          create: charlie_profile
        }
      },
  });

  // タスクデータのシード
  const alice_tasks = await prisma.tasks.create({
    data: {
      user_id: alice_user_id,
      status: $Enums.tasks_status.new_task,
      title: 'title1',
      description: 'description1',
      supplier_id: bob_user_id,
      task_comments: {
        create: task_comments
      },
      task_items: {
        create: task_items
      }
    }
  });

  // タスクデータのシード
  const alice_tasks2 = await prisma.tasks.create({
    data: {
      user_id: alice_user_id,
      status: $Enums.tasks_status.new_task,
      title: 'title2',
      description: 'description2',
      supplier_id: bob_user_id,
      task_comments: {
        create: task_comments
      },
      task_items: {
        create: task_items
      }
    }
  });

  // 紛争データのシード
  const disputations = await prisma.disputations.create({
    data: {
        task_id: alice_tasks.id,
        status: 'dispute',
        title: 'Dispute 1',
        description: 'Description 1',
        user_id: alice_tasks.user_id,
      }
  });
  // 紛争データのシード
  const disputations2 = await prisma.disputations.create({
    data: {
        task_id: alice_tasks.id,
        status: 'dispute',
        title: 'Dispute 2',
        description: 'Description 2',
        user_id: alice_tasks.user_id,
        arbitrator_id: charlie_user_id,
      }
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