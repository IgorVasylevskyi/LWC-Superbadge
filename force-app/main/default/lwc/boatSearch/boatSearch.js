import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
//import getBoats from '@salesforce/apex/BoatDataService.getBoats';

 export default class BoatSearch extends NavigationMixin(LightningElement) {
    isLoading = false;

    boatTypeId;
    boats;
    
    // Handles loading event
    handleLoading() {

    }
    
    // Handles done loading event
    handleDoneLoading() {

    }
    
    // Handles search boat event
    // This custom event comes from the form
    searchBoats(event) { 
        this.boatTypeId = event.detail.boatTypeId;
        console.log('boatSearch.js: boatTypeId = ' + this.boatTypeId);
    }
    
    createNewBoat() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Boat__c',
                actionName: 'new'
            }
        });
    }

}
  