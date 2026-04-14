export const USER_SIGN_UP_FORM_CONFIG = {
  formName: 'UserForm',

  steps: [
    // ✅ STEP 1: Basic Info
    {
      label: 'Basic Info',
      fields: [
        { "name": "firstName", "label": "First Name", "type": "text", "required": true },
        { "name": "lastName", "label": "Last Name", "type": "text", "required": true },
        { "name": "maidenName", "label": "Maiden Name", "type": "text" },
        { "name": "age", "label": "Age", "type": "number" },
        { "name": "gender", "label": "Gender", "type": "select", "options": ["male", "female"] }
      ]
    },

    // ✅ STEP 2: Contact Info
    {
      label: 'Contact',
      fields: [
        { "name": "email", "label": "Email", "type": "email", "required": true },
        { "name": "phone", "label": "Phone", "type": "text" },
        { "name": "username", "label": "Username", "type": "text", "required": true },
        { "name": "password", "label": "Password", "type": "password", "required": true }
      ]
    },

    // ✅ STEP 3: Personal Details
    {
      label: 'Personal Details',
      fields: [
        { "name": "birthDate", "label": "Birth Date", "type": "date" },
        { "name": "image", "label": "Profile Image", "type": "url" },
        { "name": "bloodGroup", "label": "Blood Group", "type": "select", "options": ["A+","A-","B+","B-","AB+","AB-","O+","O-"] },
        { "name": "height", "label": "Height", "type": "number" },
        { "name": "weight", "label": "Weight", "type": "number" },
        { "name": "eyeColor", "label": "Eye Color", "type": "text" },

        // ✅ GROUP stays SAME
        {
          "name": "hair",
          "type": "group",
          "label": "Hair Details",
          "fields": [
            { "name": "color", "label": "Hair Color", "type": "text" },
            { "name": "type", "label": "Hair Type", "type": "text" }
          ]
        }
      ]
    },

    // ✅ STEP 4: Address
    {
      label: 'Address',
      fields: [
        {
          "name": "address",
          "type": "group",
          "label": "Address",
          "fields": [
            { "name": "address", "label": "Street", "type": "text" },
            { "name": "city", "label": "City", "type": "text" },
            { "name": "state", "label": "State", "type": "text" },
            { "name": "postalCode", "label": "Postal Code", "type": "text" },

            {
              "name": "coordinates",
              "type": "group",
              "label": "Coordinates",
              "fields": [
                { "name": "lat", "label": "Latitude", "type": "number" },
                { "name": "lng", "label": "Longitude", "type": "number" }
              ]
            }
          ]
        }
      ]
    },

    // ✅ STEP 5: Professional
    {
      label: 'Professional',
      fields: [
        { "name": "university", "label": "University", "type": "text" },

        {
          "name": "company",
          "type": "group",
          "label": "Company",
          "fields": [
            { "name": "department", "label": "Department", "type": "text" },
            { "name": "name", "label": "Company Name", "type": "text" },
            { "name": "title", "label": "Job Title", "type": "text" }
          ]
        }
      ]
    },


  // ✅ STEP 6: Financial
  {
    label: 'Financial',
    fields: [
      {
        "name": "bank",
        "type": "group",
        "label": "Bank Details",
        "fields": [
          { "name": "cardNumber", "label": "Card Number", "type": "text" },
          { "name": "cardType", "label": "Card Type", "type": "text" },
          { "name": "currency", "label": "Currency", "type": "text" },
          { "name": "iban", "label": "IBAN", "type": "text" }
        ]
      },

      {
        "name": "crypto",
        "type": "group",
        "label": "Crypto",
        "fields": [
          { "name": "coin", "label": "Coin", "type": "text" },
          { "name": "wallet", "label": "Wallet", "type": "text" },
          { "name": "network", "label": "Network", "type": "text" }
        ]
      }
    ]
  },

  // ✅ STEP 7: Extra (NEW STEP 🔥)
  {
    label: 'Extra Info',
    fields: [
      { "name": "macAddress", "label": "MAC Address", "type": "text" },
      { "name": "ein", "label": "EIN", "type": "text" },
      { "name": "ssn", "label": "SSN", "type": "text" },
      { "name": "userAgent", "label": "User Agent", "type": "textarea" },

      {
        "name": "role",
        "label": "Role",
        "type": "select",
        "options": ["admin", "moderator", "user"]
      }
    ]
  }

]  
    
  
};