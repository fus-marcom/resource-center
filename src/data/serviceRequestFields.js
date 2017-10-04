export const singleLineFields = [
  {
    name: 'Name',
    required: true,
    type: 'minLength:3',
    error: 'Not a valid name'
  },
  {
    name: 'Email',
    required: true,
    type: 'isEmail',
    error: 'Not a valid email'
  },
  {
    name: 'Phone',
    required: false,
    type: 'minLength:3',
    error: 'Not a valid phone number'
  },
  {
    name: 'Department',
    required: false,
    type: null,
    error: 'Text is not valid'
  }
]
export const multiLineFields = [
  {
    name: 'Project Description',
    required: true,
    type: null,
    error: 'Not a valid project description'
  },
  {
    name: 'Project Goal',
    required: false,
    type: null,
    error: 'Not a valid goal'
  },
  {
    name: 'Project Budget',
    required: false,
    type: null,
    error: 'Not a valid number'
  },
  {
    name: 'Key Messages',
    required: false,
    type: null,
    error: 'Not a valid key message'
  },
  {
    name: 'Primary Target Audience',
    required: false,
    type: null,
    error: 'Not a valid target'
  },
  {
    name: 'Secondary Target Audience',
    required: false,
    type: null,
    error: 'Not a valid target'
  },
  {
    name: 'Project Contact (if other than yourself)',
    required: false,
    type: null,
    error: null
  },
  {
    name: 'Comments',
    required: false,
    type: null,
    error: 'Not a valid comment'
  }
]

export const leftCheckboxes = [
  { name: 'Citation Writing' },
  { name: 'Direct Mail Piece' },
  { name: 'Editing/Proofreading' },
  { name: 'Email Blast' },
  { name: 'Event Program' },
  { name: 'Invitations' },
  {
    name: 'Photography',
    icon: true,
    dialogTitle: 'Photography',
    dialogText: `<p>Photography in addition to events listed below is dependent upon student photographer availability.</p><h3>Events covered:</h3>
    <ul>
      <li>Graduation </li>
      <li>Nursing Graduation</li>
      <li>Alumni Awards</li>
      <li>Faculty Awards</li>
      <li>Employee Breakfast</li>
      <li>Move-In Day</li>
      <li>Poverello Award</li>
      <li>Founders Association Awards</li>
      <li>March for Life</li>
      <li>Rehearsal for Anathan Theatre</li>
      <li>Bishop's Requests</li>
      <li>Homecoming Events</li>
      <li>Festival of Praise (1)</li>
      <li>High Profile Talks</li>
      <li>Feast of St. Francis Mass</li>
      <li>Resurrection Party</li>
      <li>Holy Thursday Mass</li>
      <li>Baccalaureate Mass</li>
      <li>Opening of Orientation</li>
      <li>Opening Convocation and Mass</li>
      <li>Oath of Fidelity</li>
      <li>Vocations Fair</li>
    </ul>`,
    conditionalFields: [
      {
        name: 'Photography Event Time',
        required: true,
        type: null
      },
      {
        name: 'Photography Event Location',
        required: true,
        type: null
      }
    ]
  },
  { name: 'Print Ad' },
  { name: 'Printed Literature (Brochure,Viewbook)' },
  { name: 'Radio Ad' },
  { name: 'Reprint/Update Existing Piece' }
]

export const rightCheckboxes = [
  { name: 'Social Media Ad' },
  { name: 'Social Media Post' },
  { name: 'Television Ad' },
  {
    name: 'Video',
    conditionalFields: [
      {
        name: 'Video Event Time',
        required: true,
        type: null
      },
      {
        name: 'Video Event Location',
        required: true,
        type: null
      }
    ]
  },
  { name: 'Website (Content Update)' },
  { name: 'Website (Event Posting)' },
  { name: 'Website (New Page/Section)' },
  { name: 'Writing' },
  { name: 'Other' },
  { name: 'Not sure what I need' }
]
