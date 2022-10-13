/**
 * 导出 app-storage 缓存配置项字段类型
 */
export interface AppStorageOptions {
  /**
   * 缓存类型
   */
  type?: string;

  /**
   * 是否使用模板缓存
   */
  isTemplate?: boolean;

  /**
   * 是否使用 JSON 格式化
   */
  isJSON?: boolean;

  /**
   * 读取缓存后是否删除缓存，即会话式缓存
   */
  isDelete?: boolean;

  /**
   * 默认值
   */
  defaultData?: unknown;

  /**
   * 描述
   */
  desc?: string | null | undefined;

  /**
   * 用户
   */
  user?: string | null | undefined;

  /**
   * 时间
   */
  time?: string | null | undefined;
}
