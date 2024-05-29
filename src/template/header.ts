import { QLabel } from "@nodegui/nodegui";

class Header {
    public header: QLabel;

    constructor() {
        this.header = new QLabel();
        this.header.setText("NQT Framework");
        this.header.setObjectName("header");
    }
}

export { Header }