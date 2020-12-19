import FormRender from './components/form-render/index';

export default {
    FormRender,
    install(Vue) {
        Vue.component(FormRender.name, FormRender);
    }
}