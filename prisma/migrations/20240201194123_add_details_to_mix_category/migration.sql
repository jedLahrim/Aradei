-- AlterTable
ALTER TABLE `mix_category`
    ADD COLUMN `color`     VARCHAR(191) NULL,
    ADD COLUMN `i18nAlias` VARCHAR(191) NULL,
    ADD COLUMN `icon`      VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `quote`
    MODIFY `notes` TEXT NOT NULL DEFAULT ('');
