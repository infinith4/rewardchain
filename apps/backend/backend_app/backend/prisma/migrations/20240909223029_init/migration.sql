-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL,
    `user_type` ENUM('client', 'supplier', 'arbitrator', 'patron') NULL,
    `first_name` VARCHAR(255) NULL,
    `last_name` VARCHAR(255) NULL,
    `username` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `hashed_password` VARCHAR(255) NULL,
    `avatar_url` VARCHAR(255) NULL,
    `last_login_at` DATETIME(0) NOT NULL DEFAULT (now()),
    `created_at` DATETIME(0) NOT NULL DEFAULT (now()),
    `updated_at` DATETIME(0) NULL,

    UNIQUE INDEX `ui_users_id`(`id`),
    UNIQUE INDEX `username`(`username`),
    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `profiles` (
    `id` INTEGER NOT NULL,
    `user_id` INTEGER NULL,
    `specification` VARCHAR(255) NULL,
    `bio` VARCHAR(255) NULL,
    `website` VARCHAR(255) NULL,
    `email` VARCHAR(255) NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT (now()),
    `updated_at` DATETIME(0) NULL,

    UNIQUE INDEX `ui_profiles_id`(`id`),
    UNIQUE INDEX `idx_profiles_user_id`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `task_comments` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `task_id` INTEGER NOT NULL,
    `comment` VARCHAR(255) NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT (now()),
    `updated_at` DATETIME(0) NULL,

    INDEX `idx_task_comments_task_id`(`task_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `task_items` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `task_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `status` ENUM('new_task', 'processing', 'review', 'completed', 'pending', 'cancelled') NULL,
    `title` VARCHAR(255) NULL,
    `description` VARCHAR(255) NULL,
    `supplier_id` INTEGER NOT NULL,
    `due_date` DATETIME(0) NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT (now()),
    `updated_at` DATETIME(0) NULL,

    UNIQUE INDEX `ui_task_items_id`(`id`),
    INDEX `idx_task_items_task_id`(`task_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tasks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `status` ENUM('new_task', 'processing', 'review', 'completed', 'pending', 'cancelled') NULL,
    `title` VARCHAR(255) NULL,
    `description` VARCHAR(255) NULL,
    `supplier_id` INTEGER NOT NULL,
    `due_date` DATETIME(0) NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT (now()),
    `updated_at` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `disputations` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `task_id` INTEGER NOT NULL,
    `status` ENUM('dispute', 'processing', 'validated', 'completed') NULL,
    `title` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NULL,
    `user_id` INTEGER NOT NULL,
    `arbitrator_id` INTEGER NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT (now()),
    `updated_at` DATETIME(0) NULL,

    UNIQUE INDEX `ui_disputations_id`(`id`),
    INDEX `idx_disputations_task_id`(`task_id`),
    INDEX `idx_disputations_user_id`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `fk_profiles_user_id_users_id` FOREIGN KEY (`id`) REFERENCES `profiles`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `task_comments` ADD CONSTRAINT `fk_task_comments_id_tasks_id` FOREIGN KEY (`task_id`) REFERENCES `tasks`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `task_items` ADD CONSTRAINT `fk_task_items_id_tasks_id` FOREIGN KEY (`task_id`) REFERENCES `tasks`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tasks` ADD CONSTRAINT `fk_tasks_id_users_id` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `disputations` ADD CONSTRAINT `fk_disputations_task_id_tasks_id` FOREIGN KEY (`task_id`) REFERENCES `tasks`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
