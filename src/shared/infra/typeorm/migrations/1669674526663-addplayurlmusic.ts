import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class addplayurlmusic1669674526663 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        return await queryRunner.addColumn("musics", new TableColumn({name: "playback_url", type: "varchar", isNullable:true}))
    }

    public async down(queryRunner: QueryRunner): Promise<void>{
        await queryRunner.dropColumn("musics", "playback_url")
    }

}
