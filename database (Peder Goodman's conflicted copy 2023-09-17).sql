-- database name is "great_question"
-- user login data.
CREATE TABLE "user" (
  "id" serial PRIMARY KEY,
  "username" varchar(300) NOT NULL UNIQUE,
  "password" varchar(1000) NOT NULL
);

-- questions data. "user_id" associates questions added by user. 
CREATE TABLE "questions" (
  "id" serial PRIMARY KEY,
  "question" varchar(300) NOT NULL,
  "user_added_id" integer REFERENCES "user" ("id")
);


-- journal entry data.
CREATE TABLE "journals" (
  "id" serial PRIMARY KEY,
  "title" varchar(300) NOT NULL,
  "journal_entry" varchar(10000) NOT NULL,
  "created_date" TIMESTAMP(0) NOT NULL DEFAULT NOW(),
  "edited_date" TIMESTAMP(0) NOT NULL DEFAULT NOW(),
  "question_id" integer NOT NULL REFERENCES "questions" ("id"),
  "user_id" integer NOT NULL REFERENCES  "user" ("id")
);

-- list of question categories 
CREATE TABLE "categories" (
  "id" serial PRIMARY KEY,
  "category_name" varchar(100) NOT NULL
);

-- links questions and category tables
CREATE TABLE "question_categories" (
  "id" serial PRIMARY KEY,
  "question_id" integer NOT NULL REFERENCES "questions" ("id"),
  "category_id" integer NOT NULL REFERENCES "categories" ("id")
);

CREATE TABLE "user_favorited" (
  "id" serial NOT NULL PRIMARY KEY,
  "user_id" integer NOT NULL REFERENCES  "user" ("id"),
  "question_id" integer NOT NULL REFERENCES "questions" ("id")
);
