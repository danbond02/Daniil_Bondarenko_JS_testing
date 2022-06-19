import { AxiosRequestConfig } from "axios";
import requestFather from "./requestFather";

class uploadFileRequest extends requestFather{

    private uploadPath : string;
    private folderPath : string;

    constructor(upath : string, fpath : string, url : string, method : string, token : string, contentType : string){
        super(url, method, token, contentType, '');
        this.uploadPath = upath;
        this.folderPath = fpath;
    }

    public override getRequest(): AxiosRequestConfig {
        this.formRequest = {
            method : this.requestMethod,
            url : this.requestUrl,
            headers : {
                'Authorization' : this.requestToken,
                'Content-Type' : this.requestContentType,
                'Dropbox-API-Arg' : `{"mode":"add","path":"${this.uploadPath}","mute":false,"autorename":true}`
            },
            data : {
                'binary' : this.folderPath
            }
        }
        return this.formRequest;        
    }
}

export default uploadFileRequest;