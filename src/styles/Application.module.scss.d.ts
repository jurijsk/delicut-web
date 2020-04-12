declare namespace ApplicationModuleScssModule {
  export interface IApplicationModuleScss {
    scssTest: string;
  }
}

declare const ApplicationModuleScssModule: ApplicationModuleScssModule.IApplicationModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ApplicationModuleScssModule.IApplicationModuleScss;
};

export = ApplicationModuleScssModule;
