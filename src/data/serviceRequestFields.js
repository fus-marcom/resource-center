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
  { name: 'Department', required: false, type: 'isAlphanumeric',
  error: 'Text is not valid' }
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
