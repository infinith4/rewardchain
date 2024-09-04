CREATE TABLE `tasks` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `user_id` integer NOT NULL COMMENT 'on-chain',
  `status` ENUM ('new_task', 'processing', 'review', 'completed', 'pending', 'cancelled') COMMENT 'on-chain',
  `title` varchar(255) COMMENT 'on-chain',
  `description` varchar(255) COMMENT 'on-chain',
  `supplier_id` integer NOT NULL COMMENT 'on-chain',
  `comment_id` integer COMMENT 'on-chain',
  `due_date` datetime COMMENT 'on-chain',
  `created_at` datetime NOT NULL DEFAULT (now()),
  `updated_at` datetime
);

CREATE TABLE `task_comments` (
  `id` integer PRIMARY KEY AUTO_INCREMENT COMMENT 'on-chain',
  `task_id` integer NOT NULL COMMENT 'on-chain',
  `coomment` varchar(255) COMMENT 'on-chain',
  `created_at` datetime NOT NULL DEFAULT (now()),
  `updated_at` datetime
);

CREATE TABLE `task_items` (
  `id` integer PRIMARY KEY AUTO_INCREMENT COMMENT 'on-chain',
  `task_id` integer NOT NULL COMMENT 'on-chain',
  `user_id` integer NOT NULL COMMENT 'on-chain',
  `status` ENUM ('new_task', 'processing', 'review', 'completed', 'pending', 'cancelled') COMMENT 'on-chain',
  `title` varchar(255) COMMENT 'on-chain',
  `description` varchar(255) COMMENT 'on-chain',
  `supplier_id` integer NOT NULL COMMENT 'on-chain',
  `comment_id` integer COMMENT 'on-chain',
  `due_date` datetime COMMENT 'on-chain',
  `created_at` datetime NOT NULL DEFAULT (now()),
  `updated_at` datetime
);

CREATE TABLE `users` (
  `id` integer PRIMARY KEY,
  `user_type` ENUM ('client', 'supplier', 'arbitrator', 'patron'),
  `first_name` varchar(255),
  `last_name` varchar(255),
  `username` varchar(255) UNIQUE NOT NULL,
  `email` varchar(255) UNIQUE NOT NULL,
  `hashed_password` varchar(255) COMMENT 'Hashed password',
  `avatar_url` varchar(255),
  `last_login_at` datetime NOT NULL DEFAULT (now()),
  `created_at` datetime NOT NULL DEFAULT (now()),
  `updated_at` datetime
);

CREATE TABLE `profiles` (
  `id` integer PRIMARY KEY,
  `user_id` integer,
  `specification` varchar(255),
  `bio` varchar(255),
  `website` varchar(255),
  `email` varchar(255),
  `created_at` datetime NOT NULL DEFAULT (now()),
  `updated_at` datetime
);

CREATE TABLE `disputations` (
  `id` integer PRIMARY KEY COMMENT 'on-chain',
  `task_id` integer COMMENT 'on-chain',
  `status` ENUM ('dispute', 'processing', 'validated', 'completed') COMMENT 'on-chain',
  `title` varchar(255) COMMENT 'on-chain',
  `description` varchar(255) COMMENT 'on-chain',
  `user_id` integer NOT NULL COMMENT 'on-chain',
  `arbitrator_id` integer COMMENT 'on-chain',
  `created_at` datetime NOT NULL DEFAULT (now()),
  `updated_at` datetime
);

ALTER TABLE `task_comments` ADD CONSTRAINT `fk_task_comments_id_tasks_id` FOREIGN KEY (`task_id`) REFERENCES `tasks` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE `task_items` ADD CONSTRAINT `fk_task_items_id_tasks_id` FOREIGN KEY (`task_id`) REFERENCES `tasks` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE `users` ADD CONSTRAINT `fk_profiles_user_id_users_id` FOREIGN KEY (`id`) REFERENCES `profiles` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE `tasks` ADD CONSTRAINT `fk_disputations_task_id_tasks_id` FOREIGN KEY (`id`) REFERENCES `disputations` (`task_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE `tasks` ADD CONSTRAINT `fk_tasks_id_users_id` FOREIGN KEY (`id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

CREATE UNIQUE INDEX `ui_tasks_id` ON `tasks` (`id`);

CREATE INDEX `idx_task_items_comment_id` ON `tasks` (`comment_id`);

CREATE INDEX `idx_task_comments_task_id` ON `task_comments` (`task_id`);

CREATE UNIQUE INDEX `ui_task_items_id` ON `task_items` (`id`);

CREATE INDEX `idx_task_items_task_id` ON `task_items` (`task_id`);

CREATE UNIQUE INDEX `ui_users_id` ON `users` (`id`);

CREATE UNIQUE INDEX `ui_profiles_id` ON `profiles` (`id`);

CREATE UNIQUE INDEX `idx_profiles_user_id` ON `profiles` (`user_id`);

CREATE UNIQUE INDEX `ui_disputations_id` ON `disputations` (`id`);

CREATE INDEX `idx_disputations_user_id` ON `disputations` (`user_id`);

ALTER TABLE `users` COMMENT = 'table \'users\' contains user information';
