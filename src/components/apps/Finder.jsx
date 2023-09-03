import {
  DetailsView,
  FileManagerComponent,
  NavigationPane,
  Toolbar,
  Inject,
} from "@syncfusion/ej2-react-filemanager";
import { registerLicense } from "@syncfusion/ej2-base";
import React, { Component } from "react";
import "../../../public/styles/Finder.css";
let userId = localStorage.getItem('user');
// let hostUrl = " http://localhost:62870";
let hostUrl = "http://localhost:5000/";
// let hostUrl = "http://localhost:8090/";
// let hostUrl = "https://ej2-aspcore-service.azurewebsites.net/";
console.log(localStorage.getItem('token'))
registerLicense('ORg4AjUWIQA/Gnt2VFhhQlJBfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5Wd0JjXnxfcHZcTmZf');


class Finder extends Component {
    constructor(props){
        super(props);
        // this.onBeforeSend = this.onBeforeSend.bind(this);
    }
    
    onBeforeSend = (args)=> {
        console.log("Hello World this is the onbeforesend");
        const token = localStorage.getItem('token'); // get the JWT token from local storage or any other source
        console.log("Before send function invoked")
        const requestData = JSON.parse(args.ajaxSettings.data);
        requestData.userId = localStorage.getItem("user");
        console.log(requestData);
        args.ajaxSettings.data = JSON.stringify(requestData);
        if (token) {
            console.log("Before send function invoked")
            args.ajaxSettings.beforeSend = (xhr)=>{
                console.log(xhr);
                xhr.httpRequest.setRequestHeader('Authorization', `Bearer ${token}`); 
            };
        }
    }
    render(){
        return (
            <div className="control-section w-100 h-100">
                {/* <FileManagerComponent id="file" 
                ajaxSettings={{
                    url: hostUrl + "api/FileManager/FileOperations"
                }}
                navigationPaneSettings={{ 
                    maxWidth: '850px', 
                    minWidth: '140px', 
                    visible: true 
                }}
                > */}
                <FileManagerComponent id="file" 
                ajaxSettings={{
                    url: hostUrl,
                    downloadUrl: hostUrl + 'Download',
                    uploadUrl: hostUrl + 'Upload',
                    getImageUrl: hostUrl + 'GetImage'
                }}
                // ajaxSettings {
                //     url: hostUrl + 'api/AmazonS3Provider/AmazonS3FileOperations'
                // }
                // beforeSend= {(args)=>console.log("This is the good game")}
                beforeSend= {this.onBeforeSend}
                navigationPaneSettings={{ 
                    maxWidth: '850px', 
                    minWidth: '140px', 
                    visible: true 
                }}
                uploadSettings={{
                    maxFileSize: 100000000000
                }}
                >
                    <Inject services={[NavigationPane, DetailsView, Toolbar]}/>
                </FileManagerComponent>
            </div>
        );
    }
}

export default Finder;
