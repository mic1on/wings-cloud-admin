/**
 * 用户名，必须以字母开头，长度为6 ~ 16字节
 */
export const USERNAME = /^[a-zA-Z][a-zA-Z0-9_]{5,15}$/;

/**
 * 密码，必须以字母开头，长度为6 ~ 16个字符，由字母、数字和“_”组成
 */
export const PASSWORD_NORMAL = /^[a-zA-Z]\w{5,15}$/;

/**
 * 强密码，必须包含大写字母、小写字母和数字的组合，不能使用特殊字符，密码长度为8 ~ 16位
 */
export const PASSWORD_STRICT =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{7,15}$/;

/**
 * 强密码，必须包含大写字母、小写字母和数字的组合，可以使用特殊字符，密码长度为8 ~ 16
 */
export const PASSWORD_STRICT_SYMBOL = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,15}$/;

/**
 * 邮箱地址
 */
export const EMAIL = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

/**
 * 电话号码(通用)，支持手机号码，3-4位区号，7-8位直播号码，1-4位分机号码
 */
export const MOBILE_PHONE =
  /((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/;

/**
 * 手机号码
 */
export const MOBILE_PHONE_CHINA =
  /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;

/**
 * 电话号码
 */
export const TELEPHONE_CHINA = /\d{3}-\d{8}|\d{4}-\d{7}/;

/**
 * 身份证号码
 */
export const ID_CARD = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;

/**
 * 日期格式
 */
export const DATE = /^\d{4}-\d{1,2}-\d{1,2}/;

/**
 * 小数点后最多两位的非零数。
 */
export const NUMBER_MONEY = /^([1-9][0-9]*)+(\.[0-9]{1,2})?$/;

/**
 * 包含& ^ % ';= ?$\ "和等特殊符号
 */
export const SPECIFIC_SYMBOL = /[^%&',;=?$\x22]+/;

/**
 * 特殊符号和汉字
 */
export const SPECIAL_SYMBOL_CHINESE = /[^\w\.\/]/gi;

/**
 * 邮政编码
 */
export const POSTAL_CODE = /[1-9]\d{5}(?!\d)/;

/**
 * IPv4地址
 */
export const IP =
  /((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}/;

/**
 * 文件扩展名
 */
export const FILE_EXTENSION_NAME =
  /^([a-zA-Z]\\:|\\\\)\\\\([^\\\\]+\\\\)*[^\\/:*?"<>|]+\\.txt(l)?$/;

/**
 * 匹配任何路径文件名
 */
export const FILE_NAME = /(.*\/)*([^.]+).*/gi;

/**
 * xml文件
 */
export const XML = /^([a-zA-Z]+-?)+[a-zA-Z0-9]+\\.[x|X][m|M][l|L]$/;

/**
 * 空行，可用于删除空行
 */
export const EMPTY_LINE = /\n\s*\r/;

/**
 * 腾讯 qq 号
 */
export const TENCENT_QQ_ACOUNT = /[1-9][0-9]{4,}/;

/**
 * 中文
 */
export const CHINESE = /^[\u4e00-\u9fa5]{0,}$/;

/**
 * 数字
 */
export const NUMBER = /^[0-9]*$/;

/**
 * 小数点后1-2位的正数或负数
 */
export const NUMBER_TWO_DECIMALS = /^(\-)?\d+(\.\d{1,2})$/;

/**
 * 浮点数
 */
export const NUMBER_FLOAT = /^(-?\d+)(\.\d+)?/;

/**
 * 英文字符和数字
 */
export const ENGLISH_NUMBER = /^[A-Za-z0-9]+$/;

/**
 * 数字中包含下划线
 */
export const CHINESE_ENGLISH_NUMBER_UNDERLINE = /^[\u4E00-\u9FA5A-Za-z0-9_]+$/;

/**
 * 中文、英文、数字，但不包括下划线等符号
 */
export const CHINESE_ENGLISH_NUMBER = /^[\u4E00-\u9FA5A-Za-z0-9]+$/;

/**
 * 26个英文字母
 */
export const ENGLISH = /^[A-Za-z]+$/;

/**
 * 26个大写字母
 */
export const ENGLISH_CAPITAL = /^[A-Za-z]+$/;

/**
 * 26个小写字母
 */
export const ENGLISH_SMALL = /^[A-Za-z]+$/;
