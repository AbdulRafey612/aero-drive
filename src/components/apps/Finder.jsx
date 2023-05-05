import { DetailsView, FileManagerComponent,  NavigationPane, Toolbar, Inject  } from '@syncfusion/ej2-react-filemanager';
import { registerLicense } from '@syncfusion/ej2-base';
import React, { Component } from "react";
import "../../../public/styles/Finder.css";
let hostUrl = "https://ej2-aspcore-service.azurewebsites.net/";


registerLicense('Mgo+DSMBaFt+QHJqVk1hXk5Hd0BLVGpAblJ3T2ZQdVt5ZDU7a15RRnVfR11gSH5RckVrW3pXdA==;Mgo+DSMBPh8sVXJ1S0R+X1pFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF5jTH5Qd0VhXX9WcnNQQg==;ORg4AjUWIQA/Gnt2VFhiQlJPd11dXmJWd1p/THNYflR1fV9DaUwxOX1dQl9gSXtTdURjW3teeHZcRmQ=;MTkwODg3MkAzMjMxMmUzMjJlMzNuNFoyVWFWVkJNNklsZ3MzVXZyanJEaHNvVHJ3aUZHN3lHRVhUUjBHQmM0PQ==;MTkwODg3M0AzMjMxMmUzMjJlMzNram1zQnlvcVBhTFh2aXZBV2QrZFErMWlSaWV2ZnBtRkRBbjBzMlJOZVBNPQ==;NRAiBiAaIQQuGjN/V0d+Xk9HfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5WdkZiWX1acHxWQWRY;MTkwODg3NUAzMjMxMmUzMjJlMzNHTnpNWUx4SXl4OVFpV0RCR2xieXV1eDhsSURkRHNxdnVkQXpyRHZjWSt3PQ==;MTkwODg3NkAzMjMxMmUzMjJlMzNNSXJ1TzJjNmdmTmduYUFabEVaM1dKUjFwN0pGbndiNkZpZ1hVUnZlQUVFPQ==;Mgo+DSMBMAY9C3t2VFhiQlJPd11dXmJWd1p/THNYflR1fV9DaUwxOX1dQl9gSXtTdURjW3teeHBSQmQ=;MTkwODg3OEAzMjMxMmUzMjJlMzNvQWs3eFZTMm5BeXVENEF5ZlBBM3VFa2U1WURNYy9PTnlKeGhlVHd0TERNPQ==;MTkwODg3OUAzMjMxMmUzMjJlMzNQTFcyUzNDV3orTHF4NGdwMnQxUkg1RitZaEFkRTlYeUp6dVBoV2hwODR3PQ==;MTkwODg4MEAzMjMxMmUzMjJlMzNHTnpNWUx4SXl4OVFpV0RCR2xieXV1eDhsSURkRHNxdnVkQXpyRHZjWSt3PQ==');

class Finder extends Component {
    render(){
        return (
            <div className="control-section w-100 h-100">
                <FileManagerComponent id="file" 
                ajaxSettings={{
                    url: hostUrl + "api/FileManager/FileOperations"
                }}
                navigationPaneSettings={{ 
                    maxWidth: '850px', 
                    minWidth: '140px', 
                    visible: true 
                }}
                >
                    <Inject services={[NavigationPane, DetailsView, Toolbar]}/>
                </FileManagerComponent>
            </div>
        );
    }
}

export default Finder;