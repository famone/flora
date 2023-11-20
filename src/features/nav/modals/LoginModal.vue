<template>
    <div class="fixed top-0 left-0 h-full w-full bg-[rgba(0,0,0,.5)] z-20 flex justify-center items-center text-black"
        @click="closeModal">
        <div class="bg-white rounded-lg p-8 w-[400px] relative" @click.stop>

            <div @click="closeModal"
                class="h-8 w-8 rounded-full bg-white absolute -right-12 top-0 cursor-pointer flex justify-center items-center">
                <XMarkIcon class="text-gray-500 h-7" />
            </div>

            <h4 class="text-2xl font-bold mb-6 text-center">Личный кабинет</h4>
            <Input placeholder="Логин" v-model="data.login" class="mb-4" :error="v$.login.$error"
                @on-blur="v$.login.$touch" />
            <Input placeholder="Пароль" v-model="data.pass" :type="passwordVisible ? 'text' : 'password'" class="mb-4">
            <template #after>
                <EyeIcon class="after-icon h-6 text-gray-400" @click="changePassVisibility" v-if="!passwordVisible" />
                <EyeSlashIcon class="after-icon h-6 text-gray-400" @click="changePassVisibility" v-else />
            </template>
            </Input>
            <!-- <OtpInput /> -->
            <button class=" bg-primary rounded-xl px-4 py-4 text-white whitespace-nowrap font-bold w-full mb-4"
                @click="submitForm">
                Войти
            </button>
            <p class="text-center text-sm font-medium">
                Авторизуясь, вы соглашаетесь c политикой обработки персональных данных <br><br>
                У вас нет аккаунта? <a href="" class="text-primary_2">Зарегистрироваться</a>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import Input from '@/shared/Input.vue'
// import OtpInput from '@/shared/OtpInput.vue'
import { XMarkIcon, EyeIcon, EyeSlashIcon } from '@heroicons/vue/24/outline'
import { reactive, ref, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

const emit = defineEmits(['closeModal'])

const passwordVisible = ref(false)

const data = reactive({
    login: '',
    pass: ''
})

const rules = computed(() => ({
    login: {
        required
    }
}))

const v$ = useVuelidate(rules, data)


const submitForm = () => {
    v$.value.$validate()
    if (!v$.value.$error) {
        alert(123)
    }
}




function closeModal(): void {
    emit('closeModal')
}
function changePassVisibility() {
    passwordVisible.value = !passwordVisible.value
}

</script>

<style scoped></style>