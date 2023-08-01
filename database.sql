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
  "user_added_id" integer REFERENCES "user"
);

-- journal entry data.
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
CREATE TABLE "categories" (
  "id" serial PRIMARY KEY,
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

-- THIS IS TEMP DATA
-- categories
INSERT INTO
  "category" ("category_name")
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
INSERT INTO
  "questions" ("question")
VALUES
  -- Self-Discovery
  (
    'What are your core values, and how do they influence your decisions?'
  ),
  (
    'Describe a life-changing experience that shaped who you are today.'
  ),
  (
    'What are your biggest fears, and how do they hold you back?'
  ),
  -- Philosophy
  ('What is the meaning of life to you?'),
  ('Do you believe in fate or free will? Why?'),
  (
    'How would you define true happiness and contentment?'
  ),
  -- Reflection
  (
    'What are some areas in your life that you want to improve, and how do you plan to achieve that?'
  ),
  (
    'Describe a recent mistake you made and what you learned from it.'
  ),
  (
    'How do you handle and overcome challenges in life?'
  ),
  -- Creativity
  (
    'If you could have any superpower, what would it be, and how would you use it?'
  ),
  (
    'Write about a fictional world you would love to live in and its unique features.'
  ),
  (
    'How do you express your creativity, and what inspires you?'
  ),
  -- Ethics
  (
    'Is there a situation where telling a small lie is justified? Why or why not?'
  ),
  (
    'Discuss a moral dilemma you faced and how you resolved it.'
  ),
  (
    'How do you determine what is right and wrong in your life?'
  ),
  -- Environment
  (
    'What is your favorite natural place, and why does it hold significance for you?'
  ),
  (
    'How do you connect with nature on a regular basis?'
  ),
  (
    'Discuss the impact of human activities on the environment and what you can do to make a positive change.'
  ),
  -- Relationships
  (
    'Describe a moment when you felt truly understood by someone else.'
  ),
  (
    'How do you show empathy towards others, and why is it essential?'
  ),
  (
    'Discuss the qualities that make a relationship strong and fulfilling.'
  ),
  -- Aspirations
  (
    'What are your long-term goals, and what steps are you taking to achieve them?'
  ),
  (
    'Write about a dream you have that seems impossible, but you wish to pursue anyway.'
  ),
  (
    'How do you stay motivated and focused on your objectives?'
  ),
  -- Society
  (
    'What are some potential benefits and drawbacks of advancing technology in our lives?'
  ),
  (
    'How do you strike a balance between using technology for productivity and avoiding its negative effects?'
  ),
  (
    'Discuss the role of social media in modern society and its impact on relationships and mental health.'
  );

-- user added questions
INSERT INTO
  questions ("question", "user_added_id")
VALUES
  (
    'What are your most significant strengths, and how do you leverage them in your life?',
    1
  ),
  -- Self-Discovery
  (
    'Reflect on a decision you made recently. How did it align with your values and beliefs?',
    3
  ),
  -- Self-Discovery
  (
    'Do you think there is an ultimate purpose or meaning to human existence? Why or why not?',
    1
  ),
  -- Philosophy
  (
    'How does your perception of time influence your perspective on life?',
    3
  ),
  -- Philosophy 
  (
    'What is a personal mantra or affirmation that helps you stay focused and positive?',
    1
  ),
  -- Reflection
  (
    'Describe a situation where stepping out of your comfort zone led to personal growth.',
    3
  ),
  -- Reflection
  (
    'If you had the ability to invent something, what problem would you solve, and how?',
    1
  ),
  -- Creativity
  (
    'Describe a book, movie, or artwork that profoundly impacted your way of thinking.',
    3
  ),
  -- Creativity 
  (
    'Discuss a moral dilemma you witnessed recently and how different people reacted to it.',
    1
  ),
  -- Ethics 
  (
    'What values do you consider non-negotiable in making important life choices?',
    3
  ),
  -- Ethics 
  (
    'Share an experience in nature that left you in awe and inspired a sense of interconnectedness.',
    1
  ),
  -- Environment
  (
    'What changes can you make in your daily life to reduce your environmental footprint?',
    3
  ),
  -- Environment
  (
    'How do you practice active listening in your conversations with others?',
    1
  ),
  -- Relationships 
  (
    'Describe a time when empathy helped you build a stronger connection with someone.',
    3
  ),
  -- Relationships 
  (
    'What steps are you taking to achieve your long-term goals, and how do you measure progress?',
    1
  ),
  -- Aspirations
  (
    'Reflect on a past achievement and how it motivates you to pursue new goals.',
    3
  ),
  -- Aspirations
  (
    'How do you maintain a healthy balance between technology use and unplugging from screens?',
    1
  ),
  -- Society
  (
    'Discuss the potential implications of artificial intelligence on society in the next decade.',
    3
  );


-- link base questions and data
INSERT INTO
  question_categories (question_id, category_id)
VALUES
  (1, 1),
  (2, 1),
  (3, 1),
  (4, 2),
  (5, 2),
  (6, 2),
  (7, 3),
  (8, 3),
  (9, 3),
  (10, 4),
  (11, 4),
  (12, 4),
  (13, 5),
  (14, 5),
  (15, 5),
  (16, 6),
  (17, 6),
  (18, 6),
  (19, 7),
  (20, 7),
  (21, 7),
  (22, 8),
  (23, 8),
  (24, 8),
  (25, 9),
  (26, 9),
  (27, 9),
  -- linking custom user question data to categories
  (28, 1),
  (29, 1),
  (30, 2),
  (31, 2),
  (32, 3),
  (33, 3),
  (34, 4),
  (35, 4),
  (36, 5),
  (37, 5),
  (38, 6),
  (39, 6),
  (40, 7),
  (41, 7),
  (42, 8),
  (43, 8),
  (44, 9),
  (45, 9);



-- inserting journals into database
INSERT INTO
  journals (
    "title",
    "journal_entry",
    "question_id",
    "user_id"
  )
VALUES
  -- user 1 question data (input 1)
  (
    'Journal Text 1, user 1, Question id 3 (Peder)',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in sapien dictum, semper lorem ut, congue neque. Curabitur rutrum pharetra eleifend. Nunc placerat pulvinar nunc at suscipit. Quisque eleifend odio eu tellus euismod, sed laoreet ex tempor. Nunc fringilla libero nec ante aliquam, et consequat nibh aliquet. Nunc porta malesuada rhoncus. Sed et nibh ut nunc vehicula consequat eu a lacus. Quisque placerat ex et purus molestie, nec fermentum nisi faucibus. Fusce id neque neque. Suspendisse hendrerit mi vehicula sapien rutrum, nec viverra eros ultricies. Praesent finibus purus ac quam congue fringilla.',
    3,
    1
  ),
  -- user 1 question data (input 2)
  (
    'Journal Text 2, user 1, Question id 7 (Peder)',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in sapien dictum, semper lorem ut, congue neque. Curabitur rutrum pharetra eleifend. Nunc placerat pulvinar nunc at suscipit. Quisque eleifend odio eu tellus euismod, sed laoreet ex tempor. Nunc fringilla libero nec ante aliquam, et consequat nibh aliquet. Nunc porta malesuada rhoncus. Sed et nibh ut nunc vehicula consequat eu a lacus. Quisque placerat ex et purus molestie, nec fermentum nisi faucibus. Fusce id neque neque. Suspendisse hendrerit mi vehicula sapien rutrum, nec viverra eros ultricies. Praesent finibus purus ac quam congue fringilla.',
    7,
    1
  ),
  -- user 1 question data (input 3)
  (
    'Journal Text 3, user 1, Question id 15 (Peder)',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in sapien dictum, semper lorem ut, congue neque. Curabitur rutrum pharetra eleifend. Nunc placerat pulvinar nunc at suscipit. Quisque eleifend odio eu tellus euismod, sed laoreet ex tempor. Nunc fringilla libero nec ante aliquam, et consequat nibh aliquet. Nunc porta malesuada rhoncus. Sed et nibh ut nunc vehicula consequat eu a lacus. Quisque placerat ex et purus molestie, nec fermentum nisi faucibus. Fusce id neque neque. Suspendisse hendrerit mi vehicula sapien rutrum, nec viverra eros ultricies. Praesent finibus purus ac quam congue fringilla.',
    15,
    1
  ),
  -- user 1 question data (input 4)
  (
    'Journal Text 4, user 1, Question id is 27 (Peder)',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in sapien dictum, semper lorem ut, congue neque. Curabitur rutrum pharetra eleifend. Nunc placerat pulvinar nunc at suscipit. Quisque eleifend odio eu tellus euismod, sed laoreet ex tempor. Nunc fringilla libero nec ante aliquam, et consequat nibh aliquet. Nunc porta malesuada rhoncus. Sed et nibh ut nunc vehicula consequat eu a lacus. Quisque placerat ex et purus molestie, nec fermentum nisi faucibus. Fusce id neque neque. Suspendisse hendrerit mi vehicula sapien rutrum, nec viverra eros ultricies. Praesent finibus purus ac quam congue fringilla.',
    27,
    1
  ),
  -- user 2 question data (input 1)
  (
    'Journal Text 1, user 3, Question id 5 (Freyja)',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in sapien dictum, semper lorem ut, congue neque. Curabitur rutrum pharetra eleifend. Nunc placerat pulvinar nunc at suscipit. Quisque eleifend odio eu tellus euismod, sed laoreet ex tempor. Nunc fringilla libero nec ante aliquam, et consequat nibh aliquet. Nunc porta malesuada rhoncus. Sed et nibh ut nunc vehicula consequat eu a lacus. Quisque placerat ex et purus molestie, nec fermentum nisi faucibus. Fusce id neque neque. Suspendisse hendrerit mi vehicula sapien rutrum, nec viverra eros ultricies. Praesent finibus purus ac quam congue fringilla.',
    5,
    3
  ),
  -- user 2 question data (input 2)
  (
    'Journal Text 2, user 3, Question id 11 (Freyja)',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in sapien dictum, semper lorem ut, congue neque. Curabitur rutrum pharetra eleifend. Nunc placerat pulvinar nunc at suscipit. Quisque eleifend odio eu tellus euismod, sed laoreet ex tempor. Nunc fringilla libero nec ante aliquam, et consequat nibh aliquet. Nunc porta malesuada rhoncus. Sed et nibh ut nunc vehicula consequat eu a lacus. Quisque placerat ex et purus molestie, nec fermentum nisi faucibus. Fusce id neque neque. Suspendisse hendrerit mi vehicula sapien rutrum, nec viverra eros ultricies. Praesent finibus purus ac quam congue fringilla.',
    11,
    3
  ),
  -- user 2 question data (input 3)
  (
    'Journal Text 3, user 3, Question id 19 (Freyja)',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in sapien dictum, semper lorem ut, congue neque. Curabitur rutrum pharetra eleifend. Nunc placerat pulvinar nunc at suscipit. Quisque eleifend odio eu tellus euismod, sed laoreet ex tempor. Nunc fringilla libero nec ante aliquam, et consequat nibh aliquet. Nunc porta malesuada rhoncus. Sed et nibh ut nunc vehicula consequat eu a lacus. Quisque placerat ex et purus molestie, nec fermentum nisi faucibus. Fusce id neque neque. Suspendisse hendrerit mi vehicula sapien rutrum, nec viverra eros ultricies. Praesent finibus purus ac quam congue fringilla.',
    19,
    3
  ),
  -- user 2 question data (input 4)
  (
    'Journal Text 4, user 3, Question id is 22 (Freyja)',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in sapien dictum, semper lorem ut, congue neque. Curabitur rutrum pharetra eleifend. Nunc placerat pulvinar nunc at suscipit. Quisque eleifend odio eu tellus euismod, sed laoreet ex tempor. Nunc fringilla libero nec ante aliquam, et consequat nibh aliquet. Nunc porta malesuada rhoncus. Sed et nibh ut nunc vehicula consequat eu a lacus. Quisque placerat ex et purus molestie, nec fermentum nisi faucibus. Fusce id neque neque. Suspendisse hendrerit mi vehicula sapien rutrum, nec viverra eros ultricies. Praesent finibus purus ac quam congue fringilla.',
    22,
    3
  );

-- Add Favs to list
INSERT INTO
  "user_favorited" ("question_id", "user_id")
VALUES
  -- user 1
  (3, 1),
  (7, 1),
  (15, 1),
  (27, 1),
  (5, 1),
  (16, 1),
  (22, 1),
  (13, 1),
  -- user 3
  (5, 3),
  (11, 3),
  (19, 3),
  (22, 3),
  (7, 3),
  (15, 3),
  (16, 3),
  (25, 3);