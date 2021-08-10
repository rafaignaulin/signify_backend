import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMusics1626473145952 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    await  queryRunner.createTable(
        new Table({
            name: "musics",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                },
                {
                    name: "artist_id",
                    type: "uuid",
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "description",
                    type: "varchar",
                },
                {
                    name: "lyrics",
                    type: "varchar",
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()",
                }
            ],
            foreignKeys: [
                {
                  name: "FKArtistMusic",
                  referencedTableName: "artists",
                  referencedColumnNames: ["id"],
                  columnNames: ["artist_id"],
                  onDelete: "SET NULL",
                  onUpdate: "SET NULL",
                },
              ],
        })
    )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('musics');
    }

}
