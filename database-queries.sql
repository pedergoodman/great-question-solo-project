-- GET request!!!!
-- need to change user from 1 to variable

 SELECT 
		  json_build_object(
        'categoryId', categories.id, 
        'categoryName', category_name
      ) 
      AS category_data,
      json_agg(
			  json_build_object(
          'questionId', questions.id, 
          'questionText', question, 
          'userAddedId', questions.user_added_id,
      	  'isfavorited', user_favorited.user_id
        )
		  ) 
      AS question_data
FROM categories
JOIN question_categories 
    ON categories.id = question_categories.category_id
JOIN questions
    ON question_categories.question_id = questions.id
LEFT JOIN user_favorited
	ON user_favorited.question_id = questions.id AND user_favorited.user_id = 1
WHERE 
	user_added_id IS NULL OR user_added_id = 1

  GROUP BY categories.id, category_name
  ;