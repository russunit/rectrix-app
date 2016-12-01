import { CharterRequest } from "../charter-request/charter-request";
import { ShuttleRequest } from "../shuttle-request/shuttle-request";

export class User 
{
firstName: string;
lastName: string;
address: string;
city: string;
country: string;
zip: string;
username: string;
password: string;
email: string;
charterHistory: CharterRequest[];
shuttleHistory: ShuttleRequest[];
}
