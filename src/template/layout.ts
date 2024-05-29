import { FlexLayout, QGridLayout, QWidget } from "@nodegui/nodegui";
import { Header } from "./header";
import { Footer } from "./footer";

class Layout {
    headerView: QWidget;
    contentView: QWidget;
    footerView: QWidget;

    constructor() {
        this.headerView = new QWidget();
        this.contentView = new QWidget();
        this.footerView = new QWidget();
        
        this.headerView.setFixedHeight(35);
        this.footerView.setFixedHeight(35);

        this.headerView.setLayout(new QGridLayout());
        this.contentView.setLayout(new FlexLayout());
        this.footerView.setLayout(new QGridLayout());
    
        this.headerView.setObjectName("headerView");
        this.contentView.setObjectName("contentView");
        this.footerView.setObjectName("footerView");
    }

    addHeaderWidget(_el : QWidget) {
        this.headerView.layout().addWidget(_el);
    }

    addHeaderClass(_class : Header) {
        const tmp = Object.keys(_class);

        tmp.forEach((value, index, array) => {
            this.headerView.layout().addWidget(_class[value]);
        });
    }

    removeHeaderWidget(_el : QWidget) {
        this.headerView.layout().removeWidget(_el);
    }

    addContentWidget(_el : QWidget) {
        this.contentView.layout().addWidget(_el);
    }

    addContentClass(_class : Activity) {
        const tmp = Object.keys(_class);

        tmp.forEach((value, index, array) => {
            this.contentView.layout().addWidget(_class[value]);
        });
    }

    removeContentWidget(_el : QWidget) {
        this.contentView.layout().removeWidget(_el);
    }

    addFooterWidget(_el : QWidget) {
        this.footerView.layout().addWidget(_el);
    }

    addFooterClass(_class : Footer) {
        const tmp = Object.keys(_class);

        tmp.forEach((value, index, array) => {
            this.footerView.layout().addWidget(_class[value]);
        })
    }

    removeFooterWidget(_el : QWidget) {
        this.footerView.layout().removeWidget(_el);
    }

    setRootLayout(rootView : QWidget) {
        rootView.layout().addWidget(this.headerView);
        rootView.layout().addWidget(this.contentView);
        rootView.layout().addWidget(this.footerView);
    }
}

export { Layout }