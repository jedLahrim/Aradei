-- CreateTable
CREATE TABLE `client`
(
    `id`   VARCHAR(30)  NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `userprofile`
(
    `id`          VARCHAR(30)  NOT NULL,
    `email`       VARCHAR(191) NOT NULL,
    `password`    VARCHAR(191) NULL,
    `name`        VARCHAR(191) NOT NULL,
    `firstName`   VARCHAR(191) NOT NULL,
    `jobTitle`    VARCHAR(30)  NOT NULL DEFAULT 'employee',
    `picture`     VARCHAR(191) NOT NULL,
    `phone`       VARCHAR(191) NULL,
    `mobilePhone` VARCHAR(191) NULL,
    `createdAt`   DATETIME(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt`   DATETIME(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `roleId`      INTEGER      NOT NULL,

    UNIQUE INDEX `userprofile_email_key` (`email`),
    INDEX `UserProfile_roleId_fkey` (`roleId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usersetting`
(
    `id`     VARCHAR(30) NOT NULL,
    `name`   VARCHAR(30) NOT NULL,
    `active` BOOLEAN     NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `userrole`
(
    `id`   INTEGER      NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `company`
(
    `id`              VARCHAR(30)  NOT NULL,
    `name`            VARCHAR(191) NOT NULL,
    `logo`            VARCHAR(191) NULL,
    `address`         VARCHAR(191) NULL,
    `city`            VARCHAR(191) NULL,
    `region`          VARCHAR(191) NULL,
    `country`         VARCHAR(191) NULL,
    `zip`             VARCHAR(191) NULL,
    `phone`           VARCHAR(191) NOT NULL,
    `email`           VARCHAR(191) NOT NULL,
    `web`             VARCHAR(191) NULL,
    `linkedIn`        VARCHAR(191) NULL,
    `instragram`      VARCHAR(191) NULL,
    `type`            INTEGER      NOT NULL,
    `tva`             VARCHAR(191) NULL,
    `rc`              VARCHAR(191) NULL,
    `cityRC`          VARCHAR(191) NULL,
    `ice`             VARCHAR(191) NULL,
    `capital`         VARCHAR(191) NULL,
    `patente`         VARCHAR(191) NULL,
    `taxIF`           VARCHAR(191) NULL,
    `managerName`     VARCHAR(191) NULL,
    `managerTitle`    VARCHAR(191) NULL,
    `managerPosition` VARCHAR(191) NULL,
    `managerID`       VARCHAR(191) NULL,
    `mainColor`       VARCHAR(191) NULL,
    `dateFormat`      VARCHAR(191) NULL,
    `currency`        VARCHAR(191) NULL,
    `isValidated`     BOOLEAN      NOT NULL DEFAULT false,
    `status`          VARCHAR(191) NULL,
    `source`          VARCHAR(191) NULL     DEFAULT 'INTERNAL_FORM',
    `validatorId`     VARCHAR(191) NOT NULL DEFAULT '000000000000',
    `description`     TEXT         NULL,
    `creatorId`       VARCHAR(30)  NOT NULL,
    `createdAt`       DATETIME(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt`       DATETIME(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `companyGroupId`  VARCHAR(30)  NULL,
    `bgBanner`        VARCHAR(191) NULL,

    INDEX `Company_creatorId_fkey` (`creatorId`),
    INDEX `Company_companyGroupId_fkey` (`companyGroupId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `companygroup`
(
    `id`        VARCHAR(30)  NOT NULL,
    `name`      VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `request`
(
    `id`        VARCHAR(30) NOT NULL,
    `message`   TEXT        NULL,
    `companyId` VARCHAR(30) NULL,
    `contactId` VARCHAR(30) NULL,
    `brandId`   VARCHAR(30) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `isDone`    BOOLEAN     NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `prospect_request`
(
    `id`        VARCHAR(30) NOT NULL,
    `dateFrom`  DATETIME(3) NULL,
    `dateTo`    DATETIME(3) NULL,
    `companyId` VARCHAR(30) NULL,
    `contactId` VARCHAR(30) NULL,
    `unitId`    VARCHAR(30) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `brand`
(
    `id`          VARCHAR(30)  NOT NULL,
    `name`        VARCHAR(191) NOT NULL,
    `logo`        VARCHAR(191) NOT NULL,
    `description` TEXT         NOT NULL,
    `products`    TEXT         NOT NULL,
    `createdAt`   DATETIME(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `source`      VARCHAR(191) NULL     DEFAULT 'INTERNAL_FORM',
    `status`      VARCHAR(191) NULL     DEFAULT 'Pending',
    `website`     VARCHAR(191) NULL,
    `linkedin`    VARCHAR(191) NULL,
    `logoPlan`    VARCHAR(191) NULL,
    `bgBanner`    VARCHAR(191) NULL,
    `mixId`       INTEGER      NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contact`
(
    `id`         VARCHAR(30)  NOT NULL,
    `name`       VARCHAR(191) NOT NULL,
    `firstname`  VARCHAR(191) NOT NULL,
    `phone`      VARCHAR(191) NULL,
    `mobile`     VARCHAR(191) NULL,
    `email`      VARCHAR(191) NOT NULL,
    `cin`        VARCHAR(191) NULL,
    `creatorId`  VARCHAR(30)  NOT NULL,
    `createdAt`  DATETIME(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt`  DATETIME(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `hasAccount` BOOLEAN      NOT NULL DEFAULT false,
    `position`   VARCHAR(30)  NOT NULL DEFAULT '',
    `title`      VARCHAR(30)  NOT NULL DEFAULT '',
    `isArchived` BOOLEAN      NOT NULL DEFAULT false,
    `source`     VARCHAR(191) NULL     DEFAULT 'INTERNAL_FORM',

    INDEX `Contact_creatorId_fkey` (`creatorId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `retailcenter`
(
    `id`                   VARCHAR(30)  NOT NULL,
    `name`                 VARCHAR(50)  NOT NULL,
    `alias`                VARCHAR(50)  NULL,
    `address`              VARCHAR(191) NOT NULL,
    `zip`                  VARCHAR(191) NULL,
    `capital`              VARCHAR(191) NULL,
    `taxIF`                VARCHAR(50)  NULL,
    `patente`              VARCHAR(50)  NULL,
    `ice`                  VARCHAR(50)  NULL,
    `city`                 VARCHAR(50)  NOT NULL,
    `logo`                 VARCHAR(191) NOT NULL DEFAULT '/uploads/logos/soccoAlto.jpg',
    `country`              VARCHAR(50)  NOT NULL,
    `type`                 INTEGER      NOT NULL,
    `specialty`            INTEGER      NOT NULL,
    `description`          TEXT         NOT NULL,
    `ownerEntity`          VARCHAR(50)  NOT NULL,
    `headquarters`         VARCHAR(50)  NULL,
    `legalPersonTitle`     VARCHAR(5)   NULL,
    `legalPersonName`      VARCHAR(50)  NOT NULL,
    `legalPersonFirstname` VARCHAR(50)  NOT NULL,
    `legalPersonRC`        VARCHAR(20)  NOT NULL,
    `legalPersonPosition`  VARCHAR(20)  NULL,
    `bankName`             VARCHAR(20)  NULL,
    `bankIBAN`             VARCHAR(20)  NULL,
    `bankSWIFT`            VARCHAR(20)  NULL,
    `legalPersonCityRC`    VARCHAR(50)  NOT NULL,
    `flagShip`             VARCHAR(50)  NULL,
    `surface`              DOUBLE       NOT NULL,
    `openingYear`          INTEGER      NOT NULL,
    `parkingSpaces`        INTEGER      NULL,
    `annualVisitors`       INTEGER      NULL,
    `createdAt`            DATETIME(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt`            DATETIME(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `picture`              VARCHAR(191) NOT NULL DEFAULT '/uploads/images/asset_soccoalto.png',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `floor`
(
    `id`             VARCHAR(30)  NOT NULL,
    `name`           VARCHAR(191) NOT NULL,
    `retailCenterId` VARCHAR(191) NOT NULL,
    `svgBluePrint`   VARCHAR(191) NOT NULL,
    `createdAt`      DATETIME(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt`      DATETIME(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Floor_retailCenterId_fkey` (`retailCenterId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `feature`
(
    `id`    INTEGER      NOT NULL AUTO_INCREMENT,
    `alias` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `picture`
(
    `id`             VARCHAR(30)  NOT NULL,
    `filePath`       VARCHAR(191) NOT NULL,
    `unitId`         VARCHAR(191) NULL,
    `retailCenterId` VARCHAR(191) NULL,
    `brandId`        VARCHAR(30)  NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `unit`
(
    `id`                     VARCHAR(30)  NOT NULL,
    `alias`                  VARCHAR(191) NOT NULL,
    `unitId`                 VARCHAR(191) NOT NULL,
    `floorId`                VARCHAR(191) NOT NULL,
    `status`                 INTEGER      NOT NULL,
    `rentType`               INTEGER      NOT NULL,
    `mixId`                  INTEGER      NOT NULL,
    `surface`                DOUBLE       NULL,
    `mezzanine`              DOUBLE       NULL,
    `terrasse`               DOUBLE       NULL,
    `width`                  DOUBLE       NOT NULL,
    `depth`                  DOUBLE       NOT NULL,
    `maxHeight`              DOUBLE       NULL,
    `qty`                    DOUBLE       NULL,
    `measurementUnit`        VARCHAR(30)  NOT NULL DEFAULT 'meters',
    `facadeLength`           DOUBLE       NULL,
    `dependency`             BOOLEAN      NOT NULL DEFAULT false,
    `dayPrice`               DOUBLE       NULL,
    `weekPrice`              DOUBLE       NULL,
    `monthPrice`             DOUBLE       NULL,
    `sqMeterPrice`           DOUBLE       NULL,
    `sqMeterPriceSecondYear` DOUBLE       NULL,
    `sqMeterPriceThirdYear`  DOUBLE       NULL,
    `description`            TEXT         NOT NULL,
    `specialTerms`           TEXT         NULL,
    `mainPicture`            VARCHAR(191) NOT NULL DEFAULT '/uploads/unitDefault.jpg',
    `videoFormat`            VARCHAR(191) NULL,
    `videoLength`            VARCHAR(191) NULL,
    `isGroup`                BOOLEAN      NOT NULL DEFAULT false,
    `unitGroupId`            VARCHAR(30)  NULL,
    `categoryId`             INTEGER      NULL     DEFAULT 3,

    INDEX `Unit_floorId_fkey` (`floorId`),
    INDEX `Unit_mixId_fkey` (`mixId`),
    INDEX `Unit_categoryId_fkey` (`categoryId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `category`
(
    `id`   INTEGER     NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `unitgroup`
(
    `id` VARCHAR(30) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `speciality`
(
    `id`    INTEGER     NOT NULL AUTO_INCREMENT,
    `alias` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mix_category`
(
    `id`    INTEGER     NOT NULL AUTO_INCREMENT,
    `alias` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mix`
(
    `id`            INTEGER     NOT NULL AUTO_INCREMENT,
    `alias`         VARCHAR(50) NOT NULL,
    `mixCategoryId` INTEGER     NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `document`
(
    `id`              VARCHAR(30)  NOT NULL,
    `name`            VARCHAR(191) NULL,
    `label`           VARCHAR(191) NULL,
    `filePath`        VARCHAR(191) NOT NULL,
    `type`            VARCHAR(191) NOT NULL,
    `dataObj`         TEXT         NULL,
    `userId`          VARCHAR(30)  NOT NULL,
    `unitId`          VARCHAR(191) NULL,
    `companyId`       VARCHAR(191) NULL,
    `retailCenterId`  VARCHAR(191) NULL,
    `floorId`         VARCHAR(191) NULL,
    `needsValidation` BOOLEAN      NULL     DEFAULT true,
    `isAccepted`      BOOLEAN      NULL     DEFAULT false,
    `isValidated`     BOOLEAN      NULL     DEFAULT false,
    `sent`            BOOLEAN      NULL     DEFAULT false,
    `sentAt`          DATETIME(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdAt`       DATETIME(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt`       DATETIME(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `bookingId`       VARCHAR(30)  NULL,
    `brandId`         VARCHAR(30)  NULL,

    INDEX `Document_userId_fkey` (`userId`),
    INDEX `Document_bookingId_fkey` (`bookingId`),
    INDEX `Document_companyId_fkey` (`companyId`),
    INDEX `Document_floorId_fkey` (`floorId`),
    INDEX `Document_retailCenterId_fkey` (`retailCenterId`),
    INDEX `Document_unitId_fkey` (`unitId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `page`
(
    `id`         VARCHAR(30)  NOT NULL,
    `content`    TEXT         NOT NULL,
    `documentId` VARCHAR(191) NOT NULL,
    `createdAt`  DATETIME(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt`  DATETIME(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Page_documentId_fkey` (`documentId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `validation`
(
    `id`              VARCHAR(30) NOT NULL,
    `kindId`          INTEGER     NOT NULL,
    `bookingId`       VARCHAR(30) NULL,
    `documentId`      VARCHAR(30) NULL,
    `userProfileId`   VARCHAR(30) NOT NULL,
    `isComplete`      BOOLEAN     NOT NULL DEFAULT false,
    `createdAt`       DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt`       DATETIME(3) NULL,
    `mediaProposalId` VARCHAR(30) NULL,

    UNIQUE INDEX `validation_documentId_key` (`documentId`),
    UNIQUE INDEX `validation_mediaProposalId_key` (`mediaProposalId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `validationkind`
(
    `id`          INTEGER      NOT NULL AUTO_INCREMENT,
    `alias`       VARCHAR(191) NOT NULL,
    `isAutomated` BOOLEAN      NOT NULL,
    `isOverride`  BOOLEAN      NOT NULL,
    `isFinal`     BOOLEAN      NOT NULL,
    `isSpecialty` BOOLEAN      NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `booking`
(
    `id`                  VARCHAR(30)  NOT NULL,
    `creatorId`           VARCHAR(30)  NOT NULL,
    `contactId`           VARCHAR(191) NOT NULL,
    `dateFrom`            DATE         NOT NULL,
    `dateTo`              DATE         NOT NULL,
    `notes`               TEXT         NULL,
    `type`                VARCHAR(30)  NOT NULL,
    `proposalSent`        BOOLEAN      NOT NULL DEFAULT false,
    `proposalSentAt`      DATETIME(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `contractId`          VARCHAR(191) NULL,
    `prospectUserId`      VARCHAR(30)  NULL,
    `status`              INTEGER      NOT NULL DEFAULT 1,
    `createdAt`           DATETIME(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `contractComplete`    BOOLEAN      NOT NULL DEFAULT false,
    `contractCompletedAt` DATE         NULL,
    `signedAt`            DATE         NULL,
    `validatedAt`         DATETIME(3)  NULL     DEFAULT CURRENT_TIMESTAMP(3),
    `total`               DOUBLE       NULL,
    `companyId`           VARCHAR(30)  NOT NULL,
    `brandId`             VARCHAR(30)  NOT NULL,

    UNIQUE INDEX `booking_contractId_key` (`contractId`),
    INDEX `Booking_creatorId_fkey` (`creatorId`),
    INDEX `Booking_contactId_fkey` (`contactId`),
    INDEX `Booking_companyId_fkey` (`companyId`),
    INDEX `Booking_brandId_fkey` (`brandId`),
    INDEX `Booking_prospectUserId_fkey` (`prospectUserId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `quote`
(
    `id`          VARCHAR(30)  NOT NULL,
    `status`      INTEGER      NOT NULL DEFAULT 1,
    `isAccepted`  BOOLEAN      NOT NULL DEFAULT false,
    `isValidated` BOOLEAN      NOT NULL DEFAULT false,
    `notes`       TEXT         NOT NULL DEFAULT (''),
    `total`       DOUBLE       NOT NULL,
    `creatorId`   VARCHAR(191) NOT NULL,
    `docId`       VARCHAR(30)  NULL,
    `createdAt`   DATETIME(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `sentAt`      DATETIME(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `quote_docId_key` (`docId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `proposaledit`
(
    `id`          VARCHAR(30)  NOT NULL,
    `bookingId`   VARCHAR(30)  NOT NULL,
    `unitId`      VARCHAR(30)  NOT NULL,
    `unitSurface` DOUBLE       NOT NULL,
    `unitPrice`   DOUBLE       NOT NULL,
    `creatorId`   VARCHAR(191) NOT NULL,
    `createdAt`   DATETIME(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `quoteedit`
(
    `id`          VARCHAR(30)  NOT NULL,
    `quoteId`     VARCHAR(30)  NULL,
    `bookingId`   VARCHAR(30)  NOT NULL,
    `unitId`      VARCHAR(30)  NOT NULL,
    `unitSurface` DOUBLE       NOT NULL,
    `unitPrice`   DOUBLE       NOT NULL,
    `dateFrom`    DATE         NULL,
    `dateTo`      DATE         NULL,
    `creatorId`   VARCHAR(191) NOT NULL,
    `createdAt`   DATETIME(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `talk`
(
    `id`         VARCHAR(30)  NOT NULL,
    `fromId`     VARCHAR(30)  NOT NULL,
    `toId`       VARCHAR(30)  NULL,
    `content`    TEXT         NOT NULL,
    `bookingId`  VARCHAR(191) NOT NULL,
    `documentId` VARCHAR(191) NULL,
    `createdAt`  DATETIME(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Talk_bookingId_fkey` (`bookingId`),
    INDEX `Talk_documentId_fkey` (`documentId`),
    INDEX `Talk_fromId_fkey` (`fromId`),
    INDEX `Talk_toId_fkey` (`toId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `history`
(
    `id`                VARCHAR(30)  NOT NULL,
    `action`            VARCHAR(191) NOT NULL,
    `creatorId`         VARCHAR(191) NOT NULL,
    `companyHistoryId`  VARCHAR(191) NULL,
    `retailCenterId`    VARCHAR(191) NULL,
    `contactHistoryId`  VARCHAR(191) NULL,
    `brandHistoryId`    VARCHAR(191) NULL,
    `bookingHistoryId`  VARCHAR(191) NULL,
    `documentHistoryId` VARCHAR(191) NULL,
    `unitHistoryId`     VARCHAR(191) NULL,
    `createdAt`         DATETIME(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `History_bookingHistoryId_fkey` (`bookingHistoryId`),
    INDEX `History_companyHistoryId_fkey` (`companyHistoryId`),
    INDEX `History_contactHistoryId_fkey` (`contactHistoryId`),
    INDEX `History_creatorId_fkey` (`creatorId`),
    INDEX `History_documentHistoryId_fkey` (`documentHistoryId`),
    INDEX `History_unitHistoryId_fkey` (`unitHistoryId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `media`
(
    `id`              VARCHAR(30)  NOT NULL,
    `mediaProposalId` VARCHAR(191) NULL,
    `filePath`        VARCHAR(191) NOT NULL,
    `fileType`        VARCHAR(191) NOT NULL,
    `fileOrder`       INTEGER      NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mediaproposal`
(
    `id`        VARCHAR(30)  NOT NULL,
    `bookingId` VARCHAR(30)  NOT NULL,
    `unitId`    VARCHAR(191) NOT NULL,
    `creatorId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `commercialdoc`
(
    `id`             VARCHAR(30)  NOT NULL,
    `floorId`        VARCHAR(30)  NULL,
    `retailCenterId` VARCHAR(30)  NULL,
    `filePath`       VARCHAR(191) NOT NULL,
    `name`           VARCHAR(191) NOT NULL,
    `createdAt`      DATETIME(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt`      DATETIME(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `CommercialDoc_floorId_fkey` (`floorId`),
    INDEX `CommercialDoc_retailCenterId_fkey` (`retailCenterId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_UserRoleToValidationKind`
(
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_UserRoleToValidationKind_AB_unique` (`A`, `B`),
    INDEX `_UserRoleToValidationKind_B_index` (`B`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_owners`
(
    `A` VARCHAR(30) NOT NULL,
    `B` VARCHAR(30) NOT NULL,

    UNIQUE INDEX `_owners_AB_unique` (`A`, `B`),
    INDEX `_owners_B_index` (`B`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_BrandToCompany`
(
    `A` VARCHAR(30) NOT NULL,
    `B` VARCHAR(30) NOT NULL,

    UNIQUE INDEX `_BrandToCompany_AB_unique` (`A`, `B`),
    INDEX `_BrandToCompany_B_index` (`B`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_BrandToContact`
(
    `A` VARCHAR(30) NOT NULL,
    `B` VARCHAR(30) NOT NULL,

    UNIQUE INDEX `_BrandToContact_AB_unique` (`A`, `B`),
    INDEX `_BrandToContact_B_index` (`B`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_FeatureToUnit`
(
    `A` INTEGER     NOT NULL,
    `B` VARCHAR(30) NOT NULL,

    UNIQUE INDEX `_FeatureToUnit_AB_unique` (`A`, `B`),
    INDEX `_FeatureToUnit_B_index` (`B`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_SpecialityToUnit`
(
    `A` INTEGER     NOT NULL,
    `B` VARCHAR(30) NOT NULL,

    UNIQUE INDEX `_SpecialityToUnit_AB_unique` (`A`, `B`),
    INDEX `_SpecialityToUnit_B_index` (`B`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_documentValidators`
(
    `A` VARCHAR(30) NOT NULL,
    `B` VARCHAR(30) NOT NULL,

    UNIQUE INDEX `_documentValidators_AB_unique` (`A`, `B`),
    INDEX `_documentValidators_B_index` (`B`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_bookingsU`
(
    `A` VARCHAR(30) NOT NULL,
    `B` VARCHAR(30) NOT NULL,

    UNIQUE INDEX `_bookingsU_AB_unique` (`A`, `B`),
    INDEX `_bookingsU_B_index` (`B`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_validators`
(
    `A` VARCHAR(30) NOT NULL,
    `B` VARCHAR(30) NOT NULL,

    UNIQUE INDEX `_validators_AB_unique` (`A`, `B`),
    INDEX `_validators_B_index` (`B`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `userprofile`
    ADD CONSTRAINT `userprofile_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `userrole` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `usersetting`
    ADD CONSTRAINT `usersetting_id_fkey` FOREIGN KEY (`id`) REFERENCES `userprofile` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `company`
    ADD CONSTRAINT `company_validatorId_fkey` FOREIGN KEY (`validatorId`) REFERENCES `userprofile` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `company`
    ADD CONSTRAINT `company_creatorId_fkey` FOREIGN KEY (`creatorId`) REFERENCES `userprofile` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `company`
    ADD CONSTRAINT `company_companyGroupId_fkey` FOREIGN KEY (`companyGroupId`) REFERENCES `companygroup` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `request`
    ADD CONSTRAINT `request_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `company` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `request`
    ADD CONSTRAINT `request_contactId_fkey` FOREIGN KEY (`contactId`) REFERENCES `contact` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `request`
    ADD CONSTRAINT `request_brandId_fkey` FOREIGN KEY (`brandId`) REFERENCES `brand` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `prospect_request`
    ADD CONSTRAINT `prospect_request_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `company` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `prospect_request`
    ADD CONSTRAINT `prospect_request_contactId_fkey` FOREIGN KEY (`contactId`) REFERENCES `contact` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `prospect_request`
    ADD CONSTRAINT `prospect_request_unitId_fkey` FOREIGN KEY (`unitId`) REFERENCES `unit` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `brand`
    ADD CONSTRAINT `brand_mixId_fkey` FOREIGN KEY (`mixId`) REFERENCES `mix` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `contact`
    ADD CONSTRAINT `contact_creatorId_fkey` FOREIGN KEY (`creatorId`) REFERENCES `userprofile` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `floor`
    ADD CONSTRAINT `floor_retailCenterId_fkey` FOREIGN KEY (`retailCenterId`) REFERENCES `retailcenter` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `picture`
    ADD CONSTRAINT `picture_unitId_fkey` FOREIGN KEY (`unitId`) REFERENCES `unit` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `picture`
    ADD CONSTRAINT `picture_retailCenterId_fkey` FOREIGN KEY (`retailCenterId`) REFERENCES `retailcenter` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `picture`
    ADD CONSTRAINT `picture_brandId_fkey` FOREIGN KEY (`brandId`) REFERENCES `brand` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `unit`
    ADD CONSTRAINT `unit_floorId_fkey` FOREIGN KEY (`floorId`) REFERENCES `floor` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `unit`
    ADD CONSTRAINT `unit_mixId_fkey` FOREIGN KEY (`mixId`) REFERENCES `mix` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `unit`
    ADD CONSTRAINT `unit_unitGroupId_fkey` FOREIGN KEY (`unitGroupId`) REFERENCES `unitgroup` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `unit`
    ADD CONSTRAINT `unit_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mix`
    ADD CONSTRAINT `mix_mixCategoryId_fkey` FOREIGN KEY (`mixCategoryId`) REFERENCES `mix_category` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `document`
    ADD CONSTRAINT `document_bookingId_fkey` FOREIGN KEY (`bookingId`) REFERENCES `booking` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `document`
    ADD CONSTRAINT `document_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `company` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `document`
    ADD CONSTRAINT `document_floorId_fkey` FOREIGN KEY (`floorId`) REFERENCES `floor` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `document`
    ADD CONSTRAINT `document_retailCenterId_fkey` FOREIGN KEY (`retailCenterId`) REFERENCES `retailcenter` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `document`
    ADD CONSTRAINT `document_unitId_fkey` FOREIGN KEY (`unitId`) REFERENCES `unit` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `document`
    ADD CONSTRAINT `document_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `userprofile` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `document`
    ADD CONSTRAINT `document_brandId_fkey` FOREIGN KEY (`brandId`) REFERENCES `brand` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `page`
    ADD CONSTRAINT `page_documentId_fkey` FOREIGN KEY (`documentId`) REFERENCES `document` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `validation`
    ADD CONSTRAINT `validation_kindId_fkey` FOREIGN KEY (`kindId`) REFERENCES `validationkind` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `validation`
    ADD CONSTRAINT `validation_userProfileId_fkey` FOREIGN KEY (`userProfileId`) REFERENCES `userprofile` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `validation`
    ADD CONSTRAINT `validation_bookingId_fkey` FOREIGN KEY (`bookingId`) REFERENCES `booking` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `validation`
    ADD CONSTRAINT `validation_documentId_fkey` FOREIGN KEY (`documentId`) REFERENCES `document` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `validation`
    ADD CONSTRAINT `validation_mediaProposalId_fkey` FOREIGN KEY (`mediaProposalId`) REFERENCES `mediaproposal` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `booking`
    ADD CONSTRAINT `booking_contactId_fkey` FOREIGN KEY (`contactId`) REFERENCES `contact` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `booking`
    ADD CONSTRAINT `booking_contractId_fkey` FOREIGN KEY (`contractId`) REFERENCES `document` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `booking`
    ADD CONSTRAINT `booking_creatorId_fkey` FOREIGN KEY (`creatorId`) REFERENCES `userprofile` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `booking`
    ADD CONSTRAINT `booking_prospectUserId_fkey` FOREIGN KEY (`prospectUserId`) REFERENCES `userprofile` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `booking`
    ADD CONSTRAINT `booking_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `company` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `booking`
    ADD CONSTRAINT `booking_brandId_fkey` FOREIGN KEY (`brandId`) REFERENCES `brand` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quote`
    ADD CONSTRAINT `quote_creatorId_fkey` FOREIGN KEY (`creatorId`) REFERENCES `userprofile` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quote`
    ADD CONSTRAINT `quote_docId_fkey` FOREIGN KEY (`docId`) REFERENCES `document` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `proposaledit`
    ADD CONSTRAINT `proposaledit_bookingId_fkey` FOREIGN KEY (`bookingId`) REFERENCES `booking` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `proposaledit`
    ADD CONSTRAINT `proposaledit_creatorId_fkey` FOREIGN KEY (`creatorId`) REFERENCES `userprofile` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quoteedit`
    ADD CONSTRAINT `quoteedit_quoteId_fkey` FOREIGN KEY (`quoteId`) REFERENCES `quote` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quoteedit`
    ADD CONSTRAINT `quoteedit_bookingId_fkey` FOREIGN KEY (`bookingId`) REFERENCES `booking` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quoteedit`
    ADD CONSTRAINT `quoteedit_creatorId_fkey` FOREIGN KEY (`creatorId`) REFERENCES `userprofile` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `talk`
    ADD CONSTRAINT `talk_bookingId_fkey` FOREIGN KEY (`bookingId`) REFERENCES `booking` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `talk`
    ADD CONSTRAINT `talk_documentId_fkey` FOREIGN KEY (`documentId`) REFERENCES `document` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `talk`
    ADD CONSTRAINT `talk_fromId_fkey` FOREIGN KEY (`fromId`) REFERENCES `userprofile` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `talk`
    ADD CONSTRAINT `talk_toId_fkey` FOREIGN KEY (`toId`) REFERENCES `userprofile` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `history`
    ADD CONSTRAINT `history_creatorId_fkey` FOREIGN KEY (`creatorId`) REFERENCES `userprofile` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `history`
    ADD CONSTRAINT `history_companyHistoryId_fkey` FOREIGN KEY (`companyHistoryId`) REFERENCES `company` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `history`
    ADD CONSTRAINT `history_retailCenterId_fkey` FOREIGN KEY (`retailCenterId`) REFERENCES `retailcenter` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `history`
    ADD CONSTRAINT `history_contactHistoryId_fkey` FOREIGN KEY (`contactHistoryId`) REFERENCES `contact` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `history`
    ADD CONSTRAINT `history_brandHistoryId_fkey` FOREIGN KEY (`brandHistoryId`) REFERENCES `brand` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `history`
    ADD CONSTRAINT `history_bookingHistoryId_fkey` FOREIGN KEY (`bookingHistoryId`) REFERENCES `booking` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `history`
    ADD CONSTRAINT `history_documentHistoryId_fkey` FOREIGN KEY (`documentHistoryId`) REFERENCES `document` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `history`
    ADD CONSTRAINT `history_unitHistoryId_fkey` FOREIGN KEY (`unitHistoryId`) REFERENCES `unit` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `media`
    ADD CONSTRAINT `media_mediaProposalId_fkey` FOREIGN KEY (`mediaProposalId`) REFERENCES `mediaproposal` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mediaproposal`
    ADD CONSTRAINT `mediaproposal_bookingId_fkey` FOREIGN KEY (`bookingId`) REFERENCES `booking` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mediaproposal`
    ADD CONSTRAINT `mediaproposal_unitId_fkey` FOREIGN KEY (`unitId`) REFERENCES `unit` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mediaproposal`
    ADD CONSTRAINT `mediaproposal_creatorId_fkey` FOREIGN KEY (`creatorId`) REFERENCES `userprofile` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `commercialdoc`
    ADD CONSTRAINT `commercialdoc_floorId_fkey` FOREIGN KEY (`floorId`) REFERENCES `floor` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `commercialdoc`
    ADD CONSTRAINT `commercialdoc_retailCenterId_fkey` FOREIGN KEY (`retailCenterId`) REFERENCES `retailcenter` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_UserRoleToValidationKind`
    ADD CONSTRAINT `_UserRoleToValidationKind_A_fkey` FOREIGN KEY (`A`) REFERENCES `userrole` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_UserRoleToValidationKind`
    ADD CONSTRAINT `_UserRoleToValidationKind_B_fkey` FOREIGN KEY (`B`) REFERENCES `validationkind` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_owners`
    ADD CONSTRAINT `_owners_A_fkey` FOREIGN KEY (`A`) REFERENCES `company` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_owners`
    ADD CONSTRAINT `_owners_B_fkey` FOREIGN KEY (`B`) REFERENCES `userprofile` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BrandToCompany`
    ADD CONSTRAINT `_BrandToCompany_A_fkey` FOREIGN KEY (`A`) REFERENCES `brand` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BrandToCompany`
    ADD CONSTRAINT `_BrandToCompany_B_fkey` FOREIGN KEY (`B`) REFERENCES `company` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BrandToContact`
    ADD CONSTRAINT `_BrandToContact_A_fkey` FOREIGN KEY (`A`) REFERENCES `brand` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BrandToContact`
    ADD CONSTRAINT `_BrandToContact_B_fkey` FOREIGN KEY (`B`) REFERENCES `contact` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FeatureToUnit`
    ADD CONSTRAINT `_FeatureToUnit_A_fkey` FOREIGN KEY (`A`) REFERENCES `feature` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FeatureToUnit`
    ADD CONSTRAINT `_FeatureToUnit_B_fkey` FOREIGN KEY (`B`) REFERENCES `unit` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_SpecialityToUnit`
    ADD CONSTRAINT `_SpecialityToUnit_A_fkey` FOREIGN KEY (`A`) REFERENCES `speciality` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_SpecialityToUnit`
    ADD CONSTRAINT `_SpecialityToUnit_B_fkey` FOREIGN KEY (`B`) REFERENCES `unit` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_documentValidators`
    ADD CONSTRAINT `_documentValidators_A_fkey` FOREIGN KEY (`A`) REFERENCES `document` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_documentValidators`
    ADD CONSTRAINT `_documentValidators_B_fkey` FOREIGN KEY (`B`) REFERENCES `userprofile` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_bookingsU`
    ADD CONSTRAINT `_bookingsU_A_fkey` FOREIGN KEY (`A`) REFERENCES `booking` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_bookingsU`
    ADD CONSTRAINT `_bookingsU_B_fkey` FOREIGN KEY (`B`) REFERENCES `unit` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_validators`
    ADD CONSTRAINT `_validators_A_fkey` FOREIGN KEY (`A`) REFERENCES `booking` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_validators`
    ADD CONSTRAINT `_validators_B_fkey` FOREIGN KEY (`B`) REFERENCES `userprofile` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
