<template>
    <div class="login">
        <form class="login-form">
            <label>Введите кодовое слово:<input autofocus v-model="inputtedWord"></label>
            <button v-on:click="login">Login</button>
        </form>
        <transition name="fade">
            <div v-if="error" class="alert alert-error">
                <h1>Ошибка</h1>
                <p>Введено неверное кодовое слово</p>

            </div>
        </transition>
    </div>


</template>

<script>


    export default {
        name: 'LoginLayout',
        data: function () {
            return {
                inputtedWord: "",
                error: false,
                codeWord:"test" //тут задаем кодовое слово
            }
        },
        methods: {
            login: function (event) {
                event.preventDefault(); //Предотвращаем отправку формы при нажатии на кнопку.
                if (this.inputtedWord === this.codeWord) {
                    this.$router.push({name: 'MainLayout'})
                } else {
                    this.error = true;
                }
            },

        }
    }
</script>

<style scoped>
    .login{
        position: relative;

    }



     .alert{
         position: absolute;
         top: 2em;
         width: 100%;
         text-align: center;
         border-radius: 1em;
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
     }

     .alert > p {
         margin-top: 0;

     }
     .alert > h1 {
         margin-top: 0.2em;
         margin-bottom: 0.4em;
     }

     .alert-error{
         background-color: #f2dede;
         color: #a94442;
         border: 1px solid #ebcccc;
     }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .7s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

</style>