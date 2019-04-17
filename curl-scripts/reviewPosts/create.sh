#!/bin/bash

API="http://localhost:4741"
URL_PATH="/reviewPosts"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "reviewPost": {
      "reviewPostTitle": "'"${TITLE}"'",
      "reviewPostBody": "'"${BODY}"'"
    }
  }'

echo
