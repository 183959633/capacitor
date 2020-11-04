import { Capacitor } from '../global';

import type { WebPlugin } from '.';
import { SplashScreen } from './splash-screen';

/**
 * Provided for backwards compatibility.
 *
 * @deprecated Deprecated in v3, will be removed from v4.
 */
export const mergeWebPlugin = (plugin: WebPlugin): void => {
  if (
    Object.prototype.hasOwnProperty.call(
      Capacitor.Plugins,
      plugin.config.name,
    ) &&
    !shouldMergeWebPlugin(plugin)
  ) {
    return;
  }

  Capacitor.Plugins[plugin.config.name] = plugin;
};

const shouldMergeWebPlugin = (plugin: WebPlugin): boolean => {
  return (
    plugin.config.platforms &&
    plugin.config.platforms.indexOf(Capacitor.platform) >= 0
  );
};

/**
 * Provided for backwards compatibility.
 *
 * @deprecated Deprecated in v3, will be removed from v4.
 */
export const registerWebPlugin = (_plugin: WebPlugin): void => {
  // console.warn(
  //   `Capacitor plugin ${plugin.config.name} is using deprecated method 'registerWebPlugin'`,
  // ); // TODO: add link to upgrade guide
  // if (!PLUGIN_REGISTRY.has(plugin.config.name)) {
  //   const { name, platforms = ['web'] } = plugin.config;
  //   const implementations: PluginImplementations<unknown> = {};
  //   PLUGIN_REGISTRY.register(
  //     new RegisteredPlugin(
  //       name,
  //       platforms.reduce((acc, value) => {
  //         acc[value] = plugin;
  //         return acc;
  //       }, implementations),
  //     ),
  //   );
  //   mergeWebPlugin(plugin);
  // }
};

mergeWebPlugin(SplashScreen);
