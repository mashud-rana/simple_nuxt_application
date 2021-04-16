<template>
	<div>
		<h1>This is user page</h1>
		<input type="text" class="form-control" v-model="id">
		<button class="btn btn-success" @click="loadUser">Go To User</button>
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				id:''
			}
		},
		methods:{
			loadUser(){
				this.$router.push(`/users/${this.id}`);
			}
		}
	}
</script>