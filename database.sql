
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
-- user login data.
CREATE TABLE "user" (
	"id" serial PRIMARY KEY,
	"username" varchar(300) NOT NULL UNIQUE,
	"password" varchar(1000) NOT NULL
	);
	
-- table to hold questions, captures user id of questions added by user. 
CREATE TABLE "questions" (
	"id" serial PRIMARY KEY,
	"question" varchar(300) NOT NULL,
	"user_added_id" integer REFERENCES "user"
	);

-- stores users journals 
CREATE TABLE "journals" (
	"id" serial PRIMARY KEY,
	"title" varchar(300) NOT NULL,
	"journal_entry" varchar(10000) NOT NULL,
	"created_date" TIMESTAMP(0) NOT NULL DEFAULT NOW(),
	"edited_date" DATE,
	"question_id" integer NOT NULL REFERENCES "questions",
	"user_id" integer NOT NULL REFERENCES "user"
	);

-- list of question categories 
CREATE TABLE "category" (
	"id" serial  PRIMARY KEY,
	"category_name" varchar(100) NOT NULL
	);

-- links questions and category tables
CREATE TABLE "question_categories" (
	"id" serial PRIMARY KEY,
	"question_id" integer NOT NULL REFERENCES "questions",
	"category_id" integer NOT NULL REFERENCES "category"
	);
	




CREATE TABLE "user_favorited" (
	"id" serial NOT NULL PRIMARY KEY,
	"user_id" integer NOT NULL REFERENCES "user",
	"question_id" integer NOT NULL REFERENCES "questions"
	);











