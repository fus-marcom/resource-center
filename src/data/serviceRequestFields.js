export const singleLineFields = [
  {
    name: 'Name',
    required: true,
    type: 'isAlpha',
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
    type: 'isNumeric',
    error: 'Not a valid phone number'
  },
  {
    name: 'Department',
    required: false,
    type: 'isAlphanumeric',
    error: 'Text is not valid'
  }
]
export const multiLineFields = [
  {
    name: 'Project Description',
    required: true,
    type: 'isAlphanumeric',
    error: 'Not a valid project description'
  },
  {
    name: 'Project Goal',
    required: false,
    type: 'isAlphanumeric',
    error: 'Not a valid goal'
  },
  {
    name: 'Project Budget',
    required: false,
    type: 'isNumeric',
    error: 'Not a valid number'
  },
  {
    name: 'Key Messages',
    required: false,
    type: 'isAlphanumeric',
    error: 'Not a valid key message'
  },
  {
    name: 'Primary Target Audience',
    required: false,
    type: 'isAlphanumeric',
    error: 'Not a valid target'
  },
  {
    name: 'Secondary Target Audience',
    required: false,
    type: 'isAlphanumeric',
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
    type: 'isAlphanumeric',
    error: 'Not a valid comment'
  }
]

export const leftCheckboxes = [
  {
    name: 'Photography',
    info: 'Info Text 1',
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
    </ul>`
  },
  { name: 'Simple2', info: 'Info Text 2', icon: false },
  { name: 'Simple3', info: 'Info Text 3', icon: false },
  { name: 'Simple4', info: 'Info Text 4', icon: false },
  { name: 'Simple5', info: 'Info Text 5', icon: false },
  { name: 'Simple6', info: 'Info Text 6', icon: false }
]

export const rightCheckboxes = [
  { name: 'Simple7', info: 'Info Text 7' },
  { name: 'Simple8', info: 'Info Text 8' },
  { name: 'Simple9', info: 'Info Text 9' },
  { name: 'Simple10', info: 'Info Text 10' },
  { name: 'Simple11', info: 'Info Text 11' },
  { name: 'Simple12', info: 'Info Text 12' }
]
