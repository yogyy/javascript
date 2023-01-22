function compareTriplets(a, b) {
    let aPoint = 0
    let bPoint = 0
    for (let i =0; i < 3;i++) {
        if(a[i] > b[i]){
            aPoint++
        }if (b[i] > a[i]){
            bPoint++
        }
    }
  return [aPoint,bPoint]

}
