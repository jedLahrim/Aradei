-- AlterTable
ALTER TABLE `UnitsForecasts`
    ADD COLUMN `fraisRTM`           VARCHAR(30) NULL,
    ADD COLUMN `marketingOuverture` VARCHAR(30) NULL,
    ADD COLUMN `slMedia`            VARCHAR(30) NULL;

-- AlterTable
ALTER TABLE `quote`
    MODIFY `notes` TEXT NOT NULL DEFAULT ('');
