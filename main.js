// ハンバーガーが押されたらメニューを表示
const open = document.getElementById("open")
const close = document.getElementById("close")

open.addEventListener("click",()=>{
  close.classList.add("show")
})
// ばつが押されたらメニューを閉じる
const closeitem = document.getElementById("closeitem")
closeitem.addEventListener("click",()=>{
  close.classList.remove("show")
})
// アニメパート
// 0.2%表示されたら検知
const options = {
  threshold:0.2
}

// 検知開始&検知&検知できなくなったらの処理
function callback(entries,obs){
  // 情報を書き出す(同時に複数要素を描き出せる)
  console.log(entries)
  // 並列に並んだ状態などでスクロールして同時に出てくると同時に処理できないため、それぞれをforeachで分けて処理をする
  entries.forEach(entry => {
    // 検知されtureになったら
    if(entry.isIntersecting){
      // target(anime)を表示
      entry.target.classList.add("appear")
      // 一度検知されたら監視を終了する
      obs.unobserve(entry.target);
    }else{
      // target(anime)が検知を逃れたら消す
      // entries[0].target.classList.remove("appear")
    }
  })
}

// アニメーションされる要素を取得
const animes = document.querySelectorAll(".anime")
// インターセクションオブサーバーの関数化
const observer = new IntersectionObserver(callback,options)
// アニメをそれぞれ監視
animes.forEach(anime =>{
  observer.observe(anime)
})