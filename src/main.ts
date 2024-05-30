import { QMainWindow, QWidget, QLabel, QPushButton, QIcon, QBoxLayout, Direction, QGridLayout, QListView, QStandardItemModel, QAbstractItemModel, QListWidget, QListWidgetItem } from '@nodegui/nodegui';
import * as path from "node:path";
import sourceMapSupport from 'source-map-support';

// Custom Component
import { Layout } from './template/layout';

import { MainActivity } from './view/mainActivity';
import { Header } from './template/header';
import { Footer } from './template/footer';
import { CSS } from './util/css';

sourceMapSupport.install();

function main(): void {
  // Parent View
  const rootView = new QWidget();
  rootView.setLayout(new QBoxLayout(Direction.TopToBottom));
  rootView.setObjectName("rootView");

  // Layout View
  const layout = new Layout();

  // Header
  layout.addHeaderClass(new Header());

  // Content
  layout.addContentClass(new MainActivity());

  // Footer
  layout.addFooterClass(new Footer());

  // Add Parent View Widget
  layout.setRootLayout(rootView);

  // CSS Area
  const css = new CSS("utf-8");
  css.setCss(rootView, path.join(__dirname, '../assets/css/global.css'));

  // Window Object
  const win = new QMainWindow();
  win.setCentralWidget(rootView);
  win.setWindowTitle("NQT Framework");
  win.setWindowIcon(new QIcon(path.join(__dirname, '../assets/logox200.png')));
  win.resize(800, 600);
  win.show();
  global.win = win;
  // Window Object
}

main();