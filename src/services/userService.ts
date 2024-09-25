// src/services/userService.ts

import NewUserDto from "../DTO/newUserDto";
import User from "../models/userModel";
import { getFileData, saveFileData } from "../config/fileDataLayer";
class UserService {
    public static async createNewUser(newUser: NewUserDto):Promise<void>{
        const {username, password, email, birthday, avatarUrl} = newUser
        const user = new User(username, password, email, birthday, avatarUrl)

           const users: User[] = await getFileData<User>('users')
           if (!users) {
               throw new Error('users not found')
           }

           users.push(user)
           await saveFileData('users', users)
    }

    public static async followUser(followerId: string, followingId: string): Promise<void> {
        const users: User[] = await getFileData<User>('users')
        const user = users.find(user => user.id === followingId)
        const userToFollow = users.find(user => user.id === followerId)

        if (!user || !userToFollow) {
            throw new Error('user not found')
        }

        if(!user.followers.includes(followerId)) {
            user.followers.push(followerId)
            userToFollow.following.push(followingId)

            await saveFileData('users', users)
        }

    }
}

export default UserService