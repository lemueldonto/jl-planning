import {User} from "./user.model";
import {PostSeen} from "./postSeen.model";

export class DelayFeatures {
    date: Date;
    delay(){
        return (this.date)? this.dateDiff(this.date, new Date()):0+' seconde';
    }
    protected dateDiff(dateold, datenew)
    {
        let hDiff = datenew.getHours() - dateold.getHours();
        let mDiff = datenew.getMinutes() - dateold.getMinutes();
        let sDiff = datenew.getSeconds() - dateold.getSeconds();

        return sDiff<60? sDiff+' secondes' : mDiff<60? mDiff+' minutes': hDiff + ' heures';
    }
}
