import { MigrationInterface, QueryRunner } from 'typeorm';

export class reinit1686503611057 implements MigrationInterface {
  name = 'reinit1686503611057';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "product" (
                "id" SERIAL NOT NULL,
                "name" character varying(255) NOT NULL,
                "description" text NOT NULL,
                "price" integer NOT NULL,
                "stock" integer NOT NULL,
                "image" character varying NOT NULL,
                "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
                "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
                CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id")
            )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TABLE "product"
        `);
  }
}
