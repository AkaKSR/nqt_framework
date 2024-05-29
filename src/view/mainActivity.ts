import { QBoxLayout, QGridLayout, QIcon, QListWidget, QListWidgetItem, QPushButton, QWidget } from "@nodegui/nodegui";
import path from "path";

class MainActivity implements Activity {
    public listBtn: QPushButton;
    public listWidget: QListWidget;

    constructor() {
        this.listBtn = new QPushButton();
        this.listWidget = new QListWidget();

        this.listBtn.setObjectName("listBtn");
        this.listBtn.setIcon(new QIcon(path.join(__dirname, '../assets/logox200.png')));

        this.listWidget.setObjectName("listWidget");
        this.listBtn.addEventListener("clicked", () => {
            for (let i = 0; i < 100; i++) {
                let listItem = new QListWidgetItem();
                listItem.setText(i.toString());
                this.listWidget.addItem(listItem);
            }
        })
    }
}

export { MainActivity }