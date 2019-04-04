<template>
  <div>
    
    
         <md-table :table-header-color="tableHeaderColor"> 
           <template v-if="!customers.length">
              <md-table-row slot="md-table-row">
                <md-table-cell md-label="мэдэгдэл">Бичигдсэн ямар нэгэн мэдээлэл байхгүй байна.</md-table-cell>       
              </md-table-row>
          </template>
          <template v-else>
            <md-table-row v-for="item in customers" :key="item.id">
              <md-table-cell md-label="Компани">{{ item.company }}</md-table-cell>
              <md-table-cell md-label="Нэр">{{ item.name }}</md-table-cell>
              <md-table-cell md-label="Имэйл">{{ item.email }}</md-table-cell>
              <md-table-cell md-label="Утас">{{ item.phone }}</md-table-cell>
              <md-table-cell md-label="Үйлдэл">
                <md-list-item>
                    <router-link :to="`/customer/${item.id}`">
                        <md-icon>drafts</md-icon> 
                        <span>Үзэх</span>
                    </router-link>
                </md-list-item>
                 
              </md-table-cell>
            </md-table-row>
          </template>
        </md-table>
    
   
  </div>
</template>

<script>
export default {
  name: 'simple-table',
  props: {
    tableHeaderColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      selected: [],
      
    }

  },
  mounted(){
    this.$store.dispatch('getCustomers');
  },
  computed: {
    customers() {
      return this.$store.getters.customers;
    }
  }
}
</script>
