<template>
  <div>
    <li>
      <div
        class="todo-item-container"
        ref="item"
        @dblclick="changeDisabledStatus(false)"
        @mousedown="handleMouseDown"
        @mouseup="handleMouseUp"
        @mouseleave="handleMouseLeave"
      >
        <div :class="['todo-fill-container', progressStyle]" :style="{width: progress + 'px'}">
          <span v-if="progressRadio > 40">{{progressRadio + "%"}}</span>
        </div>
        <a-input
          class="todo-value-input"
          ref="input"
          type="text"
          :disabled="disabled"
          :value="todoValue"
          @input="handleInput"
          @blur="changeDisabledStatus(true)"
          @keyup.native.enter="handleKeyupEnter"
        />
      </div>
    </li>
  </div>
</template>

<script>

export default {
  name: 'list-item',
  props: {
    todoValue: {
      type: String,
      default: '世界'
    },
    progressRadio: {
      type: Number,
      default: 10
    },
    index: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      disabled: true,
      beginX: 0,
      currentX: 0,
      progress: 0,
      progressStyle: ''
    }
  },
  mounted () {
    this.progress = this.$refs.item.offsetWidth * this.progressRadio / 100
  },
  methods: {
    changeDisabledStatus (status) {
      this.disabled = status
    },
    handleMouseDown (e) {
      this.beginX = e.clientX
      this.$refs.item.addEventListener('mousemove', this.move)
    },
    handleMouseUp (e) {
      this.$refs.item.removeEventListener('mousemove', this.move)
    },
    handleMouseLeave () {
      this.$refs.item.removeEventListener('mousemove', this.move)
    },
    move (e) {
      this.currentX = e.clientX
    },
    handleKeyupEnter () {
      this.$refs.input.blur()
      this.$message.success('操作成功')
    },
    handleInput (e) {
      this.$parent.todoList[this.index]['todoValue'] = e.target.value
      localStorage.setItem('todoList', JSON.stringify(this.$parent.todoList))
    }
  },
  watch: {
    currentX: function (value) {
      const width = this.$refs.item.offsetWidth
      // 按住鼠标往右移动会增加进度
      if (value > this.beginX && this.progress < width) {
        this.progress = this.progress + Math.abs(this.currentX - this.beginX)
      }

      // 按住鼠标往左移动会较少进度
      if (value < this.beginX && this.progress > 0) {
        this.progress = this.progress - Math.abs(this.currentX - this.beginX)
        if (this.progress < 10) {
          this.progress = 10
        }
      }

      this.beginX = this.currentX
    },
    // 监听任务完成进度，计算任务完成比率
    progress: function (value) {
      const width = this.$refs.item.offsetWidth
      if (value > width) {
        this.progress = width
      }
      this.$parent.todoList[this.index]['progressRadio'] = Number(100 * this.progress / width).toFixed(0)
      const radio = this.$parent.todoList[this.index]['progressRadio']
      localStorage.setItem('todoList', JSON.stringify(this.$parent.todoList))
      if (Number(radio) === 100) {
        this.progressStyle = 'done'
        return
      }
      if (radio > 50 && radio < 100) {
        this.progressStyle = 'half'
        return
      }
      this.progressStyle = ''
    }
  },
  // 组件移除时，将原生dom事件移除
  beforeDestroy () {
    this.$refs.item.removeEventListener('mousemove', this.move)
  }
}
</script>

<style scoped>
.ant-slider-track,
.ant-slider-handle {
  background-color: #054e8b;
}
.ant-slider:hover > .ant-slider-track {
  background-color: #054e8b;
}
.todo-item-container {
  height: 50px;
  background-color: #ebebeb;
  border-radius: 5px;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  opacity: 0.95;
}
.todo-item-container:hover {
  opacity: 1;
  transition: opacity 0.3s ease;
}
.todo-fill-container {
  width: 20%;
  height: 100%;
  background-color: #054e8b;
  border-radius: 5px;
  color: #fff;
  position: absolute;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
}
.todo-value-input {
  width: calc(100% - 40px);
  background-color: transparent;
  padding-left: 0px;
  margin-left: 20px;
  border: none;
  font-size: 18px;
  color: #fff;
}
.todo-value-input:focus {
  box-shadow: none;
}
.ant-input-disabled {
  background-color: transparent !important;
}
.done {
  background-color: #01ad56;
}
.half {
  background-color: #ffb520;
}
.ant-input[disabled] {
  color: #fff !important;
}
</style>
