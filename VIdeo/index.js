// document.querySelector('.speed')  里面的值是id的话前面就加#,类名就加. 
const speed = document.querySelector('.speed')
const bar = document.querySelector('.speed-bar')
const video = document.querySelector('.flex')

function handleMove(event){
    // console.log(event.pageY)
    const y = event.pageY - this.offsetTop;//offsetTop 获取某个dom结构到浏览器顶部的距离
    const percent = y /this.offsetHeight; //offsetHeight用来获取某dom结构自身高度 还有offsetWidth
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent * 100) +"%"
    const playbackRate = percent * (max - min) +min;

    bar.style.height=height
    bar.textContent = playbackRate.toFixed(2) + 'x'
    video.playbackRate = playbackRate
}
// 监听事件
speed.addEventListener('mousemove',handleMove)