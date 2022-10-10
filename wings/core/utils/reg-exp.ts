import type { Reg } from './reg-exp.d';

/**
 * 用户名，必须以字母开头，长度为6 ~ 16字节
 */
export const USERNAME: Reg = /^[a-zA-Z][a-zA-Z0-9_]{5,15}$/;

/**
 * 密码，必须以字母开头，长度为6 ~ 16个字符，由字母、数字和“_”组成
 */
export const PASSWORD_NORMAL: Reg = /^[a-zA-Z]\w{5,15}$/;

/**
 * 强密码，必须包含大写字母、小写字母和数字的组合，不能使用特殊字符，密码长度为8 ~ 16位
 */
export const PASSWORD_STRICT: Reg =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{7,15}$/;

/**
 * 强密码，必须包含大写字母、小写字母和数字的组合，可以使用特殊字符，密码长度为8 ~ 16
 */
export const PASSWORD_STRICT_SYMBOL: Reg =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,15}$/;

/**
 * 邮箱地址
 */
export const EMAIL: Reg =
  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

/**
 * 电话号码，支持手机号码，3-4位区号，7-8位直播号码，1-4位分机号码
 */
export const MOBILE_PHONE: Reg =
  /((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/;

/**
 * 手机号码（国内）
 */
export const MOBILE_PHONE_CHINA: Reg =
  /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;

/**
 * 手机号码（简单）
 */
export const MOBILE_PHONE_SIMPLE: Reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;

/**
 * 电话号码
 */
export const TELEPHONE_CHINA: Reg = /\d{3}-\d{8}|\d{4}-\d{7}/;

/**
 * 身份证号码
 */
export const ID_CARD: Reg =
  /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;

/**
 * 腾讯 qq 号
 */
export const QQ_ACOUNT: Reg = /^[1-9][0-9]{4,10}$/;

/**
 * 微信号（6至20位，以字母开头，字母，数字，减号，下划线）
 */
export const WECHAT_ACOUNT: Reg = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/;

/**
 * 日期格式，YYYY-MM-DD
 */
export const DATE: Reg = /^\d{4}(\-)\d{1,2}\1\d{1,2}$/;

/**
 * 日期格式，YYYY-MM-DD hh:mm:ss
 */
export const DATE_TIME: Reg =
  /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;

/**
 * 小数点后最多两位的非零数。
 */
export const NUMBER_MONEY: Reg = /^([1-9][0-9]*)+(\.[0-9]{1,2})?$/;

/**
 * 包含& ^ % ';= ?$\ "和等特殊符号
 */
export const SPECIFIC_SYMBOL: Reg = /[^%&',;=?$\x22]+/;

/**
 * 特殊符号和汉字
 */
export const SPECIAL_SYMBOL_CHINESE: Reg = /[^\w\.\/]/gi;

/**
 * 邮政编码
 */
export const POSTAL_CODE: Reg = /^\d{6}$/;

/**
 * IPv4地址
 */
export const IPV4: Reg =
  /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
/**
 * 文件扩展名
 */
export const FILE_EXTENSION_NAME: Reg =
  /^([a-zA-Z]\\:|\\\\)\\\\([^\\\\]+\\\\)*[^\\/:*?"<>|]+\\.txt(l)?$/;

/**
 * 匹配任何路径文件名
 */
export const FILE_NAME: Reg = /(.*\/)*([^.]+).*/gi;

/**
 * xml文件
 */
export const XML: Reg = /^([a-zA-Z]+-?)+[a-zA-Z0-9]+\\.[x|X][m|M][l|L]$/;

/**
 * 空行，可用于删除空行
 */
export const EMPTY_LINE: Reg = /\n\s*\r/;

/**
 * 中文
 */
export const CHINESE: Reg = /^[\u4e00-\u9fa5]{0,}$/;

/**
 * 整数数字
 */
export const NUMBER: Reg = /^[-+]?\d*$/;

/**
 * 浮点数
 */
export const NUMBER_FLOAT: Reg = /^[-\+]?\d+(\.\d+)?$/;

/**
 * 小数点后1-2位的正数或负数
 */
export const NUMBER_TWO_DECIMALS: Reg = /^(\-)?\d+(\.\d{1,2})$/;

/**
 * 英文字符和数字
 */
export const ENGLISH_NUMBER: Reg = /^[A-Za-z0-9]+$/;

/**
 * 数字中包含下划线
 */
export const CHINESE_ENGLISH_NUMBER_UNDERLINE: Reg =
  /^[\u4E00-\u9FA5A-Za-z0-9_]+$/;

/**
 * 中文、英文、数字，但不包括下划线等符号
 */
export const CHINESE_ENGLISH_NUMBER: Reg = /^[\u4E00-\u9FA5A-Za-z0-9]+$/;

/**
 * 英文、数字、下划线和短横线符号
 */
export const ENGLISH_NUMBER_LINE: Reg = /^[0-9a-zA-Z_-]{1,}$/;

/**
 * 26个英文字母
 */
export const ENGLISH: Reg = /^[A-Za-z]+$/;

/**
 * 包含中文
 */
export const IS_CHINESE: Reg = /[\u4E00-\u9FA5]/;

/**
 * Url 地址
 */
export const URL: Reg =
  /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

/**
 * 16进制颜色
 */
export const RGB: Reg = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;

/**
 * 车牌号校验
 */
export const CAR_NO: Reg =
  /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;

/**
 * 匹配 img 和 src
 */
export const IMG_SRC: Reg = /<img.*?src=[\"|\']?(.*?)[\"|\']?\s.*?>/gi;

/**
 * 匹配 html 中的注释
 */
export const HTML_REMARK: Reg = /<!--(.*?)-->/g;

/**
 * 匹配 html 中的 style
 */
export const HTML_STYLE: Reg = /style="[^=>]*"([(\s+\w+=)|>])/g;

/**
 * 匹配 html 中的颜色
 */
export const HTML_COLOR: Reg = /#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/g;

/**
 * 匹配 html 标签
 */
export const HTML_TAG: Reg = /<("[^"]*"|'[^']*'|[^'">])*>/g;
