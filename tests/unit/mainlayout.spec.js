import { shallowMount} from '@vue/test-utils'
import MainLayout from '@/views/MainLayout'


describe('MainLayout', ()=>{

    const wrapper = shallowMount(MainLayout);

    it('Выводится любая надпись', ()=>{
        expect(wrapper.find('.main > h1').text()).not.toEqual("")

    });



});