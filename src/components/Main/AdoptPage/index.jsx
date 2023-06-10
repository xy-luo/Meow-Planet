import Button from '../../Button';
import availableCats from './availableCatsList.js';
import "../../../css/AdoptPage.css";

import { useRef, useState } from 'react';

function AdoptPage() {
    const dialogRef = useRef();
    const [ableToSubmit, setAbletoSubmit] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        confirmEmail: "",
        reasonForAdoption: "0",
        otherReasonForAdoption: "",
        isDonated: false,
        shipAddress: "",
        isSameAddress: false,
        billAddress: "",
    })

    const [formErr, setFormErr] = useState({
        nameErr: <></>,
        emailErr: <></>,
        confirmEmailErr: <></>,
        reasonForAdoptionErr: <></>,
        otherReasonForAdoptionErr: <></>,
        shipAddressErr: <></>,
        billAddressErr: <></>,
    })
    const formErrAlert = {
        requiredAlert: (<div className='err-alert'>This field is required</div>),
        emailErr: (<div className='err-alert'>This field be a valid email address including a @</div>),
        confirmEmailErr: <div className='err-alert'>This field must match the provided email address</div>,
        otherReasonErr: <div className='err-alert'>This field should not be empty</div>
    }

    // validation functions
    function validateName(name) {
        setFormErr({ ...formErr, nameErr: name === "" ? formErrAlert.requiredAlert : <></> });
        return !(name === "");
    }
    function validateEmail(email) {
        if (email === "") {
            setFormErr({ ...formErr, emailErr: formErrAlert.requiredAlert });
            return false;
        }
        else if (!email.includes("@")) {
            setFormErr({ ...formErr, emailErr: formErrAlert.emailErr });
            return false;
        }
        else {
            setFormErr({ ...formErr, emailErr: <></> });
            return true;
        }
    }
    function validateConfirmEmail(confirmEmail) {
        if (confirmEmail === "") {
            setFormErr({ ...formErr, confirmEmailErr: formErrAlert.requiredAlert });
            return false;
        }
        else if (confirmEmail !== form.email) {
            setFormErr({ ...formErr, confirmEmailErr: formErrAlert.confirmEmailErr });
            return false;
        }
        else {
            setFormErr({ ...formErr, confirmEmailErr: <></> });
            return true;
        }
    }
    function validateAdoptReason(reasonForAdoption) {
        setFormErr({ ...formErr, reasonForAdoptionErr: reasonForAdoption === "0" ? formErrAlert.requiredAlert : <></> })
        return !(reasonForAdoption === "0");
    }
    function validateOtherReasonForAdoption(otherReasonForAdoption) {
        if (otherReasonForAdoption === "") {
            setFormErr({ ...formErr, otherReasonForAdoptionErr: formErrAlert.requiredAlert });
            return false;
        }
        else if (otherReasonForAdoption.trim() === "") {
            setFormErr({ ...formErr, otherReasonForAdoptionErr: formErrAlert.otherReasonErr });
            return false;
        }
        else {
            setFormErr({ ...formErr, otherReasonForAdoptionErr: <></> });
            return true;
        }
    }
    function validateShipAddress(shipAddress) {
        if (shipAddress.trim() === "") {
            setFormErr({ ...formErr, shipAddressErr: formErrAlert.requiredAlert });
            return false;
        }
        else {
            setFormErr({ ...formErr, shipAddressErr: <></> });
            return true;
        }
    }
    function validateBillAddress(billAddress) {
        if (billAddress.trim() == "") {
            setFormErr({ ...formErr, billAddressErr: formErrAlert.requiredAlert });
            return false;
        }
        else {
            setFormErr({ ...formErr, billAddressErr: <></> });
            return true;
        }
    }

    function validateAll() {
        let isFormValid = true;
        isFormValid = isFormValid && validateName(form.name) && validateEmail(form.email) && validateConfirmEmail(form.confirmEmail) && validateAdoptReason(form.reasonForAdoption);
        if (form.reasonForAdoption === "7") {
            isFormValid = isFormValid && validateOtherReasonForAdoption(form.otherReasonForAdoption);
        }
        if (form.isDonated === true) {
            isFormValid = isFormValid && validateShipAddress(form.shipAddress) && validateBillAddress(form.billAddress);
        }
        return isFormValid;
    }

    // panel section render
    const panelList = (availableCats.map(item => {
        return (
            <div className="adopt-panel">
                <div className='adopt-panel-img'>
                    <img
                        className="panel-image"
                        src={require(`../../../img/availableCatImgs/${item.imgSrc}`)}
                        alt={item.imgAlt}
                    />
                    <p>
                        <a
                            className="adopt-link"
                            href='./AdoptPage.html'
                            onClick={
                                (e) => {
                                    e.preventDefault();
                                    dialogRef.current.showModal();
                                }
                            }
                        >Apply for Adoption</a>
                    </p>
                </div>

                <h3 className='adopt-panel-header'>{item.profile.name}</h3>

                <ul className='adopt-panel-list'>
                    <li><span className='panel-list-label'>Age: </span>{item.profile.age}</li>
                    <li><span className='panel-list-label'>Sex: </span>{item.profile.sex}</li>
                    <li><span className='panel-list-label'>Weight: </span>{item.profile.weight}</li>
                    <li><span className='panel-list-label'>Breed: </span>{item.profile.breed}</li>
                    <li><span className='panel-list-label'>Location: </span>{item.profile.location}</li>
                </ul>

                <div className='adopt-panel-text'>
                    <span className='panel-list-label'>About me: </span>
                    <p>
                        {item.profile.description}
                    </p>
                </div>
            </div>
        );
    }));

    // form input section render
    const formInputSection = <>
        <label className="form-label">
            <span className="form-text">Full Name: <span className="required-sig"> * required</span></span>
            <input className="form-input application-name" name="name" type="text"
                onBlur={(e) => {
                    validateName(e.target.value, formErrAlert);
                    setForm({ ...form, name: e.target.value });
                }}
            />
            {formErr.nameErr}
        </label>
        <label className="form-label">
            <span className="form-text">Email: <span className="required-sig"> * required</span></span>
            <input className="form-input application-email" name="email" type="text"
                onBlur={(e) => {
                    validateEmail(e.target.value, formErrAlert);
                    setForm({ ...form, email: e.target.value })
                }}
            />
            {formErr.emailErr}
        </label>
        <label className="form-label">
            <span className="form-text">Confirm Email: <span className="required-sig"> * required</span></span>
            <input className="form-input application-email-confirm" name="confirmEmail" type="text"
                onBlur={(e) => {
                    validateConfirmEmail(e.target.value, formErrAlert);
                    setForm({ ...form, confirmEmail: e.target.value })
                }}
            />
            {formErr.confirmEmailErr}
        </label>

        <label className="form-label">
            <span className="form-text">Why do you want to adopt this animal: <span className="required-sig"> * required</span></span>
            <select
                className="form-input application-reason"
                name="reasonForAdoption"
                onChange={(e) => {
                    validateAdoptReason(e.target.value, formErrAlert);
                    setForm({ ...form, reasonForAdoption: e.target.value })
                }}
            >
                <option value="0" className='select-default-option'></option>
                <option value="1">Adorable</option>
                <option value="2">Save more lives</option>
                <option value="3">Brighten up your routine</option>
                <option value="4">Cost less</option>
                <option value="5">Good for mental health</option>
                <option value="6">Want a companion</option>
                <option value="7">Ohters</option>
            </select>
            {formErr.reasonForAdoptionErr}
        </label>
        {form.reasonForAdoption !== "7" ? <></> :
            (<label className="form-label">
                <span className="form-text">Please specify the other reason: <span className="required-sig"> * required</span></span>
                <textarea className="form-input application-other-reason" name="otherReasonForAdoption" rows="5" maxLength="3000"
                    onBlur={(e) => {
                        validateOtherReasonForAdoption(e.target.value, formErrAlert);
                        setForm({ ...form, otherReasonForAdoption: e.target.value });
                    }}
                ></textarea>
                {formErr.otherReasonForAdoptionErr}
            </label>)}

        <label className="form-label form-checkbox-label">
            <input className="form-checkbox-input" name="isDonated" type="checkbox"
                onChange={(e) => setForm({ ...form, isDonated: e.target.checked })}
            />
            <span>Do you want to donate and receive our montly magazine?</span>
        </label>

        {form.isDonated != true ? <></> :
            <>
                <label className="form-label">
                    <span className="form-text">Shipping Address: <span className="required-sig"> * required</span></span>
                    <input className="form-input" name="shipAddress" type="text"
                        onChange={(e) => {
                            if (form.isSameAddress) {
                                form.billAddress = e.target.value;
                            }
                            setForm({ ...form, shipAddress: e.target.value, billAddress: form.billAddress });
                        }}
                        onBlur={(e) => {
                            validateShipAddress(e.target.value, formErrAlert);
                        }}
                    />
                    {formErr.shipAddressErr}
                </label>
                <label className="form-label form-checkbox-label">
                    <input className="form-checkbox-input" name="isSameAddress" type="checkbox"
                        onChange={(e) => {
                            if (e.target.checked) {
                                setForm({ ...form, isSameAddress: true, billAddress: form.shipAddress })
                            } else {
                                setForm({ ...form, isSameAddress: false});
                                validateBillAddress(form.billAddress);
                            }
                        }}
                    />
                    <span>Billing address same as shipping address</span>
                </label>
                <label className="form-label">
                    <span className="form-text">Billing Address: <span className="required-sig"> * required</span></span>
                    <input className="form-input " name="billAddress" type="text"
                        value={form.billAddress}
                        disabled={form.isSameAddress}
                        onChange={(e) => {
                            setForm({ ...form, billAddress: e.target.value });
                        }}
                        onBlur={(e) => {
                            validateBillAddress(e.target.value);
                        }}
                    />
                    {!form.isSameAddress && formErr.billAddressErr}
                </label>
            </>}
    </>

    // page render
    return (
        <div className="adopt-page">
            {/* form */}
            <dialog className="modal" ref={dialogRef}>
                <form className="form" action="/submit" method="post">
                    <h3 className="form-title">Apply for Adoption</h3>
                    {formInputSection}
                    <div className='form-submit-hint'>{ableToSubmit ? <>Submiited Successfully!</> : <></>}</div>
                    <div className="form-buttons">
                        <Button className="button-submit" type="submit" visual="button" ariaLabel="click to submit form" onClick={(e) => { e.preventDefault(); setAbletoSubmit(validateAll()) }}>Submit</Button>
                        <Button className="button-cancel" type="button" visual="button" ariaLabel="click to leave the form" onClick={() => { dialogRef.current.close() }}>Cancel</Button>
                    </div>
                </form>
            </dialog>

            {/* render page */}
            <h2 className='adopt-title'>
                Currently Available Cats
            </h2>
            <div className='adopt-panels'>
                {panelList}
            </div>
        </div>
    )
}

export default AdoptPage;