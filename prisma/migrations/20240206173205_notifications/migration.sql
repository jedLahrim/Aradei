-- AlterTable
ALTER TABLE `quote`
    MODIFY `notes` TEXT NOT NULL DEFAULT ('');

-- CreateTable
CREATE TABLE `notification`
(
    `id`        VARCHAR(30)  NOT NULL,
    `message`   TEXT         NOT NULL,
    `type`      VARCHAR(191) NOT NULL,
    `date`      DATETIME(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `isRead`    BOOLEAN      NOT NULL DEFAULT false,
    `bookingId` VARCHAR(30)  NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `emailtemplate`
(
    `id`          INTEGER      NOT NULL AUTO_INCREMENT,
    `name`        VARCHAR(191) NOT NULL,
    `signature`   VARCHAR(191) NULL,
    `headerImage` VARCHAR(191) NOT NULL,
    `linkWebsite` VARCHAR(191) NULL,
    `footerImage` VARCHAR(191) NOT NULL,
    `createdAt`   DATETIME(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `messagenotification`
(
    `id`              INTEGER      NOT NULL AUTO_INCREMENT,
    `name`            VARCHAR(191) NOT NULL,
    `subject`         VARCHAR(191) NOT NULL,
    `event`           VARCHAR(191) NOT NULL,
    `department`      VARCHAR(191) NOT NULL,
    `message`         TEXT         NOT NULL,
    `createdAt`       DATETIME(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `emailTemplateId` INTEGER      NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_NotificationToUserRole`
(
    `A` VARCHAR(30) NOT NULL,
    `B` INTEGER     NOT NULL,

    UNIQUE INDEX `_NotificationToUserRole_AB_unique` (`A`, `B`),
    INDEX `_NotificationToUserRole_B_index` (`B`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_NotificationToUserProfile`
(
    `A` VARCHAR(30) NOT NULL,
    `B` VARCHAR(30) NOT NULL,

    UNIQUE INDEX `_NotificationToUserProfile_AB_unique` (`A`, `B`),
    INDEX `_NotificationToUserProfile_B_index` (`B`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `notification`
    ADD CONSTRAINT `notification_bookingId_fkey` FOREIGN KEY (`bookingId`) REFERENCES `booking` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `messagenotification`
    ADD CONSTRAINT `messagenotification_emailTemplateId_fkey` FOREIGN KEY (`emailTemplateId`) REFERENCES `emailtemplate` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_NotificationToUserRole`
    ADD CONSTRAINT `_NotificationToUserRole_A_fkey` FOREIGN KEY (`A`) REFERENCES `notification` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_NotificationToUserRole`
    ADD CONSTRAINT `_NotificationToUserRole_B_fkey` FOREIGN KEY (`B`) REFERENCES `userrole` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_NotificationToUserProfile`
    ADD CONSTRAINT `_NotificationToUserProfile_A_fkey` FOREIGN KEY (`A`) REFERENCES `notification` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_NotificationToUserProfile`
    ADD CONSTRAINT `_NotificationToUserProfile_B_fkey` FOREIGN KEY (`B`) REFERENCES `userprofile` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
