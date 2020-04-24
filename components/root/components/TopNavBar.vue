<template>
  <nav>
    <ul>
      <li v-for="nav in navList" :key="nav.index">
        <nuxt-link :to="nav.path">
          {{ nav.title }}
          <span />
        </nuxt-link>
        <ul v-if="nav.child">
          <li v-for="child in nav.child" :key="child.index">
            <nuxt-link :to="child.path">
              {{ child.title }}
            </nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      navList: [
        {
          title: 'Catalog',
          path: '/catalog',
          child: [
            {
              title: 'man',
              path: '/catalog/man'
            },
            {
              title: 'man',
              path: '/catalog/man'
            },
            {
              title: 'man',
              path: '/catalog/man'
            },
            {
              title: 'man',
              path: '/catalog/man'
            }
          ]
        },
        {
          title: 'Contacts',
          path: '/contacts',
          child: null
        },
        {
          title: 'Contacts',
          path: '/contacts',
          child: null
        },
        {
          title: 'Contacts',
          path: '/contacts',
          child: null
        },
        {
          title: 'Contacts',
          path: '/contacts',
          child: null
        },
        {
          title: 'Contacts',
          path: '/contacts',
          child: null
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  nav{
    ul{
      list-style: none;
      text-decoration: none;
      display: flex;
      li{
        list-style: none;
        text-decoration: none;
        padding: 0 20px;
        background-color: transparent;
        position: relative;
        a{
          font: 500 13px/26px 'Roboto', sans-serif;
          color: #ffffff;
          display: block;
          letter-spacing: 1px;
          text-transform: uppercase;
          position: relative;
          width: auto;
          margin: 0px;
          border-bottom: 2px solid transparent;
          text-decoration: none;
          opacity: .85;

          span{
            width: 0;
            height: 4px;
            background: #0b8673;
            position: absolute;
            bottom: 0;
            left: 0;
            transition: all 0.3s ease 0s;

          }
        }
        ul{
          border: 2px solid #0b8673;
          background: #2c3060;
          opacity: 0;
          transform-origin: 50% 50% 0;
          transition: all 0.3s ease 0s;
          display: flex;
          flex-flow: column;
          text-align: left;
          position: absolute;
          max-height: 0;
          padding: 0;
          overflow: hidden;
          border-radius: 0;
          li{
            background: rgba(0, 0, 0, 0.08);
            border-radius: 5px;
            padding: 5px 50px;
            margin: 1px;
            transition: all 0.3s ease 0s;
            a{
              padding: 3px 0;
            }
          }
        }
        &:hover{
          a span{
            width: 120%;
            transform: rotate3d(1, 0, 0, 45deg);
          }
          ul{
            display: flex;
            opacity: 1;
            transform: scale(1);
            max-height: 900px;
            padding: 20px 10px;
            border-radius: 25% 5px;
            li:hover{
              background: #0b8673;
            }
          }
        }
      }
    }
  }
</style>
