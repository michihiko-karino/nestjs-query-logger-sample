import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUser1589010728627 implements MigrationInterface {
    name = 'AddUser1589010728627'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(32) NOT NULL, `email` varchar(32) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `users`", undefined);
    }

}
