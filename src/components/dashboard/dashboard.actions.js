export const customizeStep = () => {
  console.log('customize actions')
  return {
    type: 'CUSTOMIZE_DRINK_STEP'
  }
}
export const userInfoStep = () => {
  console.log('userInfo actions')
  return {
    type: 'USERINFO_STEP'
  }
}
export const checkoutStep = () => {
  console.log('checkout actions')
  return {
    type: 'CHECKOUT_STEP'
  }
}
