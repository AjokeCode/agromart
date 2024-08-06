import { UseStore } from "../store/userstore";

const ContactInfo =()=>{
    const handleChange =(e)=>{
        e.preventaDefault();
        
    }
    return(
        <div className="ci">
            <h1 className="ci-header">Contact Information</h1>
            <div className="ci-flex">
                <div className="ci-flex-1">
                    <label className="ci-label">FirstName</label>
                    <input type="name" placeholder="Ruqayyah" className="ci-input"/>
                </div>
                <div className="ci-flex-1">
                    <label className="ci-label">LastName</label>
                    <input type="name" placeholder="Damilola" className="ci-input"/>
                </div>
            </div>


            <div className="ci-flex">
                <div className="ci-flex-1">
                    <label className="ci-label">Email Address</label>
                    <input type="email" placeholder="Ruqayyahalabi536@gmail.com" className="ci-input"/>
                </div>
                <div className="ci-flex-1">
                    <label className="ci-label">PhoneNumber</label>
                    <input type="tel" placeholder="Damilola" className="ci-input"/>
                </div>
            </div>



            <h1 className="ci-header">Delivery details</h1>
            <div className="ci-flex">
                <div className="ci-flex-1">
                    <label className="ci-label">Street Address 1</label>
                    <input type="name" placeholder="olubuse" className="ci-input"/>
                </div>
                <div className="ci-flex-1">
                    <label className="ci-label">Street Address 2</label>
                    <input type="name" placeholder="Oduduwa" className="ci-input"/>
                </div>
            </div>


            <div className="ci-flex">
                <div className="ci-flex-1">
                    <label className="ci-label">Country</label>
                    <input type="name" placeholder="Nigeria" className="ci-input"/>
                </div>
                <div className="ci-flex-1">
                    <label className="ci-label">City</label>
                    <input type="name" placeholder="Ijebu-ode" className="ci-input"/>
                </div>
            </div>

            <div className="ci-flex">
                <div className="ci-flex-1">
                    <label className="ci-label">State</label>
                    <input type="name" placeholder="Ogun" className="ci-input"/>
                </div>
                <div className="ci-flex-1">
                    <label className="ci-label">Postal code</label>
                    <input type="number" placeholder="222" className="ci-input"/>
                </div>
            </div>

            <h1 className="ci-header">Payment methods</h1>
            <div className="ci-flex">
                <div className="ci-flex-1">
                    <label className="ci-label">Card Number</label>
                    <input type="number" placeholder="XXXX XXXX XXXX" className="ci-input"/>
                </div>
                <div className="ci-flex-1">
                    <label className="ci-label">Card Name</label>
                    <input type="name" placeholder="Ruqayyah" className="ci-input"/>
                </div>
            </div>


            <div className="ci-flex">
                <div className="ci-flex-1">
                    <label className="ci-label">Expiry Date</label>
                    <input type="date" placeholder="12/23" className="ci-input"/>
                </div>
                <div className="ci-flex-1">
                    <label className="ci-label">CVV</label>
                    <input type="number" placeholder="XXXX" className="ci-input"/>
                </div>
            </div>


                <div className="ci-flex-2">
                    <input className="ci-input-2" type="radio"/>
                    <div className="ci-flex-3">
                        <h1 className="ci-header-2">Paypal</h1>
                        <h2 className="ci-header-3">One click per paypal payment</h2>
                    </div>
                </div>



                <div className="ci-flex-2">
                    <input className="ci-input-2" type="radio"/>
                    <div className="ci-flex-3">
                        <h1 className="ci-header-2">Cryptocurrency</h1>
                        <h2 className="ci-header-3">Bitcoin, Etheruem</h2>
                    </div>
                </div>

        </div>
    )
}
export default ContactInfo;
