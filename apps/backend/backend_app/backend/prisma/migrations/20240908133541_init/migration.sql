/*
  Warnings:

  - You are about to drop the `disputations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `profiles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `task_comments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `task_items` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tasks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `task_comments` DROP FOREIGN KEY `fk_task_comments_id_tasks_id`;

-- DropForeignKey
ALTER TABLE `task_items` DROP FOREIGN KEY `fk_task_items_id_tasks_id`;

-- DropForeignKey
ALTER TABLE `tasks` DROP FOREIGN KEY `fk_disputations_task_id_tasks_id`;

-- DropForeignKey
ALTER TABLE `tasks` DROP FOREIGN KEY `fk_tasks_id_users_id`;

-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `fk_profiles_user_id_users_id`;

-- DropTable
DROP TABLE `disputations`;

-- DropTable
DROP TABLE `profiles`;

-- DropTable
DROP TABLE `task_comments`;

-- DropTable
DROP TABLE `task_items`;

-- DropTable
DROP TABLE `tasks`;
