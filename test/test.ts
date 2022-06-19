import { expect } from 'chai';
import 'mocha';

import RequestBuilder from "../requests/requestBuilder";
import requestFactory from '../requests/requestFactory';

describe("API testing", function() {

    let requesBuilder : RequestBuilder;
    let _requestFactory : requestFactory;
    
    before(async function() {
        _requestFactory = await new requestFactory();
        requesBuilder = new RequestBuilder(await _requestFactory.createUploadRequest());
    })

    it("Upload file", async function(){
        const rs = await requesBuilder.sendRequest();
        expect(rs.status).to.equal(200);
    }).timeout(10000);

    it("Get meta data", async function () {
        await requesBuilder.setRequest(await _requestFactory.createGetMetaDataRequest());
        const rs = await requesBuilder.sendRequest();
        expect(rs.status).to.equal(200);
    }).timeout(10000);

    it("Delete file", async function(){
        await requesBuilder.setRequest(await _requestFactory.createDeleteRequest());
        const rs = await requesBuilder.sendRequest();
        expect(rs.status).to.equal(200);
    }).timeout(10000);

    
})