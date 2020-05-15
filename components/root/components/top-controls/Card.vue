<template>
  <section ref="card">
    <div class="card">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 25 25">
        <path
          d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"
        />
      </svg>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style scoped lang="scss">
  section{
    display: flex;
    width: 50px;
    svg{
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
  }
</style>
