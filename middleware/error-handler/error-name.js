let errorName = {
	NOT_FOUND: {
		code: 404,
		msg: "请求的路径不对"
	},
	UN_KNOW_ERROR: {
		code: -1,
		msg: "未知错误"
	},
	ABORT: {
		code: 500,
		msg: "服务器崩溃"
	},
	PARAM_ERROR: {
		code: 400,
		msg: "请求参数错误"
	},
	CODE_SAVE_ERROR: {
    code: 1,
    msg: "保存失败"
  },
  CODE_DEL_ERROR: {
    code: 2,
    msg: "删除失败"
  },
  "CODE_Data_NULL_ERROR": {
    code: 3,
    msg: "数据不正确"
  },
  CODE_DATA_NULL: {
    code: 4,
    msg: "没有数据哟"
  },
  "CODE_DATA_Empty": {
    code: 5,
    msg: "数据为空"
  },
  "CODE_Not_Power": {
    code: 6,
    msg: "没有权限查看数据"
  },
  CODE_SERVER_ERROR: {
    code: 100,
    msg: "服务器开小差^_^"
  },
  CODE_DATA_ERROR: {
    code: 101,
    msg: "请求参数值不能为空"
  },
  CODE_PASSWORD_ERROR: {
    code: 103,
    msg: "密码不正确"
  },
  CODE_PHONE_ERROR: {
    code: 105,
    msg: "手机号、密码不能为空"
  },
  NotLogin: {
    code: 106,
    msg: "用户未登录，请先登录"
  },
  CODE_USER_ERROR: {
    code: 104,
    msg: "用户不存在"
  },
  InvalidLogin: {
    code: 107,
    msg: "登录已失效，请重新登录"
  },
  CODE_USER_EXIST_ERROR: {
    code: 108,
    msg: "用户已存在"
  },
  CODE_USER_REG_ERROR: {
    code: 109,
    msg: "用户注册失败"
  },
  CODE_UPDATE_PASSWORD_ERROR: {
    code: 110,
    msg: "密码修改错误"
  },
  CODE_REG_CODE_SUCCESS: {
    code: 111,
    msg: "验证码过期"
  },
  CODE_REG_VERIFCODE_ERROR: {
    code: 112,
    msg: "验证码不正确"
  },
  CODE_USER_INFO_ERROR: {
    code: 113,
    msg: "用户信息有误"
  },
  CODE_SHOP_NAME: {
    code: 114,
    msg: "店铺名称不能空"
  },
  CODE_SHOP_CONTACT: {
    code: 115,
    msg: "联系方式不能空"
  },
  "Code_Shop_Province": {
    code: 116,
    msg: "省份不能空"
  },
  "Code_Shop_city": {
    code: 117,
    msg: "城市不能空"
  },
  "Code_Shop_address": {
    code: 117,
    msg: "详细地址不能空"
  },
  "Code_Shop_brandId": {
    code: 118,
    msg: "品牌不能空"
  },
  "Code_Shop_logoUrl": {
    code: 119,
    msg: "店铺LOGO不能空"
  },
  "Code_Shop_licenseUrl": {
    code: 120,
    msg: "营业执照不能空"
  },
  "Code_Shop_cardUrl": {
    code: 121,
    msg: "法人身份证不能空"
  },
  "Code_Shop_openBank": {
    code: 122,
    msg: "开户行不能空"
  },
  "Code_Shop_accountName": {
    code: 123,
    msg: "开户名不能空"
  },
  "Code_Shop_bandAccount": {
    code: 124,
    msg: "银行账号不能空"
  },
  "Code_Shop_bankCerturl": {
    code: 125,
    msg: "开户许可证不能空"
  },
  "Code_Shop_pw": {
    code: 126,
    msg: "支付密码不能空"
  },
  "Code_Wallet_Bank": {
    code: 127,
    msg: "请使用所填写的身份证号开立的银行卡"
  },
  "Code_Wallet_Active_Error": {
    code: 128,
    msg: "钱包激活失败"
  },
  "Code_Wallet_Pw_Error": {
    code: 129,
    msg: "钱包原支付密码错误"
  },
  "Code_Wallet_Pw_Null": {
    code: 130,
    msg: "密码有误，修改失败"
  },
  "Code_Wallet_Eorror": {
    code: 131,
    msg: "钱包信息有误"
  },
  "Code_Orderbooking_ShopId": {
    code: 132,
    msg: "请选择店铺"
  },
  "Code_Orderbooking_CustomerId": {
    code: 133,
    msg: "请选择客户"
  },
  "Code_Orderbooking_Disigner": {
    code: 134,
    msg: "设计师不能为空"
  },
  "Code_Orderbooking_AdminId": {
    code: 135,
    msg: "设计师Id不能为空"
  },
  "Code_Orderbooking_Name": {
    code: 136,
    msg: "客户姓名不能为空"
  },
  "Code_Orderbooking_Mobile": {
    code: 137,
    msg: "客户电话不能为空"
  },
  "Code_Order_Address": {
    code: 138,
    msg: "地址不能为空"
  },
  "Code_Shop_Null": {
    code: 139,
    msg: "店铺不存在"
  },
  "Code_Order_Admin_Null": {
    code: 140,
    msg: "商家用户不能为空"
  },
  "Code_USER_ID_Null": {
    code: 141,
    msg: "用户Id不能为空"
  },
  "Code_Customer_Error": {
    code: 142,
    msg: "客户已存在"
  },
  "Code_Booking_Id_Error": {
    code: 143,
    msg: "请选择预订单"
  },
  "Code_Booking_ToId_Error": {
    code: 144,
    msg: "请选择设计师"
  },
  "CODE_Transfer_ERROR": {
    code: 145,
    msg: "转移失败"
  },
  "CODE_Transfer_Update_ERROR": {
    code: 146,
    msg: "请选择授受或拒绝"
  },
  "Code_Customer_Null_Error": {
    code: 147,
    msg: "客户不存在"
  },
  "Code_Name_Null_Error": {
    code: 148,
    msg: "请输入名称"
  },
  "Code_Power_Null_Error": {
    code: 149,
    msg: "请选择权限"
  },
  "Code_Member_Null_Error": {
    code: 150,
    msg: "请选择员工"
  },
  "Code_File_Upload_Error": {
    code: 151,
    msg: "文件上传失败"
  },
  "Code_Type_Error": {
    code: 152,
    msg: "数据类型不对"
  },
  "Code_Member_Name_Error": {
    code: 153,
    msg: "请输入姓名"
  },
  CODE_USER_IS_STAFF: {
    code: 154,
    msg: "你邀请的用户已加入了其他店铺"
  },
  CODE_USER_MOBILE: {
    code: 155,
    msg: "手机号不能为空"
  },
  CODE_LINKNAME_NULL: {
    code: 156,
    msg: "联系人不能为空"
  },
  CODE_TARGET_HAVE: {
    code: 157,
    msg: "此月份目标已存在"
  },
  CODE_DATE_FORMAT: {
    code: 158,
    msg: "时间格式不对"
  },
  CODE_USER_NOT_REG: {
    code: 159,
    msg: "该手机号码尚未注册阿拉私家账号，请使用“发短信添加员工”方式进行添加"
  },
  CODE_USER_FROZEN: {
    code: 160,
    msg: "用户已冻结不能登录"
  },
  CODE_USER_DO_REG: {
    code: 161,
    msg: "该手机号码已注册阿拉私家账号，请使用“面对面添加员工”方式进行添加"
  },
  CODE_ROLE_NOI_DEL: {
    code: 162,
    msg: "该权限组已分配了员工，不能删除"
  },
  CODE_CODE_TYPE_ERROR: {
    code: 163,
    msg: "验证码类型不对"
  },
  CODE_WALLET_INFO_ERROR: {
    code: 164,
    msg: "提交的信息与钱包信息不符"
  },
  CODE_ORDER_NULL_ERROR: {
    code: 165,
    msg: "订单不存在"
  },
  CODE_WALLET_ERROR: {
    code: 200,
    msg: "钱包未激活或已冻结"
  },
  CODE_WALLET_MONEY_ERROR: {
    code: 201,
    msg: "钱包余额不足"
  },
  CODE_WALLET_PW_ERROR: {
    code: 202,
    msg: "支付密码错误"
  },
  CODE_PAY_ERROR: {
    code: 204,
    msg: "订单支付失败"
  },
  CODE_BANK_NO_ERROR: {
    code: 205,
    msg: "银行卡号不正确"
  },
  CODE_BINDING_CODE_ERROR: {
    code: 206,
    msg: "获取验证失败"
  },
  CODE_BINDING_ERROR: {
    code: 207,
    msg: "同意失败"
  },
  CODE_SELLERWALLET_ERROR: {
    code: 208,
    msg: "请先进行店铺认证"
  },
  CODE_SELLERWALLET_PW_ERROR: {
    code: 209,
    msg: "钱包密码未设置"
  },
  CODE_SELLERWALLET_AUDIT: {
    code: 210,
    msg: "店铺认证审核中"
  },
  CODE_SELLERWALLET_AUDIT_ERROR: {
    code: 211,
    msg: "店铺认证审核不通过，请重新提交资料"
  },
  CODE_WALLET_TAKE_ERROR: {
    code: 212,
    msg: "提现不成功"
  },
  CODE_WALLET_TAKE_MONEY_ERROR: {
    code: 213,
    msg: "提现金额不能大于钱包余额"
  },
  "CODE_WALLET_TAKE_MONEY_0_ERROR": {
    code: 214,
    msg: "提现金额大于0"
  },
  CODE_MOBILE_NOT_REG_ERROR: {
    code: 215,
    msg: "该手机号码未注册阿拉私家账号"
  },
  CODE_CUSTOMER_HAVING_ERROR: {
    code: 216,
    msg: "客户已添加"
  },
  "Code_Shop_Exist_Error": {
    code: 217,
    msg: "已存在同名店铺"
  },
  "Code_CUSTOMER_BY_OWNER_Error": {
    code: 218,
    msg: "不能添加自己为客户"
  },
  CODE_SHOP_ISSELLER_ERROR: {
    code: 219,
    msg: "已有店铺或已有店铺认领中不能再次认领"
  },
  CODE_SHOP_APPLYING_ERROR: {
    code: 220,
    msg: "店铺认领中不能认领"
  },
  CODE_SHOP_APPLY_ERROR: {
    code: 221,
    msg: "店铺认领申请失败"
  },
  CODE_SHOP_APPLY_INFO_ERROR: {
    code: 222,
    msg: "获取未认领店铺申请详情失败"
  },
  CODE_SHOP_NO_OWNER_ERROR: {
    code: 223,
    msg: "获取未认领店铺详情失败"
  },
  "CODE_WALLET_ACCOUNT_LOCK_Error": {
    code: 224,
    msg: "您输错密码的次数已达五次，该账号已锁，将在24h后解锁"
  },
  CODE_SHOP_NEAR_LIST_ERROR: {
    code: 225,
    msg: "获取附近店铺列表失败"
  },
  CODE_SHOP_APPLY_TWO_ERROR: {
    code: 226,
    msg: "不能同时认领多家店铺"
  },
  CODE_WALLET_TRANSACTION_ERROR: {
    code: 227,
    msg: "钱包获取交易记录失败"
  },
  CODE_MEMBER_ID_ERROR: {
    code: 228,
    msg: "客户ID不能为空"
  },
  CODE_STAFF_NOT_EXIST_ERROR: {
    code: 229,
    msg: "员工不存在"
  },
  CODE_COLLECTION_ERROR: {
    code: 230,
    msg: "关注失败"
  },
  CODE_NUM_APPOINTMENT_CAPPED: {
    code: 231,
    msg: "量尺预约次数已达上限"
  },
  CODE_TYPE_NULL_ERROR: {
    code: 232,
    msg: "客户类型不能为空"
  },
  CODE_THUMBUP_ERROR: {
    code: 233,
    msg: "点赞失败"
  },
  CODE_NO_CASE_ERROR: {
    code: 234,
    msg: "没有找到案例哟"
  },
  CODE_DATA_PAGE_ERROR: {
    code: 235,
    msg: "分页数据不合法"
  },
  CODE_NUM_SHOP_BANNER_CAPPED: {
    code: 236,
    msg: "店铺Banner数量上限"
  },
  CODE_STAFF_FIRE_ONESELF_ERROR: {
    code: 237,
    msg: "无法解雇自己"
  },
  CODE_STAFF_FIRE_AUTH_ERROR: {
    code: 238,
    msg: "解雇权限不足"
  },
  CODE_STAFF_FIRE_BOSS_ERROR: {
    code: 239,
    msg: "无法解雇老板"
  }
}

module.exports = errorName;