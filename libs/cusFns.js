'use strict'

var fns = {
  //缓存参数，满足数量即可执行相关函数
  waitfullParamsToFecthHOC : (func, paramObjLens) => params => {
    const emptyFuncParams = () => {
      func.params = {}
    };
  
    if (!func.params) emptyFuncParams();
  
    if (params) {
      func.params = { ...func.params, ...params };
      console.info('waitfullParamsToFecthHOC', func.params);
      //done
      if (Object.keys(func.params).length == paramObjLens) {
        func(func.params);
        emptyFuncParams();
      }
    }
    //params operation
    return {
      get: key => func.params[key],
      delete: key => delete func.params[key],
      empty: () => emptyFuncParams()
    };
  };
}
