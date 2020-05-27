import React from "react";

const PopupForm = ({ onSubmit }) => {
  // call services to load these info for selection

  return (
    <form onSubmit={onSubmit} className="modal__form">
      <h2 className="modal__form__h2">Additional Information</h2>
      <div className="form-group">
        <label className="modal__form__control-label" htmlFor="name">
          Alias
        </label>
        <input
          className="modal__form__control-input"
          id="name"
          placeholder="Enter name/alias"
        />
        <small className="modal__form__control-small">Error Message</small>
      </div>
      <div className="form-group">
        <label className="modal__form__control-label" htmlFor="agerange">
          Age Range
        </label>
        <select
          id="agerange"
          className="modal__form__control-input"
          placeholder="Select Agerange"
        >
          <option value="1">one</option>
          <option value="2">two</option>
          <option value="3">three</option>
          <option value="4">four</option>
        </select>
        <small className="modal__form__control-small">Error Message</small>
      </div>
      <div className="form-group">
        <label className="modal__form__control-label" htmlFor="country">
          Country
        </label>
        <select
          className="modal__form__control-input"
          id="country"
          placeholder="Select Country"
        >
          <option value="1">one</option>
          <option value="2">two</option>
          <option value="3">three</option>
          <option value="4">four</option>
        </select>
        <small className="modal__form__control-small">Error Message</small>
      </div>
      <div className="form-group">
        <label className="modal__form__control-label" htmlFor="city">
          City
        </label>
        <select
          className="modal__form__control-input"
          id="city"
          placeholder="Select City"
        >
          <option value="1">one</option>
          <option value="2">two</option>
          <option value="3">three</option>
          <option value="4">four</option>
        </select>
        <small className="modal__form__control-small">Error Message</small>
      </div>
      <div className="form-group">
        <label className="modal__form__control-label" htmlFor="gender">
          Gender
        </label>
        <select
          className="modal__form__control-input"
          id="gender"
          placeholder="Select Gender"
        >
          <option value="1">one</option>
          <option value="2">two</option>
          <option value="3">three</option>
          <option value="4">four</option>
        </select>
        <small className="modal__form__control-small">Error Message</small>
      </div>
      <div className="form-group">
        <label className="modal__form__control-label" htmlFor="ethnicity">
          Ethnicity
        </label>
        <select
          className="modal__form__control-input"
          id="ethnicity"
          placeholder="Select Ethnicity"
        >
          <option value="1">one</option>
          <option value="2">two</option>
          <option value="3">three</option>
          <option value="4">four</option>
        </select>
        <small className="modal__form__control-small">Error Message</small>
      </div>
      <div>
        <button type="submit" className="modal__form__button">
          Submit
        </button>
      </div>
    </form>
  );
};

export default PopupForm;
