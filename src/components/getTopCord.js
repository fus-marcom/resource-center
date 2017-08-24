import _ from 'lodash'

export const sliceHeaders = headers => {
  const headerPositions = []
  _.mapValues(headers, ({ offsetTop }) => {
    headerPositions.push(offsetTop)
  })
  return headerPositions
}
