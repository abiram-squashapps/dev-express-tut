import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import Preview from "./Preview";

function AdvancedFormLayout() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
  });
  const [selectedState, setSelectedState] = useState(null);
  let states = [
    { name: "Arizona", code: "Arizona" },
    { name: "California", value: "California" },
    { name: "Florida", code: "Florida" },
    { name: "Ohio", code: "Ohio" },
    { name: "Washington", code: "Washington" },
  ];

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="center">
      {" "}
      <h5>Advanced formLayout from primeNg react </h5>
      <div className="p-fluid p-formgrid p-grid">
        <div className="p-field p-col-12 p-md-6">
          <label htmlFor="firstname6">Firstname</label>
          <InputText
            id="firstname6"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleOnChange}
          />
        </div>
        <div className="p-field p-col-12 p-md-6">
          <label htmlFor="lastname6">Lastname</label>
          <InputText
            id="lastname6"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleOnChange}
          />
        </div>
        <div className="p-field p-col-12">
          <label htmlFor="address">Address</label>
          <InputTextarea
            id="address"
            type="text"
            rows="4"
            name="address"
            value={formData.address}
            onChange={handleOnChange}
          />
        </div>
        <div className="p-field p-col-12 p-md-6">
          <label htmlFor="city">City</label>
          <InputText
            id="city"
            type="text"
            name="city"
            value={formData.city}
            onChange={handleOnChange}
          />
        </div>
        <div className="p-field p-col-12 p-md-3">
          <label htmlFor="state">State</label>
          <Dropdown
            inputId="state"
            name="state"
            value={formData.state}
            options={states}
            onChange={handleOnChange}
            placeholder="Select"
            optionLabel="name"
          />
        </div>
        <div className="p-field p-col-12 p-md-3">
          <label htmlFor="zip">Zip</label>
          <InputText
            id="zip"
            type="text"
            name="zipcode"
            value={formData.zipcode}
            onChange={handleOnChange}
          />
        </div>
        <div className="p-field p-col">
          <Button label="Submit" />
        </div>
      </div>
      <Preview data={{ formData }} />
    </div>
  );
}

export default AdvancedFormLayout;
