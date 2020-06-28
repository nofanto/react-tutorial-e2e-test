/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type Profiling = import('./profiling_helper.js');

declare namespace CodeceptJS {
  interface SupportObject { I: CodeceptJS.I }
  interface CallbackOrder { [0]: CodeceptJS.I }
  interface Methods extends Profiling, CodeceptJS.Puppeteer {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
