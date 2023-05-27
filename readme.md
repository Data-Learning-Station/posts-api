# Posts API

---

**POST** `/posts`

Create new post

```json
{
    "author": "John Done",
    "content": "long content"
}
```

Response

```json
{
    "message": null,
    "post": {
        "id": 2,
        "content": "Error validating request body. content is required. author is required. name is not allowed. username is not allowed. password is not allowed.",
        "author": {
            "name": "John Doe",
            "avatar": "https://api.multiavatar.com/Binx%20Bond.png"
        },
        "comments": 21,
        "likes": 176,
        "shares": 32
    }
}
```

---

**GET** `/posts`

Get all created posts

Response

```json
{
    "message": null,
    "posts": [
        {
            "id": 1,
            "content": "Error validating request body. content is required. author is required. name is not allowed. username is not allowed. password is not allowed.",
            "author": {
                "name": "John Doe",
                "avatar": "https://api.multiavatar.com/Binx%20Bond.png"
            },
            "comments": 24,
            "likes": 298,
            "shares": 75
        },
        {
            "id": 2,
            "content": "Error validating request body. content is required. author is required. name is not allowed. username is not allowed. password is not allowed.",
            "author": {
                "name": "John Doe",
                "avatar": "https://api.multiavatar.com/Binx%20Bond.png"
            },
            "comments": 21,
            "likes": 176,
            "shares": 32
        }
    ]
}
```