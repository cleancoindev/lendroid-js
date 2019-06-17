export const API_ENDPOINT = 'http://localhost:19080'
export const API_LOAN_REQUESTS = 'http://127.0.0.1:5000'

export const DEFAULT_WRANGLERS = [
  {
    label: 'Default Simple Wrangler',
    address: '0x0f02a30cA336EC791Ac8Cb40816e4Fc5aeB57E38',
    apiLoanRequests: 'https://lendroidwrangler.com'
  }]

export const DEFAULT_CONTRACTS = {
  contracts: {},
  balances: {},
  allowances: {},
  positions: {
    lent: [],
    borrowed: [],
  },
}
export const DEFAULT_LOADINGS = {
  orders: true,
  positions: true,
  wrapping: false,
  allowance: false,
}
export const DEFAULT_ORDERS = {
  myOrders: {
    lend: [],
    borrow: [],
  },
  orders: [],
}
export const DEFAULT_EXCHANGES = {
  currentWETHExchangeRate: 1,
}

export const LOAN_STATUS_OPEN = 1
export const LOAN_STATUS_CLOSED = 2
export const LOAN_STATUS_LIQUIDATED = 3
