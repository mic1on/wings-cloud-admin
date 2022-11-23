import type { SystemSettings } from '@/global.d';
import { SettingsDefault } from './settings.default';
import { SettingsReplace } from './settings.replace';
export * from './predefine';

/**
 * @name Settings
 * @description 当前设置
 */
export const Settings: SystemSettings = Object.assign(
  SettingsDefault,
  SettingsReplace
);

export { SettingsDefault, SettingsReplace };
