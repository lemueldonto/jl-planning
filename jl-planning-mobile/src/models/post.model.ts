import {User} from "./user.model";
import {PostSeen} from "./postSeen.model";
import {DelayFeatures} from "./delayFeatures.model";

export class Post extends DelayFeatures{
    _id: number;
    image?: string;
    user: User;
    postSeen?: PostSeen[];
    constructor(id?) {
        super();
        this._id = id;
        this.user = new User();
    }
    getSeenNumber(){
        return this.postSeen? this.postSeen.length:0;
    }
}
