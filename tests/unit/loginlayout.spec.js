import { shallowMount, createLocalVue} from '@vue/test-utils'
import LoginLayout from '@/views/LoginLayout'
import VueRouter from 'vue-router'
import {routes} from '@/router/index'

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter({
    routes
});

describe('LoginLayout', ()=>{
    const wrapper = shallowMount(LoginLayout, {
        localVue,
        router
    });

    beforeEach(()=>{
        //перед каждыйм тестом обнуляем введенное кодовое слово
        wrapper.vm.inputtedWord = "";
    });

    it('Кодовое слово - "test"', ()=>{
        expect(wrapper.vm.codeWord).toEqual("test");

    });


    it('Есть поле для ввода кодового слова и кнопка для отправки', ()=>{
        expect(wrapper.find('.login > .login-form').exists()).toBe(true);
        expect(wrapper.find('.login > .login-form > label > input').exists()).toBe(true);
        expect(wrapper.find('.login > .login-form > button').exists()).toBe(true);
    });

    it('Поле для ввода связанно со свойством inputtedWord', ()=>{
        const testWord = 'word';
        const inputField = wrapper.find('.login > .login-form > label > input');
        inputField.element.value = testWord ;
        inputField.trigger('input');
        expect(wrapper.vm.inputtedWord).toEqual(testWord);

    });

    it('По умолчанию уведомления об ошибке нет (при error === false)', ()=>{
        expect(wrapper.find('.alert-error').exists()).toBe(false);
    });


    it('Отображается уведомление об ошибке при неправильно введеном кодовом слове', ()=>{
        wrapper.setData({inputtedWord:'wrong word'});
        wrapper.find('.login > .login-form > button').trigger('click');
        expect(wrapper.find('.alert-error').exists()).toBe(true);
    });


    it('Переход к экрану MainLayout при правильном введеном кодовом слове', ()=>{
        const correctWord = wrapper.vm.codeWord;
        wrapper.setData({inputtedWord: correctWord});
        wrapper.find('.login > .login-form > button').trigger('click');
        expect(wrapper.vm.$route.name).toBe('MainLayout')

    });


});