<template>		
   <div class="md-layout">
    <div class="md-layout-item"></div>
    <div class="md-layout-item my-row">
	    	<form @submit.prevent="authenticate" >
	    		<md-card>
			      <md-card-header  data-background-color="orange">
			        <h4 class="title">Нэвтрэх хэсэг</h4>
			       
			      </md-card-header>

				      <md-card-content>
				      	      
					           <div class="alert alert-danger" v-if="authError">
				                  <button type="button" aria-hidden="true" class="close">×</button>
				                  <span><b> Danger - </b> {{ authError }}</span>
				                </div>
				              <br>
					          <div class="md-layout-item md-small-size-100 md-size-100">
					            <md-field>
					              <label>Хэрэглэгч</label>
					              <md-input v-model="form.email" type="email" name="email"  autocomplete="email"></md-input>
					            </md-field>
					          </div>
	                          <br>
					          <div class="md-layout-item md-small-size-100 md-size-100">
					            <md-field>
					              <label>Нууц үг</label>
					              <md-input v-model="form.password" type="password" name="email" autocomplete="password"></md-input>
					            </md-field>
					          </div>
					        <br>
					        
					          <div class="md-layout-item md-size-100 text-right">
					            <md-button class="md-raised md-success" type="submit" value="Login">Нэвтрэх</md-button>
					          </div>
				        

				      </md-card-content>
		    	</md-card>
	  		</form>
    </div>
    <div class="md-layout-item"></div>
  </div>  	  	
	     	
</template>

<script>
	import {login} from '../../helpers/auth';
	export default {
		name: "login",
		data(){
			return {
				form: {
					email: null,
					password: null
				},
				error: null,
				 type: ['', 'info', 'success', 'warning', 'danger'],
			      notifications: {
			        topCenter: false
			      }
			};
		},
		methods:{
			/*алерт мсж ний хэсэг*/
			notifyVue (verticalAlign, horizontalAlign) {
			      var color = Math.floor((Math.random() * 4) + 1)
			      this.$notify(
			        {
			          message: 'Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer.',
			          icon: 'add_alert',
			          horizontalAlign: horizontalAlign,
			          verticalAlign: verticalAlign,
			          type: this.type[color]
			        })
			    },
			    /*form submit darwal ene method ajilna*/
			authenticate(){
				/*store iin mutations, action ii login method iig duudaj ajiluulj bna*/
				this.$store.dispatch('login');
                
				login(this.$data.form)
					.then((res) => {
						this.$store.commit("loginSuccess", res);
						this.$router.push({path: '/'});
					})
					.catch((error) => {
						this.$store.commit("loginFailed", {error});
					});
			}
		},
		computed:{
			authError(){
				
				return this.$store.getters.authError;

			}
		}
	}
</script>

<style scoped>
.md-layout{
	text-align: center;

}
.my-row{
	margin-top: 200px;
}
	.md-layout-item {
  
    height: 40px;

    &:after {
      width: 100%;
      height: 100%;
      display: block;
      background: md-get-palette-color(red, 200);
      content: " ";
    }
  }
 
</style>