// src/DTO/newUserDto.ts

interface NewUserDto {
    username: string
    password: string
    email: string
    birthday: Date
    avatarUrl: string
}

export default NewUserDto