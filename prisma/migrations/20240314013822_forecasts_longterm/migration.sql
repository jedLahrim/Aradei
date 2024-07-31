-- AlterTable
ALTER TABLE `quote`
    MODIFY `notes` TEXT NOT NULL DEFAULT ('');

-- CreateTable
CREATE TABLE `LongtermForecasts`
(
    `id`             VARCHAR(30) NOT NULL,
    `forecastId`     INTEGER     NULL,
    `retailCenterId` VARCHAR(30) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UnitsForecasts`
(
    `id`                       VARCHAR(30) NOT NULL,
    `longtermForecastsId`      VARCHAR(30) NULL,
    `unitId`                   VARCHAR(30) NOT NULL,
    `glaForecast`              VARCHAR(30) NULL,
    `terrasseForecast`         VARCHAR(30) NULL,
    `mezzanineForecast`        VARCHAR(30) NULL,
    `monthlyRentFirstYear`     VARCHAR(30) NULL,
    `monthlyRentSecondYear`    VARCHAR(30) NULL,
    `monthlyRentThirdYear`     VARCHAR(30) NULL,
    `yearlyRentFirstYear`      VARCHAR(30) NULL,
    `yearlyRentSecondYear`     VARCHAR(30) NULL,
    `yearlyRentThirdYear`      VARCHAR(30) NULL,
    `chargesM2Fonctionnement`  VARCHAR(30) NULL,
    `chargesM2Marketing`       VARCHAR(30) NULL,
    `chargesM2ChargesCommunes` VARCHAR(30) NULL,
    `chargesFonctionnement`    VARCHAR(30) NULL,
    `chargesMarketing`         VARCHAR(30) NULL,
    `chargesChargesCommunes`   VARCHAR(30) NULL,
    `franchiseFirstYear`       VARCHAR(30) NULL,
    `franchiseSecondYear`      VARCHAR(30) NULL,
    `franchiseThirdYear`       VARCHAR(30) NULL,
    `legalisation`             VARCHAR(30) NULL,
    `signature`                VARCHAR(30) NULL,
    `livraison`                VARCHAR(30) NULL,
    `travaux`                  VARCHAR(30) NULL,
    `loyer`                    VARCHAR(30) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `LongtermForecasts`
    ADD CONSTRAINT `LongtermForecasts_forecastId_fkey` FOREIGN KEY (`forecastId`) REFERENCES `Forecast` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LongtermForecasts`
    ADD CONSTRAINT `LongtermForecasts_retailCenterId_fkey` FOREIGN KEY (`retailCenterId`) REFERENCES `retailcenter` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UnitsForecasts`
    ADD CONSTRAINT `UnitsForecasts_longtermForecastsId_fkey` FOREIGN KEY (`longtermForecastsId`) REFERENCES `LongtermForecasts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UnitsForecasts`
    ADD CONSTRAINT `UnitsForecasts_unitId_fkey` FOREIGN KEY (`unitId`) REFERENCES `unit` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
