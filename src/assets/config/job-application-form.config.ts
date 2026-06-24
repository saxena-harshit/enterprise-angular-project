export const JOB_APPLICATION_FORM_CONFIG: any = {
  formName: 'Job Application Form',
  steps: [
    {
      stepNumber: 1,
      label: 'Personal Information',
      fields: [
        {
          name: 'fullName',
          type: 'text',
          label: 'Full Name',
          required: true,
          placeholder: 'Enter your full name',
        },
        {
          name: 'email',
          type: 'email',
          label: 'Email Address',
          required: true,
          placeholder: 'Enter your Email',
        },
        {
          name: 'mobileNumber',
          type: 'tel',
          label: 'Mobile Number',
          required: true,
          placeholder: 'Enter your Contact No',
        },
        {
          name: 'dateOfBirth',
          type: 'date',
          label: 'Date Of Birth',
        },
        {
          name: 'gender',
          type: 'radio',
          label: 'Gender',
          options: ['Male', 'Female', 'Other'],
        },
        {
          name: 'panNumber',
          type: 'text',
          label: 'PAN Number',
          required: true,
          placeholder: 'Enter Your PAN no',
        },
        {
          name: 'aadhaarNumber',
          type: 'text',
          label: 'Aadhaar Number',
          required: true,
          placeholder: 'Enter Your Adhar no',
        },
        {
          name: 'address',
          type: 'group',
          label: 'Address',
          fields: [
            {
              name: 'currentAddress',
              type: 'group',
              label: 'Current Address',
              fields: [
                {
                  name: 'addressLine1',
                  type: 'text',
                  label: 'Address Line 1',
                },
                {
                  name: 'addressLine2',
                  type: 'text',
                  label: 'Address Line 2',
                },
                {
                  name: 'city',
                  type: 'text',
                  label: 'City',
                },
                {
                  name: 'state',
                  type: 'text',
                  label: 'State',
                },
                {
                  name: 'pincode',
                  type: 'text',
                  label: 'Pincode',
                },
              ],
            },
            {
              name: 'permanentAddress',
              type: 'group',
              label: 'Permanent Address',
              fields: [
                {
                  name: 'addressLine1',
                  type: 'text',
                  label: 'Address Line 1',
                },
                {
                  name: 'addressLine2',
                  type: 'text',
                  label: 'Address Line 2',
                },
                {
                  name: 'city',
                  type: 'text',
                  label: 'City',
                },
                {
                  name: 'state',
                  type: 'text',
                  label: 'State',
                },
                {
                  name: 'pincode',
                  type: 'text',
                  label: 'Pincode',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      stepNumber: 2,
      label: 'Education Details',
      fields: [
        {
          name: 'educations',
          type: 'formArray',
          label: 'Education Details',
          addButtonText: 'Add Education',
          fields: [
            {
              name: 'qualification',
              type: 'select',
              label: 'Qualification',
              options: [
                '10th',
                '12th',
                'Diploma',
                'B.Tech',
                'M.Tech',
                'BCA',
                'MCA',
                'MBA',
              ],
            },
            {
              name: 'specialization',
              type: 'text',
              label: 'Specialization',
              placeholder: ' Enter Specialization',
            },
            {
              name: 'instituteName',
              type: 'text',
              label: 'Institute Name',

              placeholder: ' Enter Institute',
            },
            {
              name: 'university',
              type: 'text',
              label: 'University / Board',
              placeholder: ' Enter University / Board',
            },
            {
              name: 'percentageOrCgpa',
              type: 'number',
              label: 'Percentage / CGPA',

              placeholder: ' Enter Percentage / CGPA',
            },
            {
              name: 'passingYear',
              type: 'date',
              label: 'Passing Year',
            },
          ],
        },
      ],
    },
    {
      stepNumber: 3,
      label: 'Work Experience',
      fields: [
        {
          name: 'totalExperience',
          type: 'number',
          label: 'Total Experience (Years)',
          placeholder: '0',
        },
        {
          name: 'experiences',
          type: 'formArray',
          label: 'Previous Companies',
          addButtonText: 'Add Company',
          fields: [
            {
              name: 'companyName',
              type: 'text',
              label: 'Company Name',

              placeholder: ' Enter Company Name',
            },
            {
              name: 'designation',
              type: 'text',
              label: 'Designation',

              placeholder: ' Enter Designation',
            },
            {
              name: 'yoe',
              type: 'number',
              label: 'Years Of Experience',
              placeholder: ' Enter YOE',
            },
          ],
        },
        {
          name: 'currentCompany',
          type: 'group',
          label: 'Current Company',
          fields: [
            {
              name: 'companyName',
              type: 'text',
              label: 'Company Name',
              placeholder: ' Enter Current Company Name',
            },
            {
              name: 'designation',
              type: 'text',
              label: 'Designation',
              placeholder: ' Enter Designation',
            },
            {
              name: 'joiningDate',
              type: 'date',
              label: 'Joining Date',
            },
            {
              name: 'lastWorkingDate',
              type: 'date',
              label: 'Expected Last Working Date',
            },
          ],
        },
      ],
    },
    {
      stepNumber: 4,
      label: 'Skills & Certifications',
      fields: [
        {
          name: 'skills',
          type: 'multiselect-search',
          label: 'Skills',
          displayType: 'chips',
          allowCustomValue: true,
          options: [
            'Angular',
            'React',
            'Vue',
            'Java',
            'Spring Boot',
            'NodeJS',
            'TypeScript',
            'JavaScript',
            'SQL',
            'Oracle',
            'MongoDB',
            'AWS',
            'Azure',
            'Docker',
            'Kubernetes',
            'Git',
            'Jenkins',
          ],
        },
        {
          name: 'certifications',
          type: 'textarea',
          label: 'Certifications',
        },
        {
          name: 'languagesKnown',
          type: 'multiselect-search',
          label: 'Languages Known',
          displayType: 'chips',
          options: ['English', 'Hindi', 'French', 'German', 'Spanish'],
        },
      ],
    },
    {
      stepNumber: 5,
      label: 'Compensation & Availability',
      fields: [
        {
          name: 'currentCTC',
          type: 'number',
          label: 'Current CTC (LPA)',
          placeholder: '0',
        },
        {
          name: 'expectedCTC',
          type: 'number',
          label: 'Expected CTC (LPA)',
          placeholder: '0',
        },
        {
          name: 'noticePeriod',
          type: 'number',
          label: 'Notice Period (Days)',
          placeholder: '0',
        },
      ],
    },
    {
      stepNumber: 6,
      label: 'Documents',
      fields: [
        {
          name: 'resume',
          type: 'file',
          label: 'Resume',
          required: true,
        },
        {
          name: 'profilePhoto',
          type: 'file',
          label: 'Profile Photo',
        },
        {
          name: 'panCard',
          type: 'file',
          label: 'PAN Card',
        },
        {
          name: 'aadhaarCard',
          type: 'file',
          label: 'Aadhaar Card',
        },
      ],
    },
    {
      stepNumber: 7,
      label: 'Review & Submit',
      fields: [],
    },
  ],
};
