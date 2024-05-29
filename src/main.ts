import { QMainWindow, QWidget, QLabel, QPushButton, QIcon, QBoxLayout, Direction, QGridLayout, QListView, QStandardItemModel, QAbstractItemModel, QListWidget, QListWidgetItem } from '@nodegui/nodegui';
import * as path from "node:path";
import sourceMapSupport from 'source-map-support';

import fs from 'fs';

// Custom Component
import { Layout } from './template/layout';

import { MainActivity } from './view/mainActivity';
import { Header } from './template/header';
import { Footer } from './template/footer';

sourceMapSupport.install();

function main(): void {
  // Parent View
  const rootView = new QWidget();
  rootView.setLayout(new QBoxLayout(Direction.TopToBottom));
  rootView.setObjectName("rootView");
  // Parent View

  // Layout View
  const layout = new Layout();
  // Layout View

  // Header
  layout.addHeaderClass(new Header());
  // Header

  // Content
  layout.addContentClass(new MainActivity());
  // Content

  // Footer
  layout.addFooterClass(new Footer());
  // Footer

  // Add Parent View Widget
  layout.setRootLayout(rootView);
  // Add Parent View Widget

  // CSS Area
  const cssFile = fs.readFileSync(path.join(__dirname, '../assets/css/global.css'), 'utf-8');
  rootView.setStyleSheet(cssFile);
  // CSS Area

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