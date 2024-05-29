import { QLabel } from "@nodegui/nodegui";

class Footer {
    public footer: QLabel;

    constructor() {
        this.footer = new QLabel();
        this.footer.setText("Copyright 2024. AkaKSR All rights reserved.");
        this.footer.setObjectName("footer");
    }
}

export { Footer }