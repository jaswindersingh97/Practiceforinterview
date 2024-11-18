import React, { useState } from 'react';

const DynamicForm = () => {
  const [fields, setFields] = useState([]); // State to hold the dynamic fields
  const [newField, setNewField] = useState(""); // State for the new field input value

  // Function to add a new field
  const addField = () => {
    if (newField.trim()) {
      setFields([...fields, newField]);
      setNewField(""); // Clear input after adding
    }
  };

  // Function to remove a field
  const removeField = (index) => {
    const updatedFields = fields.filter((_, i) => i !== index);
    setFields(updatedFields);
  };

  // Handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted with fields: ${fields.join(", ")}`);
  };

  return (
    <div>
      <h2>Dynamic Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={newField}
            onChange={(e) => setNewField(e.target.value)}
            placeholder="Enter field name"
          />
          <button type="button" onClick={addField}>Add Field</button>
        </div>

        {/* Render dynamically added fields */}
        <div>
          {fields.map((field, index) => (
            <div key={index}>
              <input
                type="text"
                value={field}
                onChange={(e) => {
                  const updatedFields = [...fields];
                  updatedFields[index] = e.target.value; // Update field value
                  setFields(updatedFields);
                }}
              />
              <button type="button" onClick={() => removeField(index)}>Remove</button>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DynamicForm;
