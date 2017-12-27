// A quick and dirty await-able timeout
module.exports = ms => new Promise(res => setTimeout(res, ms));
