/**
 * Created by dell on 2017/3/16.
 */
// 这个 getter 函数会返回 count 的值
// 在 ES6 里你可以写成：
// export const getCount = state => state.count

export const getCount=(state)=>{
  return state.num;
}
