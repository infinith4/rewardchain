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
