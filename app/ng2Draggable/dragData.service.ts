import {Injectable} from 'angular2/core';
import {CUSTOMERS} from '../Customer/mock-customer';

@Injectable()
export class DragDataService{
	constructor(){
	}

	getDragData(){
		return Promise.resolve(CUSTOMERS);
	}
}