import {AxiosRequestConfig} from 'axios';

class requestFather{

    protected formRequest : AxiosRequestConfig = {
        method: '',
        url: '',
        headers: {},
        data: {}
    };

    protected requestUrl : string;
    protected requestMethod : string;
    protected requestToken : string;
    protected requestContentType : string;
    protected requestPath : string;

    constructor(url : string, method : string, token : string, contentType : string, path : string){
        this.requestUrl = url;
        this.requestMethod = method;
        this.requestToken = "Bearer " + token;
        this.requestContentType = contentType;
        this.requestPath = path;
    }

    public getRequest() : AxiosRequestConfig{
        this.formRequest = {
            method : this.requestMethod,
            url : this.requestUrl,
            headers : {
                'Authorization' : this.requestToken,
                'Content-Type' : this.requestContentType
            },
            data : {
                'path' : this.requestPath
            }
        }
        return this.formRequest;
    }
}

export default requestFather;