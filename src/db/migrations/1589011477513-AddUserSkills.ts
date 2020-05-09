import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUserSkills1589011477513 implements MigrationInterface {
    name = 'AddUserSkills1589011477513'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `users_skills_skills` (`usersId` int NOT NULL, `skillsCode` int NOT NULL, INDEX `IDX_b55ce7b62b1d8ad0b1f294c18d` (`usersId`), INDEX `IDX_dab786ff799065f238f18a3d43` (`skillsCode`), PRIMARY KEY (`usersId`, `skillsCode`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `users_skills_skills` ADD CONSTRAINT `FK_b55ce7b62b1d8ad0b1f294c18d4` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `users_skills_skills` ADD CONSTRAINT `FK_dab786ff799065f238f18a3d439` FOREIGN KEY (`skillsCode`) REFERENCES `skills`(`code`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users_skills_skills` DROP FOREIGN KEY `FK_dab786ff799065f238f18a3d439`", undefined);
        await queryRunner.query("ALTER TABLE `users_skills_skills` DROP FOREIGN KEY `FK_b55ce7b62b1d8ad0b1f294c18d4`", undefined);
        await queryRunner.query("DROP INDEX `IDX_dab786ff799065f238f18a3d43` ON `users_skills_skills`", undefined);
        await queryRunner.query("DROP INDEX `IDX_b55ce7b62b1d8ad0b1f294c18d` ON `users_skills_skills`", undefined);
        await queryRunner.query("DROP TABLE `users_skills_skills`", undefined);
    }

}
