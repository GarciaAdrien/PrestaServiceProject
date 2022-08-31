<script setup lang="ts">
import navbar from '../components/navbar.vue'
</script>
<template>
  <main>
    <navbar />
    <div class="container">
	<form action="" class="m-auto" style="max-width:600px">
		<h3 class="my-4">Votre Prestation</h3>
		<hr class="my-4" />
		<div class="nom"><label for="nom2" class="col-md-5 col-form-label">Nom*</label>
			<div class="col-md-7"><input type="text" class="form-control-nom " id="nom2" name="nom"></div>
		</div>
		<div class="mail"><label for="mail3" class="col-md-5 col-form-label">Mail*</label>
			<div class="col-md-7"><input type="email" class="form-control-mail " id="mail3" name="mail"></div>
		</div>
		<hr class="bg-transparent border-0 py-1" />
		<div class="form-group mb-3 row"><label for="vos-services5" class="col-md-5 col-form-label">Vos Services*</label>
			<div class="col-md-7"><textarea class="text-area" id="vos-services5" name="vos-services"></textarea></div>
		</div>
 		<hr class="bg-transparent border-0 py-1" />
		<div class="form-group mb-3 row"><label for="vos-services5" class="col-md-5 col-form-label">Photos</label>
			<div class="col-md-7"><input type="file" id="docpicker"></div>
		</div>
		<div class="form-group mb-3 row"><label for="envoyer7" class="col-md-5 col-form-label"></label>
			<div class="col-md-7"><button class="btn btn-primary btn-lg" type="submit">Envoyer</button></div>
		</div>
	</form>
</div>
  </main>
</template>
<style>
label,h3 {
        font-weight: 800;
}
h3 {
    font-size:26px;
}

    .btn {
    color: #ffffff;
    padding: 0.8rem;
    font-size: 14px;
    text-transform: uppercase;
    border-radius: 4px;
    font-weight: 400;
    display: block;
    width: 100%;
    cursor: pointer;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: black !important;
}
    .btn:hover {
    color: #ffffff;
    padding: 0.8rem;
    font-size: 14px;
    text-transform: uppercase;
    border-radius: 4px;
    font-weight: 400;
    display: block;
    width: 100%;
    cursor: pointer;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: mediumvioletred !important;
}
.container {
    color: rgb(204, 29, 85);
    top: -400px;
    width: 500px;
    left: -600px;
    position: absolute;
}

.form-control-nom {
        width:200px !important;
}
.form-control-mail {
        width:200px !important;
}
.text-area {
    width:500px;
    height:300px;
}
</style>
