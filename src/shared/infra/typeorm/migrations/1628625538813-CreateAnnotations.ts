import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAnnotations1628625538813 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "annotations",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "music_id",
                        type: "uuid",
                    },
                    {
                        name: "music_text",
                        type: "varchar",
                    },
                    {
                        name: "description",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKAnnotationsMusic",
                        referencedTableName: "musics",
                        referencedColumnNames: ["id"],
                        columnNames: ["music_id"],
                        onUpdate: "SET NULL",
                        onDelete: "SET NULL",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("annotations")
    }

}
