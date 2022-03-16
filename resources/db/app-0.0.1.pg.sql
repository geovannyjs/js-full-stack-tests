/*

-- App
--
-- Postgres DB Schema
-- Version: 0.0.1

*/

SET client_encoding = 'UTF8';

create table "album" (
  "id" SERIAL,
  "author_id" INT NOT NULL,
  "name" VARCHAR(128) NOT NULL,
  "is_active" BOOLEAN NOT NULL DEFAULT true,
  "released_at" TIMESTAMP NOT NULL,
  "inserted_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP NULL,
  CONSTRAINT "album_pk" PRIMARY KEY ("id")
);

create table "author" (
  "id" SERIAL,
  "name" VARCHAR(128) NOT NULL,
  "is_active" BOOLEAN NOT NULL DEFAULT true,
  "inserted_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP NULL,
  CONSTRAINT "author_pk" PRIMARY KEY ("id")
);

create table "music" (
  "id" SERIAL,
  "album_id" INT NOT NULL,
  "name" VARCHAR(128) NOT NULL,
  "length" SMALLINT NOT NULL,
  "is_active" BOOLEAN NOT NULL DEFAULT true,
  "inserted_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP NULL,
  CONSTRAINT "music_pk" PRIMARY KEY ("id")
);


alter table "album" 
  add constraint "album_author_id_fk" FOREIGN KEY ("author_id") REFERENCES "author" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

alter table "music" 
  add constraint "music_album_id_fk" FOREIGN KEY ("album_id") REFERENCES "album" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;