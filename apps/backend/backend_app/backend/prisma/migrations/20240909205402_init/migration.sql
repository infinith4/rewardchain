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

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `fk_profiles_user_id_users_id` FOREIGN KEY (`id`) REFERENCES `profiles`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
