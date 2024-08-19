                                  Table "public.UserStories"
      Column         |         Type          | Collation | Nullable |               Default               
---------------------+-----------------------+-----------+----------+-------------------------------------
 id                  | integer               |           | not null | nextval('userstories_id_seq'::regclass)
 cobol_code          | text                  |           |          | 
 cobol_docs          | text                  |           |          | 
 python_user_story   | text                  |           |          | 
 python_code         | text                  |           |          | 
Indexes:
    "UserStories_pkey" PRIMARY KEY, btree (id)
