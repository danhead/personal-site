export const sm = "30rem"
export const md = "40rem"
export const smUp = contents => `
@media (min-width: 30rem) {
  ${contents}
}
`
export const mdUp = contents => `
@media (min-width: 40rem) {
  ${contents}
}
`
