<template>
  <section>
    <search />
    <div class="account" ref="account" @click="$refs.account.classList.toggle('open')">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path
          d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z"
        />
      </svg>
      <div class="drop-down">
        <ul>
          <nuxt-link v-for="profileLink in 5" :key="profileLink.index" to="#">
            <li>
              <span>
                link
              </span>
            </li>
          </nuxt-link>
        </ul>
      </div>
    </div>
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
import Search from './Search'

export default {
  name: 'TopControls',
  components: { Search }
}
</script>

<style scoped lang="scss">
  section {
    display: flex;
    .account{
      position: relative;
      .drop-down{
        display: flex;
        flex-flow: column;
        position: absolute;
        border: 1px solid #0b8673;
        padding: 10px 35px;
        left: -180px;
        min-width: 200px;
        background: #2c3060;
        text-align: left;
        opacity: 0;
        transition: all 0.3s ease 0s;
        ul{
          list-style: none;
          text-decoration: none;
          padding: 0;
            a{
              text-decoration: none;
              list-style: none;
              color: #fff;
              opacity: .85;
              position: relative;
              &:hover{
                  color: #0b8673;
                  opacity: 1;
              }
              li{
                padding: 5px 0;
                margin: 1px 0;
              }
            }
          }
      }
    }
    .card{
      margin-left: 15px;
    }
    svg{
      cursor: pointer;
      &:hover{
        path{
          fill: #0b8673;
          opacity: 1;
        }

      }
      path{
        fill: #fff;
        opacity: .85;
      }
    }
    .open{
      .drop-down{
        opacity: 1;
      }
    }
  }
</style>
