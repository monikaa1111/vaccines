<template>
    <div id="app">
		<canvas id="myCanvas"></canvas>
		<div class="footer">
			<div @click="clearArea()">清除</div>
			<div @click="saveImageInfo()">保存</div>
			<div>
				<input v-model="strokeStyle" type="color">
			</div>
		</div>
	</div>

</template>

<script>
export default {
	data(){
		return {
			touchPressed:false,
			ctx:null,
			strokeStyle:'#EE2F2F',
			lineWidth:2,
			lastX:null,
			lastY:null,
			canvas:null
		}
	},
	mounted() {
		this.$nextTick(() => {
			let canvas = document.getElementById('myCanvas');
			this.canvas = canvas;
			this.ctx = canvas.getContext('2d');
			let winW = window.innerWidth;
			let winH = window.innerHeight;
			canvas.width = winW;
			canvas.height = winH;
			this.Init()
		});
	},
	methods: {
		Init() {
			this.canvas.addEventListener(
				'touchstart',
				(event)=> {
					if (event.targetTouches.length == 1) {
						event.preventDefault(); // 阻止浏览器默认事件，重要
						var touch = event.targetTouches[0];
						this.touchPressed = true;
						this.draw(touch.pageX - this.canvas.offsetLeft, touch.pageY - this.canvas.offsetTop, false);
					}
				},
				false
			);
			this.canvas.addEventListener(
				'touchmove',
				(event) =>{
					if (event.targetTouches.length == 1) {
						event.preventDefault(); // 阻止浏览器默认事件，重要
						var touch = event.targetTouches[0];
						if (this.touchPressed) {
							this.draw(touch.pageX - this.canvas.offsetLeft, touch.pageY - this.canvas.offsetTop, true);
						}
					}
				},
				false
			);
			this.canvas.addEventListener(
				'touchend',
				(event)=> {
					if (event.targetTouches.length == 1) {
						event.preventDefault(); // 阻止浏览器默认事件，防止手写的时候拖动屏幕，重要
						this.touchPressed = false;
					}
				},
				false
			);
		},
		draw(x, y, isDown) {
			let ctx = this.ctx
		    if (isDown) {
		        ctx.beginPath();
		        ctx.strokeStyle = this.strokeStyle;
		        ctx.lineWidth = this.lineWidth;
		        ctx.lineJoin = "round";
		        ctx.moveTo(this.lastX, this.lastY);
		        ctx.lineTo(x, y);
		        ctx.closePath();
		        ctx.stroke();
		    }
		    this.lastX = x; this.lastY = y;
		},
		clearArea(){
			this.ctx.setTransform(1, 0, 0, 1, 0, 0);
			this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    },
		saveImageInfo(){
      let a = document.createElement('a');
      a.href = this.canvas.toDataURL(); 
      console.log( this.canvas.toDataURL())
      	a.download = "sign";
         a.click();
        this.$axios.post("http://152.136.232.95:8089/file/upload",this.canvas.toDataURL()).then(res=>{
          console.log(res);
      })
		}
	}
};
</script>


<style scoped>
   .footer{
	height: 55px;
	position: fixed;
	width: 100%;
	left: 0;
	bottom: 0;
	z-index: 10;
	display: flex;
	border-top: 1px solid #ccc;

}
	div{
		flex:1;
		display: flex;
		align-items: center;
		justify-content: center;
	}

</style>
