export const singleLineFields = [
  { name: 'Name', required: true, type: 'isAlpha', error: 'Not a valid name' },
  {
    name: 'Email',
    required: true,
    type: 'isEmail',
    error: 'Not a valid email'
  },
  {
    name: 'Phone',
    required: true,
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
    required: true,
    type: 'isAlphanumeric',
    error: 'Not a valid goal'
  },
  {
    name: 'Project Budget',
    required: true,
    type: 'isNumeric',
    error: 'Not a valid number'
  },
  {
    name: 'Key Messages',
    required: true,
    type: 'isAlphanumeric',
    error: 'Not a valid key message'
  },
  {
    name: 'Primary Target Audience',
    required: true,
    type: 'isAlphanumeric',
    error: 'Not a valid target'
  },
  {
    name: 'Secondary Target Audience',
    required: true,
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
  { name: 'Photography', info: 'Info Text 1' },
  { name: 'Simple2', info: 'Info Text 2' },
  { name: 'Simple3', info: 'Info Text 3' },
  { name: 'Simple4', info: 'Info Text 4' },
  { name: 'Simple5', info: 'Info Text 5' },
  { name: 'Simple6', info: 'Info Text 6' }
]

export const rightCheckboxes = [
  { name: 'Simple7', info: 'Info Text 7' },
  { name: 'Simple8', info: 'Info Text 8' },
  { name: 'Simple9', info: 'Info Text 9' },
  { name: 'Simple10', info: 'Info Text 10' },
  { name: 'Simple11', info: 'Info Text 11' },
  { name: 'Simple12', info: 'Info Text 12' }
]
