import type { App } from 'vue';

export default async (app: App): Promise<void> => {
  const plugins: Record<string, any> = import.meta.glob('./**/index.ts', {
    import: 'default',
    eager: true,
  });
  const _pluginArray: Array<Record<string, any>> = [];
  Object.entries(plugins).map(([, plguin]) => {
    _pluginArray.push(plguin);
  });
  _pluginArray.sort((a: any, b: any) => a.appRegisterSort - b.appRegisterSort);
  _pluginArray.map(({ register }) => {
    register(app);
  });
};
