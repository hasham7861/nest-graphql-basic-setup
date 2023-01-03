import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthorService{

    async findById(id: number){
        const dummyAuthorData = {
            1 : {
                id: 1,
                name: "bob"
            },
            2 : {
                id: 2,
                name: "jimmy"
            }
        }
        return dummyAuthorData[id]
    }
}