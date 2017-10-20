/* SystemJS module definition */
// noinspection ES6ConvertVarToLetConst
declare var module: NodeModule;
// noinspection TsLint
interface NodeModule {
  id: string;
}

declare module '*.json' {
  const value: any;
  export default value;
}
