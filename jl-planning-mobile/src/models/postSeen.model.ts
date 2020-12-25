import {User} from "./user.model";
import {DelayFeatures} from "./delayFeatures.model";
import {Post} from "./post.model";

export class PostSeen extends DelayFeatures{
    _id: number;
    post?: Post;
    user: User;
}
