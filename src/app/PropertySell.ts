import { Property } from './Property'
import { User } from './User'

export class PropertySell{

    propertySellId : number
    property : Property
    seller : User
    buyer : User

    constructor(property, seller, buyer){
        this.property = property
        this.seller=seller
        this.buyer=buyer
    }
}