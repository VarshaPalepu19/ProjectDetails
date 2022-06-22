import { LightningElement,wire,track} from 'lwc';
import getDetails  from '@salesforce/apex/ProjectController.getDetails';
export default class LwcExample extends LightningElement {
    @track item;
    @wire(getDetails) item({error,data}){
        if(data){
            this.item=data;
            this.error=error;
        }
        else if(error){
            this.error=error;
            this.item=undefined;
        }
    }
}