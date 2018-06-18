import ADD_GOODS from "./actionType.js"

const mutations = {
    [ADD_GOODS](state,goodInfo){
        let goods = state.goods.slice()
        let isHas = goods.some(good=>{
            if(good.id===goodInfo.id){
                good.num++;
                return true;
            }
            return false;
        })
        if(!isHas){
            goodInfo.num = 1
            goods.push(goodInfo)
        }
        state.goods = goods
    } 
}
export default mutations