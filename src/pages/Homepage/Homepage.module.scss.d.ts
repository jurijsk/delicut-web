declare namespace HomepageModuleScssModule {
  export interface IHomepageModuleScss {
    heroSection: string;
    heroTitle: string;
    oneFourth: string;
    oneHalf: string;
    sectionContent: string;
  }
}

declare const HomepageModuleScssModule: HomepageModuleScssModule.IHomepageModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HomepageModuleScssModule.IHomepageModuleScss;
};

export = HomepageModuleScssModule;
