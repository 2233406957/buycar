import ADD_GOODS from "./actionType.js"

const actions ={
    addGoods({commit},goodInfo){
       setTimeout(() => {
            commit( ADD_GOODS, goodInfo )
        }, 1000);
    }
}

export default actions 