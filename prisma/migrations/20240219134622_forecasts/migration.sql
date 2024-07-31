-- AlterTable
ALTER TABLE `quote`
    MODIFY `notes` TEXT NOT NULL DEFAULT ('');

-- CreateTable
CREATE TABLE `Forecast`
(
    `id`        INTEGER     NOT NULL AUTO_INCREMENT,
    `name`      VARCHAR(50) NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `year`      DATE        NULL,
    `type`      VARCHAR(50) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `monthlyForecasts`
(
    `id`             VARCHAR(30) NOT NULL,
    `january`        VARCHAR(50) NULL,
    `february`       VARCHAR(50) NULL,
    `march`          VARCHAR(50) NULL,
    `april`          VARCHAR(50) NULL,
    `may`            VARCHAR(50) NULL,
    `june`           VARCHAR(50) NULL,
    `july`           VARCHAR(50) NULL,
    `august`         VARCHAR(50) NULL,
    `september`      VARCHAR(50) NULL,
    `october`        VARCHAR(50) NULL,
    `november`       VARCHAR(50) NULL,
    `december`       VARCHAR(50) NULL,
    `forecastId`     INTEGER     NULL,
    `retailCenterId` VARCHAR(30) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `monthlyForecasts`
    ADD CONSTRAINT `monthlyForecasts_retailCenterId_fkey` FOREIGN KEY (`retailCenterId`) REFERENCES `retailcenter` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `monthlyForecasts`
    ADD CONSTRAINT `monthlyForecasts_forecastId_fkey` FOREIGN KEY (`forecastId`) REFERENCES `Forecast` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
