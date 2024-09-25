// src/services/userServuce.ts

import NewUserDto from "../DTO/newUserDto";
import fs from 'fs/promises'
import User from "../models/userModel";
class UserService {
    public static async createNewUser(newUser: NewUserDto):Promise<void>{
        //create new user() object
        const {username, password, email, birthday, avatarUrl} = newUser
        const user = new User(username, password, email, birthday, avatarUrl)

        //add it to user file
           //get the file as an array of objects

           //push

           //save the array back to the file
    }
}