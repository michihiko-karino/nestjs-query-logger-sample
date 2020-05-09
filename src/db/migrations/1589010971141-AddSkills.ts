import {MigrationInterface, QueryRunner} from "typeorm";

export class AddSkills1589010971141 implements MigrationInterface {
    name = 'AddSkills1589010971141'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `skills` (`code` int NOT NULL AUTO_INCREMENT, `name` varchar(32) NOT NULL, PRIMARY KEY (`code`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `skills`", undefined);
    }

}
