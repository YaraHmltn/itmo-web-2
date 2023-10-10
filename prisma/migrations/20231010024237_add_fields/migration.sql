/*
  Warnings:

  - A unique constraint covering the columns `[variety]` on the table `Frog` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `variety` to the `Frog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Frog" ADD COLUMN     "variety" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Frog_variety_key" ON "Frog"("variety");
