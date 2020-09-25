import Phaser from 'phaser';
import BattleModeMenuItem from './BattleModeMenuItem';

class BattleModeMenu extends Phaser.GameObjects.Container {
  constructor(scene, x, y) {
    super(scene, x, y);

    this.scene = scene;
    this.menuItems = [];
    this.currentMenuItemIndex = 0;
    this.x = x;
    this.y = y;
  }

  initialize() {
    this.scene.add.existing(this);
  }

  addMenuItem(menuItemText, boundObject) {
    const item = new BattleModeMenuItem(
      this.scene,
      0,
      this.menuItems.length * 20,
      menuItemText,
      boundObject
    );

    item.initialize();
    
    this.menuItems.push(item);

    // add to container
    this.add(item);

    this.onMenuItemAdded(item, boundObject);
  }
  
  onMenuItemAdded(menuItem, boundObject) {}

  activate() {
    const activeMenuItems = this
      .menuItems
      .filter((i) => i.active);

    if (activeMenuItems.length === 0) throw Error('no items in activated menu');

    activeMenuItems[0].select();

    this.currentMenuItemIndex = this.menuItems.indexOf(activeMenuItems[0]);
  }

  selectNext() {
    this.changeSelection(
      () => {
        do {
          this.currentMenuItemIndex--;

          if (this.currentMenuItemIndex < 0)
            this.currentMenuItemIndex = this.menuItems.length - 1;
        } while (!this.menuItems[this.currentMenuItemIndex].active);
      }
    );
  }

  selectPrevious() {
    this.changeSelection(
      () => {
        do {
            this.currentMenuItemIndex++;
            if (this.currentMenuItemIndex >= this.menuItems.length)
              this.currentMenuItemIndex = 0;
        } while (!this.menuItems[this.currentMenuItemIndex].active);
      }
    );
  }

  selectItem(index) {
    this.changeSelection(
      () => {
        if (!this.menuItems[index].active)
          throw Error(`item at index ${index} is inactive`);
          
        this.currentMenuItemIndex = index;
      }
    );
  }

  deselect() {
    this.menuItems[this.currentMenuItemIndex].deselect();
    this.currentMenuItemIndex = 0;
  }

  confirm() {

  }

  clear() {
    this.menuItems.forEach(
      (i) => i.destroy()
    );

    this.menuItems = [];
    this.currentMenuItemIndex = 0;
  }

  remap(options) {
    this.clear();

    options.forEach(
      (o) => this.addMenuItem(o.text, o.boundObject)
    );
  }

  changeSelection(updateIndexFunc) {
    this.menuItems[this.currentMenuItemIndex].deselect();

    updateIndexFunc();

    this.menuItems[this.currentMenuItemIndex].select();
  }
}

export default BattleModeMenu;