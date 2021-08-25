import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1629927704929 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "users",
              columns: [
                {
                  name: "id",
                  type: "uuid",
                  isPrimary: true,
                },
                {
                  name: "name",
                  type: "varchar",
                },
                {
                  name: "avatar",
                  type: "varchar",
                  isNullable: true,
                },
                {
                  name: "password",
                  type: "varchar",
                },
                {
                  name: "email",
                  type: "varchar",
                },
                {
                  name: "isAdmin",
                  type: "boolean",
                  default: false,
                },
                {
                  name: "created_at",
                  type: "timestamp",
                  default: "now()",
                },
              ],
            })
          ); 
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
