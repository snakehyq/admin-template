let BASE_URL = ''
const TIME_OUT = 2000

if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'https://mock.apifox.cn/m1/1892446-0-default'
} else if (process.env.NODE_ENV === 'test') {
  BASE_URL = 'https://mock.apifox.cn/m1/1892446-0-default'
} else {
  BASE_URL = 'https://mock.apifox.cn/m1/1892446-0-default'
}

export { BASE_URL, TIME_OUT }
