<template>
	<div>
		<div class="col-md-4">
			<div class="card">
			  <div class="card-body">
			    <h5 class="card-title">Post</h5>
			    <h6 class="card-subtitle mb-2 text-muted">{{post.id}}</h6>
			    <p class="card-text"><nuxt-link :to="{ name: 'posts-id', params: { id: post.id }}">{{post.title}}</nuxt-link></p>
			  </div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:['post']
	}
</script>