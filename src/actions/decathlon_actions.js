import * as decathlonActions from '../constants/all_constants'

const getAuth = (payload) => {
    return {
      type: decathlonActions.LOGGED_IN,
      payload
    }
  }
  const getSelectedCategoryProducts = (payload) => {
    return {
      type: decathlonActions.GET_SELECTED_CATEGORY_PRODUCTS,
      payload
    }
  }
  const getSelectedProductDeatils = (payload) => {
    return {
      type: decathlonActions.GET_SELECTED_PRODUCT_DETAILS,
      payload
    }
  }
  const getCatagoriesData = (payload) => {
    return {
      type: decathlonActions.GET_CATOGORIES_DATA,
      payload
    }
  }
  const getElectronicsData = (payload) => {
    return {
      type: decathlonActions.GET_ELECTRONICS_DATA,
      payload
    }
  }
  const getCartItems = (payload) => {
    return {
      type: decathlonActions.GET_CART_ITEMS,
      payload
    }
  }
  const getCartItemsCount = (payload) => {
    return {
      type: decathlonActions.GET_CART_ITEMS_COUNT,
      payload
    }
  }
  const getSavedOrders = (payload) => {
    return {
      type: decathlonActions.GET_SAVED_ORDERS,
      payload
    }
  }
  const getSigninFlag = (payload) => {
    return {
      type: decathlonActions.GET_SIGIN_FLAG,
      payload
    }
  }
  const getCartFlag = (payload) => {
    return {
      type: decathlonActions.GET_CART_FLAG,
      payload
    }
  }
  const getUserLogout = () => {
    return {
      type: decathlonActions.USER_LOGGED_OUT,
      
    }
  }
  export {
    getAuth, getSelectedCategoryProducts,getSelectedProductDeatils,getCatagoriesData,getElectronicsData,
    getCartItems,getCartItemsCount,getSavedOrders,getSigninFlag,getCartFlag,getUserLogout

  }