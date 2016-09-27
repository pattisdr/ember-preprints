import Ember from 'ember';

export default Ember.Component.extend({
    isOpen: false,
    actions: {
        close() {
            this.set('isOpen', false);
        },
        savePreprint() {
            this.set('shareButtonDisabled', true);
            this.attrs.savePreprint();
        }
    }
});
