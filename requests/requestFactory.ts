import requestFather from "./requestTemplates/requestFather";
import uploadFileRequest from "./requestTemplates/uploadFileRequest";
import ConfigClass from "../data/configFile"

class requestFactory{

    private uploadFileURL : string = "https://content.dropboxapi.com/2/files/upload";
    private getMetaDataURL : string = "https://api.dropboxapi.com/2/files/get_metadata";
    private deleteFileURL : string = "https://api.dropboxapi.com/2/files/delete_v2";


    public createUploadRequest() : requestFather{
        return new uploadFileRequest(ConfigClass.dropBoxPath, ConfigClass.folderPath, this.uploadFileURL, 'post', ConfigClass.token, 'application/octet-stream');
    }

    public createGetMetaDataRequest() : requestFather{
        return new requestFather(this.getMetaDataURL, 'post', ConfigClass.token, 'application/json', ConfigClass.dropBoxPath);
    }

    public createDeleteRequest() : requestFather{
        return new requestFather(this.deleteFileURL, 'post', ConfigClass.token, 'application/json', ConfigClass.dropBoxPath);
    }
}

export default requestFactory;