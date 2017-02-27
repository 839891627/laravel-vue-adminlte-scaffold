<template>
  <div id="user">
    User
  </div>
</template>

<script>
  import { mapActions,mapGetters } from 'vuex'

  export default {
    data () {
      return {
        users: []
      }
    },
    computed: {
      ...mapGetters([
        'userList'
      ])
    },
    methods: {
      ...mapActions([
        'getUsers'
      ])
    },
    created () {
      this.getUsers()
    }
  }

</script>

