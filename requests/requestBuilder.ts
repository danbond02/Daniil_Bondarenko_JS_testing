import axios, {AxiosResponse} from "axios";
import requestFather from "./requestTemplates/requestFather";

class RequestBuilder {

    private request : requestFather;

    constructor(request : requestFather){
        this.request = request;
    }

    public sendRequest() : Promise<AxiosResponse>{
        return axios(this.request.getRequest());
    }

    public setRequest(newRequest : requestFather){
        this.request = newRequest;
    }
    

}

export default RequestBuilder;