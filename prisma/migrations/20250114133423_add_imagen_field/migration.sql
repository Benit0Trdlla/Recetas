/*
  Warnings:

  - Made the column `descripcion` on table `receta` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ingredientes` on table `receta` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `usuarioreceta` DROP FOREIGN KEY `UsuarioReceta_id_receta_fkey`;

-- DropForeignKey
ALTER TABLE `usuarioreceta` DROP FOREIGN KEY `UsuarioReceta_id_usuario_fkey`;

-- DropIndex
DROP INDEX `UsuarioReceta_id_receta_fkey` ON `usuarioreceta`;

-- AlterTable
ALTER TABLE `receta` ADD COLUMN `imagen` VARCHAR(191) NULL,
    MODIFY `descripcion` VARCHAR(191) NOT NULL,
    MODIFY `ingredientes` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `UsuarioReceta` ADD CONSTRAINT `UsuarioReceta_id_usuario_fkey` FOREIGN KEY (`id_usuario`) REFERENCES `Usuario`(`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UsuarioReceta` ADD CONSTRAINT `UsuarioReceta_id_receta_fkey` FOREIGN KEY (`id_receta`) REFERENCES `Receta`(`id_receta`) ON DELETE CASCADE ON UPDATE CASCADE;
