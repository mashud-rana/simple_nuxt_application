<template>
	<h1>This is user {{$route.params.id}}</h1>
</template>

<script>
	export default{
		validate({params}){
			return /^\d+$/.test(params.id)
		},
		mounted(){
			console.log('abcd');
		}
	}
</script>