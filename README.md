# pp-backEnd
Back End

# Database

## Table Diagram
![Databse Table](img/db-table.png)

## Models

### Users

```
{
    full_name: string, *REQUIRED*
    email: string,     *REQUIRED*
    password: string,  *REQUIRED*
    phone: string,     *OPTIONAL*
    location: string   *OPTIONAL*
}
```

### User Plants

```
{
    user_id: int,         *REQUIRED*
    plant_id: int,        *REQUIRED*
    created_at: datetime  *REQUIRED*
}
```

### Tasks

```
{
    user_id: int,         *REQUIRED*
    title: string,        *REQUIRED*
    task: string,         *REQUIRED*
    deadline: datetime,   *REQUIRED*
    created_at: datetime  *REQUIRED*
}
```

### Notes

```
{
    plant_id: int,         *REQUIRED*
    title: string,         *REQUIRED*
    note: string,          *REQUIRED*
    created_at: datetime,  *REQUIRED*
}
```
## Routes

## Auth Routes:

### POST
`/api/register`

- Expects Following Shape

```
{
    full_name: string, *REQUIRED*
    email: string,     *REQUIRED*
    password: string,  *REQUIRED*
    phone: string,     *OPTIONAL*
    location: string   *OPTIONAL*
}
```

`/api/login`

- Expects Following Shape

```
{
    email: string,   *REQUIRED*
    password: string *REQUIRED*
}
```

## User Routes

### GET

`api/users`

- Returns All Users In Database

`api/users/:id`

- Returns User That Matches ID

### PUT

`api/users/:id`

- Updates User Information

- Expects Following Shape, Only One Field Required

```
{
    full_name: string, *OPTIONAL*
    email: string,     *OPTIONAL*
    password: string,  *OPTIONAL*
    phone: string,     *OPTIONAL*
    location: string   *OPTIONAL*
}
```

### Delete

`api/users/:id`

- Removes User From Database That Matches ID