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
