/* eslint-disable require-yield */
//BEGIN-SNIPPET sprites-snippet.js
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import move from 'ember-animated/motions/move';
import { easeOut, easeIn } from 'ember-animated/easings/cosine';

export default class SpriteExample extends Component {
  @tracked items = this.makeItems();

  makeItems() {
    let result = [];
    for (let i = 0; i < 7; i++) {
      result.push(this.randomItem(i));
    }
    return result;
  }

  *transition(context) {
    let { insertedSprites, keptSprites, removedSprites } = context;
    insertedSprites.forEach((sprite) => {
      sprite.applyStyles({ 'z-index': '1' });
      sprite.startAtPixel({ x: window.innerWidth });
      move(sprite, { easing: easeOut });
    });

    keptSprites.forEach(move);

    removedSprites.forEach((sprite) => {
      sprite.applyStyles({ 'z-index': '1' });
      sprite.endAtPixel({ x: window.innerWidth * 0.8 });
      move(sprite, { easing: easeIn });
    });
  }

  @action addItem() {
    let items = this.items;
    this.items = items
      .slice(0, 0)
      .concat([this.randomItem()])
      .concat(items.slice(0));
  }

  @action deleteItems() {
    let items = this.items;
    this.items = items.filter((item) => !item.deleteMessage);
  }

  randomItem(index) {
    const messages = [
      'Hi',
      'Hello',
      'Invitation',
      'Thank You',
      'Congratulations',
      'Namaste',
      'Happy Birthday',
      'Aloha',
      'Welcome',
      'Urgent',
      'Bom dia',
    ];
    let message = messages[Math.floor(Math.random() * messages.length)];
    if (index >= 0) {
      message = messages[index];
    }

    return {
      message: message,
      deleteMessage: false,
      received: new Date(),
    };
  }
}
//END-SNIPPET
