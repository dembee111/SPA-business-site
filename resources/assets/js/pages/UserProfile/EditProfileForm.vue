<template>
  <form @submit.prevent="add">
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Хэрэглэгч нэмэх</h4>
        <p class="category">Талбаруудыг үнэн зөв гүйцэт бөглөнө үү!</p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Нэр</label>
              <md-input v-model="name" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Цахим хаяг</label>
              <md-input v-model="email" type="email"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Компанийн нэр</label>
              <md-input v-model="company" type="text"></md-input>
            </md-field>
          </div>
          
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Утасны дугаар</label>
              <md-input v-model="number" type="number"></md-input>
            </md-field>
          </div>
         
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success" type="submit" value="Login">Хэрэглэгч нэмэх</md-button>
          </div>
        </div>

      </md-card-content>
    </md-card>
  </form>
</template>
<script>
export default {
  name: 'edit-profile-form',
  props: {
    dataBackgroundColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      customer:{
          name: null,
          email: null,
          company: null,
          number: null 
      },
      errors: null
           
    };
    
  },
  methods: {
    add(){
      
    }
  }
}

</script>
<style>

</style>
