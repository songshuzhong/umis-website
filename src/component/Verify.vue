<template>
  <canvas
    ref="verify"
    :width="config.width"
    :height="config.height"
    @click="handleDraw"
  ></canvas>
</template>

<script>
import {defineComponent, onMounted, nextTick, watch, reactive, getCurrentInstance} from 'vue';
import {useInitData} from '../../../i-renderer/packages/index';
export default defineComponent({
  name: 'Verify',
  props: {
    initData: {
      type: [Object, String],
      required: false
    },
    inherit: {
      type: Object,
      required: false,
      default() {
        return {
          type: 'all',
          value: [],
        };
      },
    },
    width: {
      type: String,
      required: false
    },
    height: {
      type: String,
      required: false
    },
    action: Function,
    name: String
  },
  setup(props, ctx) {
    const {proxy} = getCurrentInstance();
    const state = useInitData(props);
    const config = reactive({
      pool: 'abcdefghijklmnopqrstuvwxyz1234567890',   // 随机字符串
      width: 120,                                     //展示区域宽度
      height: 32,                                     //展示区域高度
      imgCode: '',                                    //保存页面的内容（用来判断输入验证是否满足改code）
    });
    const randomNum = (min, max) => {
      return parseInt(Math.random() * (max - min + 1) + min);
    };
    const randomColor = (min, max) => {
      const r = randomNum(min, max);
      const g = randomNum(min, max);
      const b = randomNum(min, max);
      return `rgb(${r},${g},${b})`;
    };
    const handleDraw = () => {
      draw();
      config.imgCode = draw();
    };
    const draw = () => {
      const ctx = proxy.$refs.verify.getContext('2d');
      ctx.fillStyle = randomColor(180, 230);
      ctx.fillRect(0, 0, config.width, config.height);
      let imgCode = '';
      for (let i = 0; i < 4; i++) {
        const text = config.pool[randomNum(0, config.pool.length - 1)];

        const fontSize = randomNum(18, 40);
        const deg = randomNum(-30, 30);
        ctx.font = fontSize + 'px Simhei';
        ctx.textBaseline = 'top';
        ctx.fillStyle = randomColor(80, 150);


        ctx.save();
        ctx.translate(30 * i + 15, 15);
        ctx.rotate((deg * Math.PI) / 180);

        ctx.fillText(text, -15 + 5, -15);
        ctx.restore();
        imgCode += text;
      }
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(randomNum(0, config.width), randomNum(0, config.height));
        ctx.lineTo(randomNum(0, config.width), randomNum(0, config.height));
        ctx.strokeStyle = randomColor(180, 230);
        ctx.closePath();
        ctx.stroke();
      }
      for (let i = 0; i < 40; i++) {
        ctx.beginPath();
        ctx.arc(
          randomNum(0, config.width),
          randomNum(0, config.height),
          1,
          0,
          2 * Math.PI
        );
        ctx.closePath();
        ctx.fillStyle = randomColor(150, 200);
        ctx.fill();
      }
      return imgCode;
    };
    watch(() => config.imgCode, val => {
      ctx.emit('update:value', val);
    });
    onMounted(() => {
      nextTick(() => {
        draw();
        config.imgCode = draw();
      });
    });

    return {
      handleDraw,
      config,
      state
    };
  },
});
</script>
