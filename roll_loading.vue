<template>
		<div class="loading" v-show="isShow">
			<div class="box">
				<img src="./images/dots.gif" alt="">
				<div>验证中</div>
			</div>
		</div>
</template>
<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                isShow:false
            }
        },
        computed: {

        },
        methods: {
            show(txt) {
                this.isShow = true
            },
            hide() {
                this.isShow = false
            },
        },
    }
</script>

<style lang="scss" scoped>
	.loading{
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		z-index: 99999;
		.box{
			position: absolute;
			top: 50%;
			left: 50%;
			margin-left: -.49rem;
			margin-top: -.49rem;
			background: rgba(0,0,0,.6);
			width: .98rem;
			height: .98rem;
			border-radius: .03rem;
			img{

				width: .5rem;
				height: .06rem;
				display: block;
				margin: .38rem  auto .18rem;
			}
			div{
				font-size: .13rem;
				color: #FFFFFF;
				letter-spacing: 0;
				text-align: center;
				height: .18rem;
				line-height: .18rem;
			}
		}
	}
</style>