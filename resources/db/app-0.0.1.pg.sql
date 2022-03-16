/*

-- App
--
-- Postgres DB Schema
-- Version: 0.0.1

*/

SET client_encoding = 'UTF8';

create table "album" (
  "id" SERIAL,
  "name" VARCHAR(128) NOT NULL,
  "is_active" BOOLEAN NOT NULL DEFAULT true,
  "inserted_at" TIMESTAMP NOT NULL DEFAULT now_utc(),
  "updated_at" TIMESTAMP NULL,
  CONSTRAINT "album_pk" PRIMARY KEY ("id")
);

create table "author" (
  "id" SERIAL,
  "name" VARCHAR(128) NOT NULL,
  "is_active" BOOLEAN NOT NULL DEFAULT true,
  "inserted_at" TIMESTAMP NOT NULL DEFAULT now_utc(),
  "updated_at" TIMESTAMP NULL,
  CONSTRAINT "author_pk" PRIMARY KEY ("id")
);

create table "music" (
  "id" SERIAL,
  "name" VARCHAR(128) NOT NULL,
  "is_active" BOOLEAN NOT NULL DEFAULT true,
  "inserted_at" TIMESTAMP NOT NULL DEFAULT now_utc(),
  "updated_at" TIMESTAMP NULL,
  CONSTRAINT "music_pk" PRIMARY KEY ("id")
);