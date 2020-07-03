import { LightningElement, api } from 'lwc';

const TILE_WRAPPER_SELECTED_CLASS = 'tile-wrapper selected';
const TILE_WRAPPER_UNSELECTED_CLASS = 'tile-wrapper';

// imports
export default class BoatTile extends LightningElement {
    @api boat;
    @api selectedBoatId;

    
    boatId;

    
    // Getter for dynamically setting the background image for the picture
    get backgroundStyle() {
        return `background-image:url(${boat.Picture__c})`;
    }
    
    // Getter for dynamically setting the tile class based on whether the
    // current boat is selected
    get tileClass() {
        if (this.selectedBoatId == this.boat.Id) {
            return this.TILE_WRAPPER_SELECTED_CLASS;
        } else {
            return this.TILE_WRAPPER_UNSELECTED_CLASS;
        }
    }
    
    // Fires event with the Id of the boat that has been selected.
    selectBoat() {
        this.boatId = boat.Id;
        const boatSelect = new CustomEvent('boatselect', { detail:  { boatId: this.boatId } });
        this.dispatchEvent(boatSelect);
    }
  }
  