<template>
    <transition name="modal" >
        <div class="modal-mask" >
            <div class="modal-wrapper" @click.self="$emit('close')">
                <div class="modal-container">
                    <div class="modal-header">
                        <slot name="header">
                            <input name="search" id="search" cols="30">
                            <button class="modal-default-button" @click="$emit('close')">
                            X
                            </button>
                        </slot>
                    </div>

                    <div class="modal-body">
                        <input type="checkbox" id="checkbox" v-model="checked">
                        <label for="checkbox"> smthn{{ checked }}</label>
                        <br>
                        <input type="checkbox" id="checkbox" v-model="checked2">
                        <label for="checkbox"> smthn{{ checked2 }}</label>
                        <br>
                        <input type="checkbox" id="checkbox" v-model="checked3">
                        <label for="checkbox"> smthn{{ checked3 }}</label>
                        <br>
                        <input type="checkbox" id="checkbox" v-model="checked4">
                        <label for="checkbox"> smthn{{ checked4 }}</label>
                        <br>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    setup() {
        
    },
}
</script>
<style>
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 70vw;
  height: 70vh;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
    border-radius: 25px;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}
.modal-body {
    flex-direction: column;
    margin: 5px 0;
    float: left;
}
.modal-body input{
    padding: 5em;
    flex: 1;
}


.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
    opacity: 0;
}

.modal-leave-active {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>