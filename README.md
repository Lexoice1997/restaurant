
# Menu for restaurants

Online menu for restaurants.

## Authentication and Authorization

### SignUp

```http
  POST /auth/signup
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `phone` | `string` | **Required**. +998972411997 |
| `name` | `string` | **Required**. Azamat |
| `password` | `string` | **Required**. 12345678|


### SignIn

```http
  POST /auth/signin
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `phone` | `string` | **Required**. +998972411997 |
| `password` | `string` | **Required**. 12345678|


## Categories

### Get all categories

```http
  GET /api/categories
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `number` | **Required**. 1 |
| `name` | `string` | **Required**. Foods |
| `foods` | `foods[]` | **Required**. [ { id: 1, photo: file, name: 'Plov', description: ris, price: 5000 }, ...]|

### Get category by ID

```http
  GET /api/categories/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `number` | **Required**. 1 |
| `name` | `string` | **Required**. Foods |
| `foods` | `foods[]` | **Required**. [ { id: 1, photo: file, name: 'Plov', description: ris, price: 5000 }, ...]|

### Crete category

```http
  POST /api/categories
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Foods |

### Update category

```http
  PUT /api/categories/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Foods |

### Remove category

```http
  Delete /api/categories/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |

## Foods


### Crete food

```http
  POST /api/foods
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `photo` | `file` | **Required**. File |
| `name` | `string` | **Required**. Plov |
| `description` | `string` | **Required**. Ris, Myaso |
| `price` | `number` | **Required**. 5000 |
| `categoryId` | `number` | **Required**. 1 |

### Update food

```http
  PUT /api/foods/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `photo` | `file` | **Required**. File |
| `name` | `string` | **Required**. Plov |
| `description` | `string` | **Required**. Ris, Myaso |
| `price` | `number` | **Required**. 5000 |
| `categoryId` | `number` | **Required**. 1 |

### Remove food

```http
  Delete /api/foods/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |





