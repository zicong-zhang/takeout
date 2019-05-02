const apiErrorName = require('./error-name');

class ApiError extends Error {

	constructor (errorName) {
		super();

		const info = this.getErrorInfo(errorName);
		
		this.errorName = errorName;
		this.code = info.code;
		this.msg = info.msg;
	}

	getErrorInfo(name) {
		let info = null;
		console.log('name:_____', name);
		if (name) {
			info = apiErrorName[name];
		} else {
			info = apiErrorName['UN_KNOW_ERROR'];
		}
		console.log('info:_____', info);

		return info;
	}
}

module.exports = ApiError;
