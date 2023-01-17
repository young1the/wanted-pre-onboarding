export const reducerUtils = {
  initial: (data = null) => ({
    loading: false,
    data,
    error: null,
  }),
  loading: (preveState = null) => ({
    data: preveState,
    loading: true,
    error: null,
  }),
  // TODO: any -> specific type
  success: (data : any) => ({
    data,
    loading: false,
    error: null,
  }),
  error: (error : any) => ({
    data: null,
    loading: false,
    error,
  }),
};
