import {MigrationInterface, QueryRunner} from "typeorm";

export class RenameUserSkills1589041469709 implements MigrationInterface {
    name = 'RenameUserSkills1589041469709'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `users_skills` (`user_id` int NOT NULL, `skill_code` int NOT NULL, INDEX `IDX_aa700512dc7cfdf555880af554` (`user_id`), INDEX `IDX_d95d80b59fdeb030cad26bcbc4` (`skill_code`), PRIMARY KEY (`user_id`, `skill_code`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `users_skills` ADD CONSTRAINT `FK_aa700512dc7cfdf555880af5541` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `users_skills` ADD CONSTRAINT `FK_d95d80b59fdeb030cad26bcbc46` FOREIGN KEY (`skill_code`) REFERENCES `skills`(`code`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users_skills` DROP FOREIGN KEY `FK_d95d80b59fdeb030cad26bcbc46`", undefined);
        await queryRunner.query("ALTER TABLE `users_skills` DROP FOREIGN KEY `FK_aa700512dc7cfdf555880af5541`", undefined);
        await queryRunner.query("DROP INDEX `IDX_d95d80b59fdeb030cad26bcbc4` ON `users_skills`", undefined);
        await queryRunner.query("DROP INDEX `IDX_aa700512dc7cfdf555880af554` ON `users_skills`", undefined);
        await queryRunner.query("DROP TABLE `users_skills`", undefined);
    }

}
