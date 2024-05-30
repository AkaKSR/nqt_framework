import { QWidget } from '@nodegui/nodegui';
import fs from 'fs';

class CSS {
    private cssFile: any;
    private encoding: any;

    constructor(_encoding: String) {
        this.cssFile = "";
        this.encoding = _encoding;
    }

    setCss(_el: QWidget, filePath: any) {
        this.cssFile = fs.readFileSync(filePath, this.encoding);

        _el.setStyleSheet(this.cssFile.toString());
    }
}

export { CSS }