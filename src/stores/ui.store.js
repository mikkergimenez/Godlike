class UIStore {
    failMessage = '';
    showFailMessage = false;

	showFailure(failMessage) {
        this.failMessage = failMessage;
        this.showFailMessage = true;
    }

    hideFailure() {
        this.failMessage = '';
        this.showFailMessage = false;
    }
}

export default UIStore;