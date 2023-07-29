
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


-- dummy data for initial stuff!

-- categories
INSERT INTO "category" ("category_name")
VALUES 
('Self-Discovery'),
('Philosophy'),
('Reflection'),
('Creativity'),
('Ethics'),
('Environment'),
('Relationships'),
('Aspirations'),
('Society');



-- default test questions!
INSERT INTO "questions" ("question")
VALUES 
  -- Self-Discovery
  ('What are your core values, and how do they influence your decisions?'),
  ('Describe a life-changing experience that shaped who you are today.'),
  ('What are your biggest fears, and how do they hold you back?'),
  
  -- Philosophy
  ('What is the meaning of life to you?'),
  ('Do you believe in fate or free will? Why?'),
  ('How would you define true happiness and contentment?'),
  
  -- Reflection
  ('What are some areas in your life that you want to improve, and how do you plan to achieve that?'),
  ('Describe a recent mistake you made and what you learned from it.'),
  ('How do you handle and overcome challenges in life?'),

  -- Creativity
  ('If you could have any superpower, what would it be, and how would you use it?'),
  ('Write about a fictional world you would love to live in and its unique features.'),
  ('How do you express your creativity, and what inspires you?'),
  
  -- Ethics
  ('Is there a situation where telling a small lie is justified? Why or why not?'),
  ('Discuss a moral dilemma you faced and how you resolved it.'),
  ('How do you determine what is right and wrong in your life?'),

  -- Environment
  ('What is your favorite natural place, and why does it hold significance for you?'),
  ('How do you connect with nature on a regular basis?'),
  ('Discuss the impact of human activities on the environment and what you can do to make a positive change.'),
  
  -- Relationships
  ('Describe a moment when you felt truly understood by someone else.'),
  ('How do you show empathy towards others, and why is it essential?'),
  ('Discuss the qualities that make a relationship strong and fulfilling.'),
  
  -- Aspirations
  ('What are your long-term goals, and what steps are you taking to achieve them?'),
  ('Write about a dream you have that seems impossible, but you wish to pursue anyway.'),
  ('How do you stay motivated and focused on your objectives?'),
  
  -- Society
  ('What are some potential benefits and drawbacks of advancing technology in our lives?'),
  ('How do you strike a balance between using technology for productivity and avoiding its negative effects?'),
  ('Discuss the role of social media in modern society and its impact on relationships and mental health.');








