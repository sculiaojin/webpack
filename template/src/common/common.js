import {idCardNoUtil} from "@/common/card"
const Util = {
	isIdCardNo(num) {
		num = num.toUpperCase();
		// 身份证号码18位前17位为数字，最后一位是校验位，可能为数字或字符X。
		if(idCardNoUtil.checkIdCardNo(num)) {
			return true;
		} else {
			return false;
		}
	},
	isPhone(phoneNo) {
		if((/^1[3|4|5|7|8]\d{9}$/.test(phoneNo))) {
			return true;
		} else {
			return false;
		}
	},
	isEmail(data) {
		if((/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(data))) {
			return true;
		} else {
			return false;
		}
	},
	isPassword(password) {
		if(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(password)) {
			return true;
		} else {
			return false;
		}
	},
	isNum(data) {
		if((/^\d+(\.\d+)?$/.test(data))) {
			return true;
		} else {
			return false;
		}
	},
	isNull(str) {
		if(str == "" || str == null) return true;
		var regu = "^[ ]+$";
		var re = new RegExp(regu);
		return re.test(str);
	},
	getUrlParam(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if(r != null) return unescape(r[2]);
		return null;
	}
}
export {
	Util
}