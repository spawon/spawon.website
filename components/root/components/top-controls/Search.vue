<template>
  <section ref="search">
    <div class="icon" @click="onSearch">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path
          d="M9.145 18.29c-5.042 0-9.145-4.102-9.145-9.145s4.103-9.145 9.145-9.145 9.145 4.103 9.145 9.145-4.102
           9.145-9.145 9.145zm0-15.167c-3.321 0-6.022 2.702-6.022 6.022s2.702 6.022 6.022 6.022 6.023-2.702
           6.023-6.022-2.702-6.022-6.023-6.022zm9.263 12.443c-.817 1.176-1.852 2.188-3.046 2.981l5.452 5.453
           3.014-3.013-5.42-5.421z"
        />
      </svg>
    </div>
    <div class="search">
      <span>
        <p
          ref="editable"
          contenteditable
          v-on="listeners"
          @blur="checkSearch"
        />
      </span>
    </div>
    <div v-if="checkSearch" class="clear" :class="{clearable}" @click="clear">
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
        <path
          d="M24 21h-17l-7-7.972 7-8.028h17v16zm-16.09-14l-5.252 6.023 5.247 5.977h14.095v-12h-14.09zm6.09 4.586l2.586-2.586 1.414 1.414-2.586 2.586 2.586 2.586-1.414 1.414-2.586-2.586-2.586 2.586-1.414-1.414 2.586-2.586-2.586-2.586 1.414-1.414 2.586 2.586z"
        />
      </svg>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      search: ''
    }
  },
  computed: {
    listeners () {
      return {
        ...this.$listeners,
        input: this.onInput
      }
    },
    clearable () {
      return this.search.length > 0
    }
  },
  methods: {
    onInput (e) {
      this.search = e.target.textContent
    },
    onSearch () {
      if (!this.$refs.search.classList.contains('active')) {
        this.$refs.editable.focus()
      }
      this.$refs.search.classList.add('active')
    },
    checkSearch () {
      if (this.search.length === 0) {
        this.$refs.search.classList.remove('active')
      }
    },
    clear () {
      this.search = ''
      this.$refs.editable.textContent = ''
      this.$refs.search.classList.remove('active')
    }
  }
}
</script>

<style scoped lang="scss">
  section {
    display: flex;
    width: auto;
    .search {
      width: 0;
      height: 25px;
      text-align: left;
      overflow: hidden;
      display: flex;
      transition: all 0.3s ease 0s;
      p{
        width: 9999px;
        &:focus {
          outline: none;
        }
      }
    }

    .icon {
      transition: all 0.3s ease 0s;
      cursor: pointer;
      path {
        fill: #fff;
        opacity: .85;
      }
      &:hover{
        path{
          fill: #0b8673;
          opacity: 1;
        }
      }
    }

    .clear {
      opacity: 0;
    }

    .clearable {
      opacity: 1;

      path {
        fill: #fff;
        opacity: .85;
      }
    }
  }

  .active {
    .search {
      width: 180px;
      border-bottom: 2px solid #0b8673;
      span{
        width: 150px;
        margin: 0 10px;
        overflow: hidden;
        color: #fff;
        opacity: .85;
        font-size: 1em;
      }
    }
    .icon{
      position: relative;
      left: 3px;
      top: 1px;
      path{
        fill: #0b8673;
        opacity: 1;
      }
    }
    .clearable{
      position: relative;
      right: 15px;
      cursor: pointer;
      path{
        fill: #fff;
      }
    }
  }
</style>
