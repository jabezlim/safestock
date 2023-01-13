export const base_url =
  process.env.NODE_ENV === 'development'
    ? 'http://stock.local.tst/ci/index.php/api/v1/'
    : '/ci/index.php/api/v1/';