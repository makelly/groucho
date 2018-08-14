// loopback-index.test.js - Loopback index tests

const expect = require('expect');
const index = require('./loopback-index.js');

describe('Class LoopbackIndex tests', () => {

  it('should new LoopbackIndex()', () => {
    let loopback = new index.LoopbackIndex({});

    expect(loopback).toExist();
  });

  it('should create(pointer, pointerNumber, callback)', () => {
    let loopback = new index.LoopbackIndex({});

    expect(() => {loopback.create('Anything', 1, (pointerNumber, result, description) => {});}).toNotThrow();
  });

  it('should remove(pointer, pointerNumber, callback)', () => {
    let loopback = new index.LoopbackIndex({});

    expect(() => {loopback.remove('Anything', 1, (pointerNumber, result, description) => {});}).toNotThrow();
  });

});
